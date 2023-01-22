let redirect=()=>{
    window.location.href="allproducts.html"
}

document.getElementById("name").innerHTML=`${localStorage.getItem("username")}`

function signup(){
    window.location.href="login_signup.html";
}
