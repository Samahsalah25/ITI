var arr=["OIP (2).jpeg","OIP (3).jpeg","OIP (4).jpeg","OIP (5).jpeg","OIP (6).jpeg","OIP (7).jpeg","OIP (8).jpeg"]
var btn=document.querySelector(".btn");
var btn2=document.querySelector(".btn2");
var btn3=document.querySelector(".btn3");
var img=document.querySelector(".img");
i=2;
// btn.onclick=function(){
   
//     if(i>5) i=2;
//     console.log("hello every ");
//     console.log(img);
//     img.src=`OIP (${i}).jpeg`;
//     i++;
//     btn2.onclick=function(){
//         i--;
//         img.src=`OIP (${i}).jpeg`;
       
//     }
  
// }

// img.onmousemove=function(){
//     if(i>5) i=1;
//     console.log("hello every ");
//     console.log(img);
//     img.src=`OIP (${i}).jpeg`;
//     i++;
// }

var i=-1;
btn.onclick=function(){
    i +=1; 
    if(i>arr.length-1) i=0;
 img.src=arr[i];
 console.log(i);

 console.log("hello");

}
btn2.onclick=function(){
    i -=1;   
    if(i<=0)
    { img.src="OIP (1).jpeg"; 
    i=0;

}
     else
     {
         img.src=arr[i];
         console.log(i);
 console.log("hello");
} 
}
var time;
  function  change(){
 time=setTimeout(change,2000)
 i +=1; 
 if(i>arr.length-1) i=0;
img.src=arr[i];

  }
  function  stop(){
    clearTimeout(time);
   // img.src=arr[i];
    
   
     }
   
