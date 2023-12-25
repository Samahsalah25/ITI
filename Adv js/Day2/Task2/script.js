var i=1;
var n=1;
////////parent 1 sahpe
function Shape(w,h){
this.width=w;
this.height=h;
   if(this.constructor===Shape)
   {
    throw "sorry ! you can't do any instance from Shape Object "
   }

}
Shape.prototype.display=function(){
 
 return document.write(`width is ${this.width} heighh is ${this.height} <br>`)
}

///parent 2 and child to parent1
function Rectangle(w,h){
       
    Shape.call(this,w,h);
     if(this.constructor===Rectangle)
     { 
        if(i>1)
        {
            throw "Sorry tou can't use greater than 1 object";
        }
        i++;

     }


   
}
Rectangle.prototype=Object.create(Shape.prototype);
Rectangle.prototype.constructor=Rectangle;
Rectangle.prototype.area=function(){
    return this.width*this.height;
}
//// child 2 (inheriate from child1)
function squre(w,h,r){

this.r=r;
  Rectangle.call(this,w,h);
  if(this.constructor===squre)
  { 
     if(n>1)
     {
         throw "Sorry tou can't use greater than 1 object";
     }
     n++;

  }
}
squre.prototype=Object.create(Rectangle.prototype);
squre.prototype.constructor=squre;
squre.prototype.hello=function(){
    console.log("hello");
}
          //obj 1 parent 1 
//           var ob1=new Shape(2,2);
// console.log(ob1); 

var ob2=new Rectangle(4,5); 
console.log(ob2) 
// var c=new Rectangle(3,3)
// console.log(c);
   ///obj of parent 2 and child 1
console.log(ob2.display());
console.log(ob2.area());

var ob3= new squre(3,2,1)    //obj3 child 2
console.log(ob3);
console.log(ob3.width);
console.log(ob3.r);
//////// console all objects
var ob4=new squre(4,6,1);
console.log(ob4);


console.log(ob3);
console.log(ob3.display());

