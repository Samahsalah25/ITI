window.alert(" Welcome to my site");
do{
var theyName= prompt("enter your name");

if(isNaN(theyName))
{
var color=prompt("choose red, green or blue")
if (color=="red"){
    document.write('<h2 style='+'"color:'+color+'"'+'> welcom ' + theyName.toString() + ' </h2>')

}else if (color=="green"){
    document.write('<h2 style='+'"color:'+color+'"'+'> welcom ' + theyName + ' </h2>')

}
else if (color=="blue"){
    document.write(`<h2 style=`+`"color:`+color+`"`+`> welcom ` + theyName + ` </h2>`)
}
else {
    document.write("<h2>enter valued color  </h2>")
}
}}
while(isFinite(theyName));

