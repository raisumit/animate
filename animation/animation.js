var btn =document.querySelector(".to-ship button");
var alien2 =document.querySelector(".alien-2");
var bult =document.querySelector("#bullet");
var bultButton=document.querySelector("#fire");
var shield=document.querySelector("#sh-p");

btn.addEventListener("click",function(){
    alien2.classList.toggle("vis");
});
bultButton.addEventListener("click",function(){
    bult.classList.toggle("bult");
    shield.classList.toggle("visible")
})
// function fn1(){
//     bult.classList.toggle("bult");
// }