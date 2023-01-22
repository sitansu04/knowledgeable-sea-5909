let product = JSON.parse(localStorage.getItem("particular"));

document.getElementById(
  "image1"
).innerHTML = `<img src="${product[0]["img-1"]}"/>`;
document.getElementById(
  "image2"
).innerHTML = `<img src="${product[0]["img-2"]}"/>`;
document.getElementById(
  "image3"
).innerHTML = `<img src="${product[0]["img-3"]}"/>`;

document.getElementById("title").innerHTML = `${product[0].title}`;
document.getElementById("price").innerHTML = `${product[0].price}$`;

let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];

function addproduct(){
  cartdata.push(product[0]);
  console.log(cartdata);
  localStorage.setItem("cartdata", JSON.stringify(cartdata));
  alert("product added successfully");
}
document.getElementById("name").innerHTML=`${localStorage.getItem("username")}`

function signup(){
  window.location.href="login_signup.html"
}

const slideGallery = document.querySelector(".slides");
const slides = document.querySelectorAll("div");
const scrollbarThumb = document.querySelector(".thumb");
const slideCount = slides.length;
const slideHeight = 720;
const marginTop = 16;

const scrollThumb = () => {
  const index = Math.floor(slideGallery.scrollTop / slideHeight);
  scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
};

const scrollToElement = (el) => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(0, index * slideHeight + marginTop);
};

document.querySelector(".thumbnails").innerHTML += [...slides]
  .map(
    (slide, i) => `<img src="${slide.querySelector("img").src}" data-id="${i}">`
  )
  .join("");

document.querySelectorAll(".thumbnails img").forEach((el) => {
  el.addEventListener("click", () => scrollToElement(el));
});

slideGallery.addEventListener("scroll", (e) => scrollThumb());

scrollThumb();
