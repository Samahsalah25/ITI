
/////set cookie
function setcookie(key,value,exprisedate)
{
    var date=new Date(exprisedate)
    document.cookie=`${key} =${value}; expires= ${exprisedate};`
    return true;

}

function getcookie(key)
{
    var arr=document.cookie.split("; ")
  
    var res=false;
 for(let i=0;i<arr.length;i++)
 {
    var arr1=arr[i].split("=");
    if(arr1[0]===key)
    {     
       res=arr1[1];
      //  console.log(res);
   
    }
  
  }
  return res ;
}
////////function get all cookie;
function getallcookie(){
    var arr=document.cookie.split("; ")
  for(let i=0;i<arr.length;i++)
  {     let arr1=arr[i].split("=");
     console.log(` key is ${arr1[0]} : value is ${arr1[1]}`)
  }
   return;
}
/////has cookie
function hasCookie(cookieName) {
  var result=false
if (document.cookie.includes(cookieName +"="))
{
  result=true
}
return result;

    
}
///delete cookie
function deleteCookie(cookiename){
  if (!hasCookie(cookiename))
  {
    throw `soory cookie is not found`
  }
  else{
    var date = new Date("1999-05-25");
    document.cookie = cookiename + "=;expires=" + date.toUTCString();;
  }
}
console.log(setcookie("username","samah","2023-12-26"))
console.log(getcookie("user"))
console.log(getallcookie());
console.log(hasCookie("username"));
console.log(hasCookie("use"));
console.log(getallcookie());
// console.log(deleteCookie("user"))
console.log(getallcookie());
// console.log(deleteCookie("samah"));   delet done error




