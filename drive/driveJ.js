const Slide=document.querySelector(".slide");
const Slide1=document.querySelector(".slide1");
const Images=document.querySelectorAll(".slide img");
const Images1=document.querySelectorAll(".slide .carousel-text img");
const Prev=document.querySelector("#prev");
const Next=document.querySelector("#next");
const Prevv=document.querySelector("#prevv");
const Nextt=document.querySelector("#nextt");
let i=1;
let j=1;
const size=1075;
const size1=(Slide1.clientWidth/3);
let isOpened=false;
var burger=document.querySelector("#hamburger");
var Menu=document.querySelector(".menu");
burger.addEventListener("click",function(){
  console.log("chal jaa yaar plij");
  // if(!isOpened){
  //   console.log("a");
  //   Menu.style.transform="translateX(0%)";
  //   isOpened=true;
  // }
  // else{
  //   console.log("d");
  //   Menu.style.transform="translateX(-100%)";
  //   isOpened=false;
  // }
  Menu.classList.toggle("navActive");
  document.body.classList.toggle("dark");
});
Slide.style.transform="translateX("+(-size*i)+"px)";
Next.addEventListener("click",function(){
  Prev.style.display="block";
  if(i>=Images.length-1) return;
  Slide.style.transition="transform 0.4s ease-in-out";
  i++;
  Slide.style.transform="translateX("+(-size*i)+"px)";
});
Prev.addEventListener("click",function(){
  Prev.style.display="block";
  if(i<=0) return;
  Slide.style.transition="transform 0.4s ease-in-out";
  i--;
  Slide.style.transform="translateX("+(-size*i)+"px)";
});
Slide.addEventListener("transitionend",function(){
  console.log("fired");
  if(Images[i].id==="first"){
    Slide.style.transition="none";
    i=2;
  }
  else if(Images[i].id==="last"){
    Slide.style.transition="none";
    i=5;
  }
});
Nextt.addEventListener("click",function(){
  Prevv.style.display="block";
  if(j>=Images1.length-1) return;
  Slide1.style.transition="transform 0.4s ease-in-out";
  j++;
  Slide1.style.transform="translateX("+(-size1*j)+"px)";
});
Prevv.addEventListener("click",function(){
  Prevv.style.display="block";
  if(j<=0) return;
  Slide1.style.transition="transform 0.4s ease-in-out";
  j--;
  Slide1.style.transform="translateX("+(-size1*j)+"px)";
});
Slide1.addEventListener("transitionend",function(){
  console.log("fired");
  if(j==5){
    Slide1.style.transform="translateX("+(size1*(j-5))+"px)";
    Slide1.style.transform="translateX(0)";
    j=1;
  }
});