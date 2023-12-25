let a=3;
let b=2;
[a,b]=[b,a];
console.log(a,b);



////
let arr=[2,3,4,1,6];
function myFun(a) {
    var max=Math.max(...a);
    var min=Math.min(...a);
    return document.write(` max value is ${max} , min value is${min} `)
}
console.log(myFun(arr))
console.log(Math.max(...arr));
console.log(Math.min(...arr))
//////////////
var m=["apple", "strawberry", "banana", "orange",
"mango"]
var test1= m.map((e)=>e.startsWith("a"));
var every= m.every((e)=>e.startsWith("a"));
var some= m.some((e)=>e.startsWith("a"));
var filt=m.filter((e)=>{return e.startsWith("a")||e.startsWith("b")});
var mapp=m.map((e)=> {return `I love ${e}`});
console.log(every);
console.log(some);
console.log(filt);
console.log(mapp);

var k=mapp.forEach((element) => console.log(element));
// var r=mapp.forEach(function(e){return e});
console.log(k);


