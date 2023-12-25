var arr=[];
var usernum;


for(let i=0;i<5;i++)
{
  var n=parseInt(prompt("enter 5 number"));
  if(isNaN(n))
{
    alert("should enter number");
    i--;
    continue;
}


  arr.push(n);


}


  
 


  document.write(`<span style="color:red">yous numbers are: </span> ${arr} <br>`)
document.write(`<span style="color:red">your numbers sorted by ascending </span> ${arr.sort(function(a,b){ return a-b})} <br>`)
document.write(`<span style="color:red">your numbers sorted by descending</span> ${arr.sort(function(a,b){ return b-a})} <br>`)
console.log(arr);
