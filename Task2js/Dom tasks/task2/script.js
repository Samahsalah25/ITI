var img=document.querySelector("img");
var ul=document.querySelector("ul");
var div1=document.querySelector(".navigation");

ul.style.cssText="list-style-type: circle; width:50px; display: inline-block ;text-align: left ; position:relative; top:300px";

console.log(img);
var imageClone=img.cloneNode("true");
imageClone.id="clone-img";

img.style.cssText="position:absolute ;top:0; right:0 ";
imageClone.style.cssText="position:absolute ;bottom:0;left:0";
document.body.appendChild(imageClone);