var username=document.querySelector(".name");
var age=document.querySelector(".age");
var email=document.querySelector(".email");
var btn=document.querySelector(".add")
var form=document.querySelector(".form");
var span=document.getElementsByTagName("span");
var adress=document.querySelector(".adress");
var phone=document.querySelector(".phone")
var male=document.querySelector("#male");
var female=document.querySelector("#female");
console.log(male);
console.log(female);


btn2=document.querySelector(".btn2")
var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var phoe=/01[0-2]\d{1,8}$/;
var table=document.createElement("table");
    table.style.cssText="border: 1px solid black";
    table.setAttribute("class","table1");
    var tr=document.createElement("tr");
    var td1=document.createElement("th");
    var td2=document.createElement("th");
    var td3=document.createElement("Email");
    var textd1=document.createTextNode("Name");
td3.innerText="Email";
td3.style.cssText="border: 3px solid black ;width:200px";
    td1.style.cssText="border: 3px solid black ; width:400px";
    td2.style.cssText="border: 3px solid black ;width:200px";
  
    td1.appendChild(textd1);
    var textd2=document.createTextNode("Age");
    td2.appendChild(textd2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
   
console.log(username);
console.log(age);
console.log(email);
console.log(btn);
console.log(form);
console.log(span);
window.onload=function(){
    username.focus();
}
function stop(){
setTimeout(function(){
    if(username.value===""&&age.value===""&&email.value===""&&phone.value===""&& adress.value==="" && !(male.checked) && !(female.checked) )
    {
       btn.disabled="true";
    }
},30000)
 
 

}
stop();


form.addEventListener("click",function(e){
    console.log(username.value.length);
    console.log(username.value);
   
    if(username.value==="" || isFinite(username.value) || username.value.length==1 )
    {   e.preventDefault();
    
          span[0].style.display="inline";
          username.value="";
          username.focus();
        console.log("error");

    }
    // else
    // {
    //     age.focus();

    // }
 else if(age.value==="" || !isFinite(age.value)|| age.value<10)
    {
        
        e.preventDefault();
        span[0].style.display="none";
       span[1].style.display="inline";
       age.value="";
      age.focus();
        console.log("error");

    }
//     else{
//         email.focus();
// }


else if(!(pattern.test(email.value)) )
{   e.preventDefault();
    span[0].style.display="none";
    span[1].style.display="none";
      span[2].style.display="inline";
     email.value="";
      email.focus();

    console.log("error");


}
else if(!(phoe.test(phone.value)) )
{   e.preventDefault();
    span[0].style.display="none";
    span[1].style.display="none";
    span[2].style.display="none";
      span[3].style.display="inline";
     phone.value="";
      phone.focus();

    console.log("error");


}
else if(adress.value==="" || isFinite(adress.value) || adress.value.length<4 )
{
    e.preventDefault();
    span[0].style.display="none";
    span[1].style.display="none";
    span[2].style.display="none";
      span[3].style.display="none";
      span[4].style.display="inline";
     adress.value="";
      adress.focus();

}

else{
    span[0].style.display="none";
    span[1].style.display="none";
    span[2].style.display="none";
    span[3].style.display="none";
    span[4].style.display="none";
    
    


}

})
