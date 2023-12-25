do{
    var num=parseInt(prompt("enter number of person"));
} while(isNaN(num))
console.log(num);
var namearr=[];
var agearr=[];

for(var i=0;i<num;i++)
{
    do {
    var username=prompt("enter name of user "+(i+1));
    }while(!isNaN(username))
    do {
        var userage=parseInt(prompt("enter age of user"+(i+1)));
        }while(!isFinite(userage))
        namearr.push(username);
        agearr.push(userage);
      
}

console.log(namearr.join(","));
console.log(agearr.join(","));
////////////////
var table=document.createElement("table");
table.style.cssText="border: 1px solid black";
table.setAttribute("class","table1");
var tr=document.createElement("tr");
var td1=document.createElement("th");
var td2=document.createElement("th");
var textd1=document.createTextNode("Name");
td1.style.cssText="border: 3px solid black ; width:400px";
td2.style.cssText="border: 3px solid black ;width:200px";
td1.appendChild(textd1);
var textd2=document.createTextNode("Age");
td2.appendChild(textd2);
tr.appendChild(td1);
tr.appendChild(td2);
table.appendChild(tr);

for(var i=0;i<agearr.length;i++)
{

    var tr2=document.createElement("tr");
    var td12=document.createElement("td");
    var td22=document.createElement("td");
    var textd1=document.createTextNode(namearr[i]);
    td12.style.cssText="border: 3px solid black ; width:400px";
    td22.style.cssText="border: 3px solid black ;width:200px";
    td12.appendChild(textd1);
    var textd22=document.createTextNode(agearr[i]);
    td22.appendChild(textd22);
    tr2.appendChild(td12);
    tr2.appendChild(td22);
    table.appendChild(tr2);


}
document.body.appendChild(table);




