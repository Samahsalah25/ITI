var btn=document.querySelector(".btn");
var drob=document.querySelector(".drob");
var div1=document.querySelector(".value");

var div2=document.querySelector(".text");
var reset =document.querySelector(".reset");
var form =document.querySelector(".form");
form.onmousemove=function(e){
 
      this.innerHTML=e.clientX;


}


console.log(btn);

console.log(drob);

console.log(div1);

console.log(div2);

 function e(e){
 var re=confirm("do want to reset??");
 if (!re)
 { return e.preventDefault();

 }

 }

function on(){
    div1.innerHTML=" "
    div2.innerHTML=" "
   for(var i=0;i<drob.clientHeight; i++)
   {

    if (drob.options[i].selected==true )
    {
        var value =drob.options[i].value;
        var text=drob.options[i].text;
        div1.innerHTML+=" "+value;
        div2.innerHTML+=" "+text;




    }

   }



}