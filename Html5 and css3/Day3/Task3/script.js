var btn=document.querySelectorAll(".btn");
var img=document.querySelector(".img");
console.log(btn[0]);
console.log(img);
// btn[0].addEventListener("click", function () {
//     console.log("he;;p")
//     img.style.filter = 'saturate(100%)';
//     img.style.webkitFilter = 'saturate(100%)'; 
//     img.style.msFilter = 'saturate(100%)'; 
// });
btn[0].addEventListener("click", function () {
    img.style.filter = 'url("#saturate-filter")';
});


var svgFilter = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgFilter.innerHTML = '<defs><filter id="saturate-filter"><feColorMatrix type="saturate" values="100"/></filter></defs>';
document.body.appendChild(svgFilter);
btn[1].addEventListener("click",function(){

    img.style.filter="opacity(50%)";
    img.style.webkitFilter = 'opacity(50%)'; 
    img.style.msFilter = 'opacity(50%)'; 
})
btn[2].addEventListener("click",function(){

    img.style.filter="invert(90%)";
    img.style.webkitFilter = 'invert(90%)'; 
    img.style.msFilter = 'invert(90%)'; 
})
btn[3].addEventListener("click",function(){

    img.style.filter="sepia(80%)";
    img.style.webkitFilter = 'sepia(80%)'; 
    img.style.msFilter = 'sepia(80%)'; 
})
btn[4].addEventListener("click",function(){

    img.style.filter="grayscale(90%)";
    img.style.webkitFilter = 'grayscale(90%)'; 
    img.style.msFilter = 'grayscale(90%)'; 
})
