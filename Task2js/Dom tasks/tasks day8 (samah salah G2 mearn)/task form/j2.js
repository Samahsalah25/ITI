var myurl=window.location.search;
var m=new URLSearchParams(myurl);
var l=m.get("name");
var adress=m.get("Adress");
var Email=m.get("Email");
var Phone=m.get("Phone")
var gender=m.get("Gender");
for(const [key,value] of m)
{
    console.log(key)
}
console.log(m.keys());
console.log(name);
console.log(adress);
console.log(Phone);
console.log(Email);
document.write(` your name is<span style=color:red>  ${l} </span> <br> `)
document.write(` your Email is <span style=color:red> ${Email} </span>  <br>  `)
document.write(` your Adress is <span style=color:red> ${adress} </span>  <br> `)
document.write(` your Phone is <span style=color:red> ${Phone} </span>  <br>  `)
document.write(` Gender: <span style=color:red> ${gender} </span>  <br>  `)



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