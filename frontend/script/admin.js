const baseUrl = `http://localhost:7070/users/`;
const producturl = `http://localhost:7070/products/`;
const productdelete = `${producturl}delete/`;
async function data() {
  let res = await fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(res)
  if (res.ok) {
    const data = await res.json();
    displaycard(data);
  }
}
data();

function displaycard(data) {
  let container = document.getElementById("table_body");
  container.innerHTML = `
      ${data
        .map((elem) => {
          return `<tr>
         <td>${elem.name}</td>
         <td>${elem.email}</td>
     </tr>`;
        })
        .join("")}    
    `;
}

async function products() {
  let res = await fetch(producturl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    let data = await res.json();
    console.log(data);
    displayproducts(data);
  }
}
products();

function displayproducts(data) {
  let container = document.querySelector(".bottom_section");
  container.innerHTML = `
   ${data
     .map((elem) => {
       return `<div>
        <img src="${elem["img-1"]}">
        <p>${elem.title}</p>
        <p>Tall Fit</p>
        <p>MRP $${elem.price}</p>
        <button onclick="deletedata(${elem["_id"]})" class="delete_btn" data-id="${elem["_id"]}">Delete</button>
    </div>`;
     })
     .join("")}
  `;
  let all_dlt_btns = document.querySelectorAll(".delete_btn");
  for (let dlt_button of all_dlt_btns) {
    dlt_button.addEventListener("click", (e) => {
      let id = e.target.dataset.id;
      delete_product(id);
    });
  }
}

async function delete_product(id) {
  let token = localStorage.getItem("admintoken");
  console.log(token);
  console.log(id);
  try {
    let res = await fetch(`${productdelete}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    if (res.ok) {
      alert("Data deleted successfully");
      products();
    }
  } catch (error) {
    console.log(error);
  }
}

let form = document.querySelector("#add_item_form form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
        "title":document.getElementById("name").value,
        "price":+(document.getElementById("price").value),
        "size-rage":(document.getElementById("Size").value),
        "img-1":document.getElementById("img").value,
    };
     post_product(obj);
})

async function post_product(obj){
  let res=await fetch(`${producturl}create`,{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify(obj),
  })
  console.log(res);
  if(res.ok){
    let data=await res.json()
    products(data)
    alert("Data added successfully");

  }
}
