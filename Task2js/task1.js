var arr=[];
var sum=0;
var mult=1;
var d=1;
var usernum;


for(let i=0;i<3;i++)
{
  var n=parseInt(prompt("enter 3 number"));
  if(isNaN(n))
{
    alert("should enter number");
    i--;
    continue;
}
else{

  arr.push(n);
}

}


  
  for(let i=0; i<3;i++)
  {
  arr.push(usernum);
  sum+=arr[i];
  mult*=arr[i];
  d/=arr[i];

  }


document.write(`<span style="color:red">you have the values</span> ${arr} <br>`)
document.write(`<span style="color:red">sum of 3 numbers are: </span> ${sum} <br>`)
document.write(`<span style="color:red">Multiplication of 3 numbers are: </span> ${mult} <br>`)
document.write(`<span style="color:red">devision of 3 numbers are :</span> ${d} <br>`)
console.log(arr);
console.log(sum);
console.log(mult);
console.log(d);