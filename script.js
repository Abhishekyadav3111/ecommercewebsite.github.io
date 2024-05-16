
// let navbar = document.querySelector(nav);

// document.querySelector('#menu-btn').onclick = () =>
// {
//     navbar.classList.toggle('active');
    
// }

var productImg=document.getElementById("productImg");
    var SmallImg=document.getElementsByClassName("small-img");

    SmallImg[0].onclick=function()
    {
        productImg.src=SmallImg[0].src;
    }
    SmallImg[1].onclick=function()
    {
        productImg.src=SmallImg[1].src;
    }
    SmallImg[2].onclick=function()
    {
        productImg.src=SmallImg[2].src;
    }
    SmallImg[3].onclick=function()
    {
        productImg.src=SmallImg[3].src;
    }
var LoginForm =document.getElementById("LoginForm");
var RegForm =document.getElementById("RegForm");
var Indicator =document.getElementById("Indicator");

function register(){
    RegForm.style.transform= "translateX(0px)";
    LoginForm.style.transform="translateX(0px)";
    Indicator.style.transform="translateX(100px)";

}
function login(){
     
    RegForm.style.transform="translate(300px)";
    LoginForm.style.transform="translate(300px)";
    Indicator.style.transform="translateX(0px)";
}