// (function (){
//     var x=0;
//     var y=2;
   
//     function inner()
//     {
//         x++;
//         y++;
//         return ` x is ${x} y is ${y}  x+y ${x+y} `;
//     }
//     // console.log(`x is ${x} y is ${y} x+y = ${x+y} `)
//     return  inner;
// })()


// var t=tset();
// console.log(tset());
// console.log(tset());
// console.log(t());
// console.log(t());
// console.log(t());
// (function(){
//     console.log("hello samah");
// })()

// function user(name,age){
//     this.name=name;
//     this.age=age;
//     this.setGet=function(){
//         var self=this
//         for( var l in self)
//         {
//            ( function(){
//             var k=self[l];
          
//                 Object.defineProperty(self,k,{
    
//                     get:function(){
//                         return self.k;
//                     },
//                     set:function(e){
//                        return  self.k=e;
    
//                     }
//                 })})()
                


//         }
//     }
// }
// var ob1=new user("Samah",22);
// ob1.setGet();
// // console.log(ob1.setGet);
// // console.log(ob1.name);
// // ob1.name="salah";
// // console.log(ob1.name);

// console.log(ob1.name);
// console.log(ob1.age);
// ob1.name="noor";
// ob1.age=11;
// console.log(ob1.name);
// console.log(ob1.age);
// ob1.age=33;
// console.log(ob1.age);



// function Obj(names, id, Age) {
//     this.name = names;
//     this.id = id;
//     this.age = Age;

//     this.getSetGen = function () {
//         var self = this;
//         for (var x in self)
//             (function () {
//                 var key = x;
//                 {
//                     if ((typeof self[key]) !== 'function') {
//                         var valueOfProperty = self[key];
//                         Object.defineProperty(self, key,
//                             {

//                                 get: function () {
//                                     return valueOfProperty;
//                                 },
//                                 set: function (e) {
//                                     console.log(e);
//                                     return valueOfProperty = e

//                                 }
//                             }


//                         )
//                     }
//                 }
//             })()

//     }
// }
// var obj = new Obj("lolo", 22, 3);
// console.log(obj);
// obj.getSetGen();
// console.log(obj);
function user(name, age)
{
this.name=name;
this.age=age;
this.setGaet=function(){
 var self=this
    for( var k in self)
    {
        (function(){
            var Prooerty=self[k];
            Object.defineProperties(self,Prooerty,{
    
                        get:function(){return Prooerty},
                        set:function(e){self.Prooerty=e}
            })
        })()
      



    }
}

}
// var use= new user("samah",22);
// console.log(use);
// console.log(use.name);
// use.name="Mo7a";
// console.log(use.name);
// console.log(use.age);
// use.age=20;
// console.log(use.age);



// var t=(function(){
//  var arr=[1,2,3,4,5]
//  var summ=0;
//  function sum(){
//     for (let index = 0; index < arr.length; index++) {
//         summ+=arr[index];
//     }
//     return summ;
    
//  }
// // console.log(sum())
// return sum;

// })()
// console.log(t());
// console.log(t());
// console.log(t());
// console.log(t());
// console.log(t());
// (function(){
// var x=10;
//   console.log("samah salah Hussien")


// })();
// console.log(x);
(function main() {
    var userName = "Sean";
                  
      console.log(name());
                  
      function name() {
        return userName;
      }
      console.log(name());
    }
  )();