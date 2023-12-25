var d1=document.querySelector(".d1");
var d2=document.querySelector(".d2")
var d3=document.querySelector(".d3");
var d4=document.querySelector(".d4");
var d5=document.querySelector(".d5");
var d6=document.querySelector(".d6");
console.log(d1);
var arr=[d1,d2,d3,d4,d5,d6];
console.log(arr);

var i=0;
var time ;

function bg(){
   
    if (i>arr.length-1 || i<0) i=0;
    console.log(i);
    setTimeout(bg,1000);
    console.log(arr[i]);
    if (i===0)
    {
    arr[i].style.background="rgb(16, 104, 126)"
    arr[arr.length-1].style.background="#ffebcd";
    }
else
{
    console.log(i);
  arr[i].style.background="rgb(16, 104, 126)";
   arr[i-1].style.background="#ffebcd";
   console.log(i-1);
}
    i++;  
    console.log("hello");
}
bg();
