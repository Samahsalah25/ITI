
var btn=document.querySelector(".btn")
var text=document.querySelector("#Answer");
console.log(text);
console.log(btn);
window.onload=function()
{
  text.focus();

}
btn.onclick=function(){
   
    if (isNaN(text.value) || text.value===" "  )
    {
         console.log(text.value)
      text.value=" ";
      text.focus();
      console.log("hello");
    }
    else{
     alert(`your numver is ${text.value}`);
     text.focus();
     text.value=" ";
    }

}

// function isnum(e){
//     if (!isFinite(e))
//     {

//         btn.value=" ";
//     }


// }

// btn.addEventListener("onclick",onlynum);
// function onlynum() {
    
//     var text=document.querySelector("#Answer");
//     let res = text.value;

//     if (res != '') {
//         if (isNaN(res)) {

//             // Set input value empty
//             ip.value = "";

//             // Reset the form
            
//             return false;
//         } else {
//             return true
//         }
//     }
// }