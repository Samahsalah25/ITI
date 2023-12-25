var i=0;
function Trungle(w,h)
{
   this.width=w,
   this.height=h
    Trungle.count++;
   
  
 
 
  
}
Trungle.count=0;
Trungle.test=function(){
  return Trungle.count;
}
Trungle.prototype.Calare=function(){ return this.width*this.height};
Trungle.prototype.Calprei=function(){return 2*(this.width+this.height)}
var ob1=new Trungle(5,5);
var ob2=new Trungle(5,5);
var ob3=new Trungle(5,5);
var ob4=new Trungle(5,5);
console.log(ob1.toString());

Trungle.prototype.toString=function()
{return document.write(`width = ${this.width} height= ${this.height} area = ${this.Calare()} pre= ${this.Calprei()} <br> `)}



console.log(ob1.Calare());

console.log(ob1.toString());

console.log(Trungle.test());

