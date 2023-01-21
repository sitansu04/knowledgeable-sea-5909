// let cartdata = JSON.parse(localStorage.getItem("cartdata"));
// // console.log(cartdata);

// // let container = document.querySelector("#container");
// function displayproduct(cartdata) {
// //   console.log(typeof(cartdata))
//   let products=cartdata.forEach((item) => {
//     let div = document.createElement("div");
//     let img = document.createElement("img");
//     img.setAttribute("src", item["img-1"]);
//     // let br=document.createElement("br");
//     let title = document.createElement("p");
//     title.innerHTML = item.title;
//     let price = document.createElement("p");
//     price.innerHTML = item.price;
//     let colors = document.createElement("p");
//     colors.innerHTML = "Colours";
//     let size = document.createElement("p");
//     size.innerHTML = item["size-rage"];
//     let button = document.createElement("button");
//     button.innerHTML = "remove";
//     // button.addEventListener("click", () => {
//     //   cartdata.push(item);
//     //   console.log(cartdata)
//     //   localStorage.setItem("cartdata", JSON.stringify(cartdata));
//     // });
//     div.append(img, title, price, colors, size, button);
//     // container.append(div);

// });
// console.log(products);
// }
// displayproduct();


// // let cartdata =  JSON.parse(localStorage.getItem("cartdata"));

// document.querySelector("#item_count").innerHTML=`No of items ${cartdata.length}`


let cartitems=JSON.parse(localStorage.getItem("cartdata"))
console.log(cartitems)
displayproduct(cartitems);

function displayproduct(data) {
    let cointainer=document.getElementById("child-container")
    data.forEach(e => {
        let div=document.createElement("div");
        let img=document.createElement("img")
        img.setAttribute("src",e["img-1"]);
        div.append(img)
        // cointainer.append(div)
    });
}

document.getElementById("item_count")appe`No of items${cartitems.length}`)