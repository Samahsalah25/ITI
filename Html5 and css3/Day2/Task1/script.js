var redrange=document.querySelector(".red1");
var bluerange=document.querySelector(".blue1")
var greenrange=document.querySelector(".green1");
console.log(redrange);
console.log(bluerange);
console.log(greenrange);
var h3=document.querySelector(".h3");
console.log(h3);
redrange.addEventListener("input",function(){
    console.log("hello");
    h3.style.color=`rgb(255,0,${redrange.value})`;




})
/////////////////////////
greenrange.addEventListener("input",function(){
    console.log("hello");
    h3.style.color=`rgb(0,${greenrange.value},0)`;




})
//////////////////////
bluerange.addEventListener("input",function(){
    console.log("hello");
    h3.style.color=`rgb(0,0,${bluerange.value})`;




})