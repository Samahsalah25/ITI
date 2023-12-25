var btn1=document.querySelector(".btn1");
var d1=document.querySelector(".d1");
console.log(d1);
console.log(btn1);
var Xhruser=new XMLHttpRequest();
console.log(Xhruser);
btn1.addEventListener("click",req);
function req(){
Xhruser.open("get","https://jsonplaceholder.typicode.com/posts");
Xhruser.send();
Xhruser.addEventListener("readystatechange", function(){
if(Xhruser.readyState===4)
{
  if(Xhruser.status===200)
    {
      var user=JSON.parse(Xhruser.response);
      user.forEach(function(e) {
        d1.innerHTML+=`<h3>${e.title}</h3><p>${e.body}</p>`
        
      });
    
     
    }

}}
)






}