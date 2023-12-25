var area
do{
    var squre=parseInt(prompt("enter the value of yoy sequre"))
    if(isNaN(squre))
    {
        alert("should enter number");
        continue;
    }
     area=Math.pow(squre,2)*Math.PI;

}while(!squre )
alert("total area is :"+area);
