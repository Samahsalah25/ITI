// var Custom={
// name:"samah",
// age:22,
// setget:function(){
   
//     for(const x in this)
//     {
        
//         if( typeof this[x]!==`function`)
//       {     
        
//           this[`get${x}`]=function(){return this[x]};
//           this[`set${x}`]=function(e){return this[x]=e}
         



//       }
      

//     }

// }


// }
// Custom.setget();
// console.log(Custom.getname());
// Custom.setname("Noor");
// c1.name=
// console.log(Custom.getname());
// console.log(Custom.getage());
// Custom.setage(24);
// console.log(Custom.getage());

// var s=na

// var stuff={
//     sub:"html",
//     time:4,

// }
// Custom.setget.call(stuff);  ///callllllll
// console.log(stuff.getsub());
// stuff.setsub("css");
// console.log(stuff.getsub());
// console.log(stuff.gettime());
// stuff.settime(10);
// console.log(stuff.gettime());
//////////////


function Custom(n,a,e)
{
    this.name=n;
    this.age;
   this.email;

   this.setget=function(){
    for(var x in this )
    {     if( typeof x!==`function`){
    
        Object.defineProperty(this,x,{

            get:function(){
                return this[x];
            },
            set:function(e){
                return this[x]=e

            }}
            

            )}
    }
   }
}
var ob=new Custom("samah",25,"Sssss");
console.log(ob);
ob.setget();
console.log(ob);
var stuff={
    sub:"html",
    time:4,

}
// Custom.setget.call(stuff); 
console.log(stuff);


