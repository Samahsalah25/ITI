do{
    var str=prompt("enter string ");
}while(!isNaN(str))

var palindrom;
var len=str.length;
var confirm=confirm("You want to consider the case?")
for(let i=0;i<str.length;i++)
{
    if(confirm)
    {

    
    if (str[i] === str[len - 1 - i] ) 
    {
        palindrom= 'It is  a palindrome..';
       
    }
    else
    {
    palindrom= 'It is not a palindrome..';
}}
else
{

    if (str[i] === str[len - 1 - i] || str[i].toUpperCase() === str[len - 1 - i] ||str[i].toLowerCase() === str[len - 1 - i]) 
    {
        palindrom= 'It is  a palindrome..';
       
    }
    else
    {
    palindrom= 'It is not a palindrome.';
}





}

    
      

}


console.log(palindrom);
document.write(`the strin <span style="color:blue">${str}</span> : <span style="color:red"> ${palindrom} </span>`);