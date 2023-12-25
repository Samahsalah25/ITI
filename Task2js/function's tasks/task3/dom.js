

for(let i=0;i<100;i++)
{var div=document.createElement("div");
div.className="Product";
var h3=document.createElement("h3");
var texth3=document.createTextNode("Hello");
h3.appendChild(texth3);
var p=document.createElement("p");
var textp=document.createTextNode("Samah");
p.appendChild(textp);
var hr=document.createElement("hr");
div.appendChild(h3);
div.appendChild(p);
div.appendChild(hr);
    
document.body.appendChild(div);
}