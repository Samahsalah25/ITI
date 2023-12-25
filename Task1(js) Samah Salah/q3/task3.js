/* do{
   
    var n= prompt("staemant");

if(isNaN(n))
{
    for(num = 1; num <7 ; num++)
     {
        
        document.write("<p>" + "<h"+num+">" + n);
        }
  
}}
while (isFinite(n)) */

/*let Products=["Keypords" ,"Maause","Monitor" ,"Labs","Mai","Ameer"];
let colors=["red","blue","green"];
let showcount=2;
document.write(`<h1> Show ${showcount} </h1>`);
for(let i=0;i<showcount;i++)
{
    document.write(`<div>`);

document.write(`<h3> [${i+1}] ${Products[i]} </h3>`);

for(let k=0;k<colors.length;k++)
{
  
document.write(`<h4 style="color:red" onclick="alert ('Hello, world!')"> ${colors[k]} </h4>`);
}
document.write(`<h5> ${colors.join("||")} </h5>`);


 document.write(`</div>`);
}*/



/*let admins=["Ahmed","Osama","Sayed","Stop","Nada"];
let employee=["Amged","Samah","Ammer","Omar","Othman","Amany","Samai"];
document.write(`<div> We have X Admins </div>`);

for(let i=0;i<admins.length;i++)
{

   
    if(admins[i]!=="Stop")
    {
        document.write(`<hr> <div>The admin for team ${i+1} is ${admins[i]}  `);
        document.write(`<h2>  Team Work </h2>`);
        let count=1;
    for (let y = 0; y < employee.length; y++) {
      
        if(admins[i][0]===employee[y][0])
        document.write(`<div> ${count++} ${employee[y]} `);
        
    }}
    else{
        break
    }
    
}*/
/*
let a="Elzero Web School";
console.log(a.slice(2,6));
console.log(a.charAt(13).toUpperCase().repeat(8));
console.log(a.slice(0,6));
let x=a.substring(0,7);
let y=a.substring(11);
let z=x.concat(y);
console.log(z);
console.log(a);
let t= a.charAt(0).toLowerCase();
let m=a.substr(1);
let r=t.concat(m);
console.log(r);
let u=a.substr(length-1).toLowerCase();
let l=a.substr(0,a.length);
console.log(l.concat(u));

*/
/*
do{
    var n=prompt("Hello enter value string","");

}while(!n)*/
function userData(user="unknown",age=0,rate=0,show=false,...sk)
{
    do{
        var n=prompt("enter you name please");
       
   
     } while( !n || !isNaN(n)  )
        
        do{
            var x=parseInt(prompt("inter your age please"));
        } while(!x)
        
       
        do{
            var m= prompt("enter your first skills");
           
       
         } while( !m || !isNaN(m)  )
       
        do{
            var o= prompt("enter your second skills");
           
       
         } while( !o || !isNaN(o)  )
        var w=[];
        w.push(m);
        w.push(o);



        
    document.write(`<div>`);
    document.write(`<h2> Hello  ${n}`)
    document.write(`<p> My age is ${x} </p>`);
    if(show===true)
    {
        if(sk!==" ")
        {
            for(let i=0;i<sk.length;i++){
        document.write(`<p> Your skills is:<span style="color:red""> ${w[i]} </span></p>`);
    }}
    else
    {
        document.write(`No have Skills`)
    }
}
    else
    {
        document.write(`Hidden skills`);
    }

    document.write(`<div>`);

}
    userData("Samah",24,4,true,"html","Css");