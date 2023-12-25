do{
    var str=prompt("enter any number contain e leeter ");
   
    
}while(!isNaN(str))
var count=0;
var str1=str.split("");
  for(let i=0;i<str1.length;i++)
  {
    if(str1[i]==="e")
    {
        count++;
    }

  }
  document.write(`<p>your string is <span style="color:red"> ${str1.join("")} `);
  document.write(`<p>Count of "e" letter in your string : <span style="color:red"> ${count} </span> `);
console.log(typeof(str));

console.log(count);
