

// // let cartdata =  JSON.parse(localStorage.getItem("cartdata"));

// document.querySelector("#item_count").innerHTML=`No of items ${cartdata.length}`


let cartitems=JSON.parse(localStorage.getItem("cartdata"))||[]
console.log(cartitems)
displayproduct(cartitems);

function displayproduct(data) {
    let cointainer=document.getElementById("child-container")
    cointainer.innerHTML="";
    data.forEach((e,index) => {
        let div=document.createElement("div");
        div.setAttribute("id","item");
        let div1=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",e["img-1"]);
        image.setAttribute("id", "card_img")
        div1.append(image);
        let div2=document.createElement("div");
        let title=document.createElement("p");
        title.innerHTML=e["title"];
        let h3=document.createElement("h5");
        h3.innerHTML=`Product id-${e["_id"]}`;
        let color=document.createElement("h5");
        color.innerHTML="Dark Bown"
        let button=document.createElement("button")
        button.innerHTML=`Remove <br>
        <i class='fa fa-remove'></i>
        `
        button.setAttribute("id","remove_btn")
        button.addEventListener("click",()=>{
            removeelement(e,index);
        })
        div2.append(title,h3,color,button)
        div.append(div1,div2)
        cointainer.append(div)
        // console.log(e.title)
    })
}

document.getElementById("item_count").innerHTML=`No of items : ${cartitems.length}`
let total_amount=0
for(let i=0;i<cartitems.length;i++){
    total_amount+=cartitems[i].price;
}
// console.log(total_amount);
document.getElementById("amount").innerHTML=`${total_amount}$`
document.getElementById("amount-1").innerHTML=`${total_amount}$`


function removeelement(e,index){
    cartitems.splice(index,1);
    localStorage.setItem("cartdata",JSON.stringify(cartitems));
    displayproduct(cartitems);
}