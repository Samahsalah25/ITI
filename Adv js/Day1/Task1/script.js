function Trungle(w,h)
{
   this.width=w,
   this.height=h,
   this.area=function(){

    return this.width*this.height;
   }
   this.pre=function(){
  
return 2*(this.width+this.height);

   }
  
 return " ";

}
Trungle.prototype.display=function()
{return document.write(`width = ${this.width} height= ${this.height} area = ${this.area()} pre= ${this.pre()} <br> `)}


// var ob=new Trungle (4,5);
// var ob2=new Trungle(6,8);
// document.write(ob.display());
// document.write(ob2.display());
//  function Trungle(w,h){
//     (function(){
//         var Width=this.w;
//         Object.defineProperty(this,"width",{
          
//             get: function(){return Width},
//             // set :function(e){
//             //     console.log(e)
//             //     if(isNaN(e)){
//             //         Width=e;
//             //     }
//             // }
//         })
//     })()
//  }
 var ob1=new Trungle(8,7);
 var ob3=new Trungle(2,3);
 console.log(ob1.display());
 console.log(ob3.display());