var str="hello Samah";


i=0;
var res="";
  


setInterval(() => {
    
    if (i===str.length) 
    {
    window.close();
    }
    res=str[i];
   document.write(` <span style="color:red ; text-align: center;"> ${res} </span>`);
  
   i++
   console.log(i);
}, 1000);

