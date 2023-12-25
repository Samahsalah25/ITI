var arr=[];
function Books(name){
this.name=name

  
arr.push(this.name);

}


function Box(height,width,length,content,material,volume){
   this.height=height;
   this.width=width;
   this.length=length;
   this.numbook=0;
   this.volume=volume;
   this.material=material;
   this.content=content;
    this.num=function(){
       this.numbook=0
    for(var i in this.content)
    {
      this.numbook++;
    }
    return this.numbook

    }

      this.deletebook=function(e){
        var x1,x2;
      for (var i=0;i<this.content.length;i++)
      {
        if(this.content[i]===e)
        {
            x1 =this.content.slice(0,i);
            x2=this.content.slice(i+1);
            this.content=x1.concat(x2);
  
            
        }
      

      }
      return this.content;
      
      }


     
    
    }
Box.prototype.toString=function(){
    return this.width*this.height*this.length;
}
Box.prototype.valueof=function(){
  return this.num();
}


var kl=new Books("samah");
var k4=new Books("Salah");
var k5=new Books("Hussien");
var k6=new Books("Mohamed");

console.log(arr);
var k2=new Box(3,2,1,arr);
var k3=new Box(2,2,1,["Html","Css","Js","AdvJs","oh"]); 
  ///height and width and lenght
console.log(k2.content)

console.log(k2.content[1]);

console.log(k2.num());
console.log(k3.content)
console.log(k3.num());

console.log(k3.valueof()+k2.valueof());

console.log(k2.deletebook("samah"));

console.log(k2.toString());
 