var div=document.createElement("div");
var text=document.createTextNode("Hello samah");
div.style.cssText="background-color:blue ;padding 40px ;margin:20px ;width:500px;height:80px ;display:flex ;align-items:center;justify-content: center; text-align:center ;color:white;font-size:18px";
div.appendChild(text);
div.id="samah";
var clone=div.cloneNode(true);
clone.id="div-clone";
document.body.append(div);
document.body.append(clone);
clone.onclick=function()
{
    clone.style.background="red";
}


/// function return colors;
function getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
  }
  // const getRandomNumber = (maxNum) => {
  //   return Math.floor(Math.random() * maxNum);
  // };
  div.onclick=function(){
    var clone2=div.cloneNode(true);
    clone2.style.background=getRandomColor();
    document.body.appendChild(clone2);
  }
// div.onclick=function()
// {
//     var clone2=div.cloneNode(true);
//     clone2.style.background=getRandomColor();
//     document.body.appendChild(clone2);

// }
