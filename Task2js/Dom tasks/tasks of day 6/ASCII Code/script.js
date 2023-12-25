var text=document.querySelector(".text");
var span=document.querySelector(".span");
// console.log(text);
// window.onload=function(){
//     text.focus();
// }
// function myFunction(e) {
//     console.log(e);
//     alert(`you click in ${e.keyCode}`);
//     console.log(e.keyCode);
//     text.value=" ";

//   }
// text.onkeydown()=function(){
//      alert(`you click in ${e.charCodeAt(0)}`);

// }
//   function printAsscii(e){
//     var x = e.charCodeAt(0);
//     span.innerText=x;
//     console.log(e.charCodeAt(0));
    
// }
window.addEventListener("keydown",function(e){
   if(e.key==="Control" || e.key==="Shift" )
   {
    span.innerText=` your char is ${e.key}  no ascicode`;
    this.alert(`your char is ${e.key}  no ascicode`);

   }
   else
   {
    console.log(e.key.charCodeAt(0));
    span.innerText=` your char is ${e.key} : and asci code is ${e.key.charCodeAt(0)}`;
    this.alert(`your char is ${e.key} : and asci code is ${e.key.charCodeAt(0)}`);
   }
  
})