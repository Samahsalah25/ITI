var img=document.getElementsByTagName("img");
console.log(img);
var arr=[img[0],img[1],img[2],img[3],img[4]];
console.log(arr);


var i=0;
var temp="";
var st=setInterval(animation,1000);
function animation (){
  

    if(i>-1 && i<4 )
    {
    temp=arr[i].src;
    arr[i].src=arr[i+1].src;
    arr[i+1].src=temp;
    console.log(img[i]);
    temp=" ";
    i++;
    }

    else {
         i=0;
         console.log("temp"+temp)
        console.log((arr.length-1).src)
         temp=arr[i].src;
        arr[i].src= img[4].src
        img[4].src=temp;
        
        
    
     };
     console.log(i)
 

}
function con(){
    setInterval(animation,1000);


}


function stop()
{
    clearInterval(st);

}
