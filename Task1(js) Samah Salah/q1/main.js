/////task1 



/////////////////////////
var sum=0;
var user;
do{

user=parseInt(prompt("Enter numbers"));
if(isNaN(user))
{
    alert("should number not empty");
    continue;
}
if(user==0)
{
alert("shoul number not =0");
break;
}
if((sum+user)>100)
{
    alert("sum grateer than 100 stop")
    break;
}
sum+=user;
}while(user!==0 && sum<100);
alert("Sum ="+sum);