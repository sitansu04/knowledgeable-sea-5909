baseUrl = `http://localhost:7070/products/`;

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
      let data = await res.json();
      console.log(data);
      displayproduct(data);
    }
  } catch (error) {
    console.log(error);
  }
}
allproducts();

let container = document.getElementsByClassName("busket");
let cartdata = [] ||JSON.parse(localStorage.getItem("cartdata")) ;
function displayproduct(data) {
  data.forEach((item) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", item["img-1"]);
    // let br=document.createElement("br");
    let title = document.createElement("p");
    title.innerHTML = item.title;
    let price = document.createElement("p");
    price.innerHTML = item.price;
    let colors = document.createElement("p");
    colors.innerHTML = "Colours";
    let size = document.createElement("p");
    size.innerHTML = item["size-rage"];
    let button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.addEventListener("click", () => {
      cartdata.push(item);
      console.log(cartdata)
      localStorage.setItem("cartdata", JSON.stringify(cartdata));
    });
    div.append(img, title, price, colors, size, button);
    document.getElementById("container").append(div);
  });
}

