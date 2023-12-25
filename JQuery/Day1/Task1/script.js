
var user;
function registor(){
  
   
var username=document.querySelector(".username");
var age=document.querySelector(".age");
var male=document.querySelector(".male");
var female=document.querySelector(".female")
var select=document.querySelector(".select")
var btn=document.querySelector(".btn")
var form=document.querySelector(".form1");



 user ={
    username:username.value,
    age:age.value,
    Gender:(male.checked? male.value:female.value),
    color:select.value,
    visit:1
}
console.log(user)
setcookie("user",JSON.stringify(user))
window.location="/display.html"
username.value=""
age.value=""

}
var data=document.querySelector(".data"); 


function displaydata(){
    if(hasCookie("user"))
    {
    var usercookie=JSON.parse(getcookie("user"));
    var imageSrc = (usercookie.Gender === "female") ? "/2-removebg-preview.png" : "/1-removebg-preview.png";
   
    data.innerHTML = `
  <img src="${imageSrc}" style="width: 150px; height: 120px; border-radius: 50%;" class='welcome-image'>
  Welcome, <span class='welcome-name' style='color: ${usercookie.color}'>${usercookie.username}</span>.
  You have visited this site <span class='visit-info' style='color: ${usercookie.color}'>${usercookie.visit}</span> times.
`;
var hello =document.querySelector(".hello");
var login=document.querySelector(".login")
hello.innerHTML=` <img src="${imageSrc}" style="width: 90px; height: 50px; border-radius: 50%;" class='welcome-image'> hello :  <span class='welcome-name' style='color: ${usercookie.color}'>${usercookie.username}</span> `
login.style.backgroundColor = usercookie.color;


// data.innerHTML=`<img src="${imageSrc}" style="width: 150px; height: 120px; border-radius: 50%;" class='welcome-image'> Welcome , <span class='welcome-name' style='color: " ${usercookie.color}"'>   " ${usercookie.username}
// "</span> You have visited this site:<span class='visit-info' style='color: ${usercookie.color}> ${usercookie.visit} </span> times `
usercookie.visit++;
setcookie("user", JSON.stringify(usercookie));

}}
////////logout
function logout()
{
    location.href=`/index.html`
}

