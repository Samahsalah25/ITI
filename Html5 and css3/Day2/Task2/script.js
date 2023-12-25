var canvas = document.querySelector("#can1");
var color=document.querySelector(".color");
var btn=document.querySelector(".btn1");
console.log(canvas);
console.log(color);
console.log(btn);

var ctx = canvas.getContext("2d");
btn.addEventListener("click",function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < canvas.width; i++) {
   
       
        var ron2 = Math.floor(Math.random() * canvas.width); // Generate a random y-coordinate
        ctx.beginPath();
        ctx.strokeStyle = color.value;
        ctx.fill();
        ctx.arc(ron2, i*5, 20, 0, 2 * Math.PI);
        ctx.stroke();
        
    
    }
    

})
