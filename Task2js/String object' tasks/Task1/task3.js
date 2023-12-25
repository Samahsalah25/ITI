/*do{
    var str=prompt("enter string ");
}while(!isNaN(str))
console.log(str);
var palindrom;
var len=str.length;
var confirm=confirm("You want to consider the case?")
for(let i=0;i<str.length;i++)
{
    if (str[i] === str[len - 1 - i] && str[i].toUpperCase() === str[len - 1 - i]) {
        if(confirm)
        {

            palindrom= "It is  a palindrome";

        }
        else
        {
            palindrom= 'It is not a palindrome';
        }
       
    }
    else
    palindrom= 'It is not a palindrome';
}
var confirm=confirm("You want to consider the case>?")
console.log(palindrom);
document.write(`the strin <span style="color:blue">${str}</span> : <span style="color:red"> ${palindrom} </span>`)
*/
do{
    var str=prompt("enter string ");
}while(!isNaN(str))
var confirm=confirm("You want to consider the case?");
var palindrom;
if( confirm){
    if(str===str.split("").reverse().join("") )
{
    palindrom="It is a palindrome";

} 
    else
    {
        palindrom="It is not a palindrome";

    }
}

 else 
 {
 if (str===str.split("").reverse().join("") ||str===str.split("").reverse().join("")||str.toLowerCase()===str.split("").reverse().join("")  )
    {
        palindrom="It is a palindrome";
    
    } 
    else
    {
        palindrom="It is not a palindrome";

    }
  

 }




document.write(`the strin <span style="color:blue">${str} </span> : <span style="color:red"> ${palindrom} </span>`)

