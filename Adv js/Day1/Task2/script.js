var input=document.querySelector(".input")
var form=document.querySelector(".form");
var span=document.querySelector(".s")
var form2=document.querySelector(".form2");

console.log(span);
console.log(input);
console.log(form2);


window.onload=function(){
  input.focus();
}
  form.addEventListener("click",function(e){
   
   
   
 if(input.value==="" || !isFinite(input.value))
    {
        
        e.preventDefault();
      
        span[0].style.display="inline";
       input.value="";
      input.focus();
        console.log("error");

    }
    else{
     
     
      form.style.display="none"
      form2.style.display="inline";
   
      console.log(form2);
      e.preventDefault();

      


    }


  })
  /////////////////////////////////////////////
  var myurl=window.location.search;
var par=new URLSearchParams(myurl);
var number=par.get("number")
console.log(number);

function Author(name,email){
  this.name=name;
  this.email=email;
}

var bookName=[];
var pricebooks=[];
var authorbooks=[];
var emails=[];
var username=document.querySelector(".name");
var price=document.querySelector(".price");
var email=document.querySelector(".email");
var btn=document.querySelector(".add")

var span=document.getElementsByTagName("span");
var authorName=document.querySelector(".Authorname");
console.log(form.action);

btn2=document.querySelector(".btn2")
var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
window.onload=function(){
    username.focus();
}
var i=0;

form2.addEventListener("click",function(e){
  
   
    if(username.value==="" || isFinite(username.value) )
    {   e.preventDefault();
    
          span[1].style.display="inline";
         username.value=""
          username.focus();
        console.log("error");

    }
    // else
    // {
    //     age.focus();

    // }
 else if(price.value==="" || !isFinite(price.value))
    {
        
        e.preventDefault();
        span[1].style.display="none";
       span[2].style.display="inline";
       price.value="";
      price.focus();
        console.log("error");

    }
//     else{
//         email.focus();
// }
else if(authorName.value==="" || isFinite(authorName.value) )
{   e.preventDefault();
  span[2].style.display="none";

      span[3].style.display="inline";
      authorName.value="";
      authorName.focus();
    console.log("error");

}


else if(!(pattern.test(email.value)) )
{   e.preventDefault();
    span[0].style.display="none";
    span[1].style.display="none";
    span[3].style.display="none";
      span[4].style.display="inline";
     email.value="";
      email.focus();

    console.log("error");


}


else{
    
  e.preventDefault();
    span[0].style.display="none";
    span[1].style.display="none";
    span[2].style.display="none";
    span[3].style.display="none";
    span[4].style.display="none";
    console.log("hello");
   
    function Book(){
      this.name=username.value;
      this.price=price.value;
      this.author= new Author (authorName.value,email.value)
    
    
    }
    var n=new Book();
    bookName.push(n.name)
    pricebooks.push(n.price)
    emails.push(n.author.email);
    authorbooks.push(n.author.name);
    console.log(n.name)
    console.log(n.price)
    console.log(n.author.name)
    console.log(n.author.email)
    console.log(input.value)
    console.log(bookName);
    console.log(emails);
    username.value="";
    price.value="";
    email.value="";
    authorName.value="";
    username.focus();
    i++;
   if(i>=input.value)
   {
  form2.style.display="none"
    form.style.display="none";
    document.write(`<table id="myTabel" border=2 style=""><thead><td >Book's Name</td><td>Price</td><td>author's Name</td><td>author's email </td>
    
    <thead>`)
    for(var m=0;m<input.value;m++)
    {
      document.write(`<tbody><tr><td class="tbd1" >${bookName[m]}</td><td class="tbd2">${pricebooks[m]}</td><td class="tbd3">${authorbooks[m]}</td><td class="tbd4" >${emails[m]} <td><button onclick="editRow(this)" >Update</button></td> <td><button class="u" onclick="deleteRow(this)">Delete</button></td> </tbody>`)
    }
    
    }
    
  
  



}

})
function deleteRow(button) {
  const tr = button.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
}
function editRow(button) {

  var row = button.parentNode.parentNode;
  
  
  var id = row.querySelector(".tbd1").innerText;
  var name = row.querySelector(".tbd2").innerText;
  var email = row.querySelector(".tbd3").innerText;
  var author = row.querySelector(".tbd4").innerText;
  var delet=document.querySelector(".u");

 
  row.querySelector(".tbd1").innerHTML = `<input class="n1" type="text" value="">`;
  row.querySelector(".tbd2").innerHTML = `<input class="n2" type="text" value="">`;
  row.querySelector(".tbd3").innerHTML = `<input class="n3" type="text" value="">`;
  row.querySelector(".tbd4").innerHTML = `<input class="n4" type="text" value="">`;


  row.querySelector(".n1").focus();

  button.innerText = "Save";
  button.onclick = function () {
    saveRow(button);
  };
}

function saveRow(button) {
 
  var row = button.parentNode.parentNode;

 
  row.querySelector(".tbd1").innerText = row.querySelector(".n1").value;
  row.querySelector(".tbd2").innerText = row.querySelector(".n2").value;
  row.querySelector(".tbd3").innerText = row.querySelector(".n3").value;
  row.querySelector(".tbd4").innerText = row.querySelector(".n4").value;



  button.innerText = "Update";
  console.log("hjf");
  button.onclick = function () {
    editRow(button);
  };



}
