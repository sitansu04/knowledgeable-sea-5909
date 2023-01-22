baseUrl = `http://localhost:7070/products/`;
let out = [];
async function allproducts() {
  let token = localStorage.getItem("accessToken");
  try {
    let res = await fetch(baseUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    if (res.ok) {
      out = await res.json();
      console.log(out);
      displayproduct(out);
      // sortData(out);
    }
  } catch (error) {
    console.log(error);
  }
}
allproducts();

let container = document.getElementsByClassName("busket");
let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
let particular = [];
function displayproduct(data) {
  container.innerHTML = "";
  data.forEach((item) => {
    let div = document.createElement("div");
    div.addEventListener("click", () => {
      particular.push(item);
      localStorage.setItem("particular", JSON.stringify(particular));
      window.location.href = "particular_product.html";
    });
    let img = document.createElement("img");
    img.setAttribute("src", item["img-1"]);
    // let br=document.createElement("br");
    let title = document.createElement("p");
    title.innerHTML = item.title;
    let price = document.createElement("p");
    price.innerHTML = `$${item.price}`;
    let colors = document.createElement("p");
    colors.innerHTML = "Colours";
    let size = document.createElement("p");
    size.innerHTML = item["size-rage"];
    let button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.setAttribute("class","bn11")
    button.addEventListener("click", () => {
      cartdata.push(item);
      console.log(cartdata);
      localStorage.setItem("cartdata", JSON.stringify(cartdata));
    });
    div.append(img, title, price, colors, size, button);
    document.getElementById("container").append(div);
  });
}

function Signup() {
  window.location.href = "login_signup.html";
}

// function sortData(data) {
  
  function Sorting() {
  let sorting = document.getElementById("sort");
  let x = sorting.value;
  console.log(x);
  if (x == "High") {
    out.sort((a, b) => {
      b.price - a.price;
    });
    console.log(out);
    displayproduct(out);
  } else if (x == "Low") {
    out.sort((a, b) => {
      a.price - b.price;
    });
    displayproduct(out);
  } else {
    displayproduct(out);
  }
}

out.sort((a,b)=> a.price-b.price)
console.log(out)

// sorting.addEventListener("change", () => {

// });
// }
document.getElementById("name").innerHTML=`${localStorage.getItem("username")}`

