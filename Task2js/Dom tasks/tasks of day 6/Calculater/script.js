var result=" ";
// var r='.';
// console.log(typeof(eval(r)));


function EnterNumber(e){

  
    document.querySelector("#Answer").value+=" " +e;


}
function EnterOperator(e)
{
    
    document.querySelector("#Answer").value+=" " +e;

}
function EnterEqual(e)
{
    
   var equal =eval( document.querySelector("#Answer").value);
   console.log(equal);
   document.querySelector("#Answer").value=equal;

   
}
function EnterClear(e)
{
    

    document.querySelector("#Answer").value=" ";

}
console.log( document.querySelector("#Answer").innerText);