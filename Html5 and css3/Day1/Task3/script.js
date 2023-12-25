var pro=document.querySelector(".progress");
var span=document.querySelector(".span");
console.log(pro);
console.log(span);
var count=1;

function add(){
 if(count<100)
 {   pro.value=count;
    count+=10;
    span.innerText=pro.value+"%";

 }
 else{
    count=1;
 }
 setTimeout(add,1000)


}
add();
