var ob={
 width:5,
 height:4,
 area:function(){
  return 2*(this.width+this.height);
 }
 ,
 perimeter:function(){
    return this.width*this.height;
 },
 print:function(){
    return  document.write(`your width is <span style=color:red> ${this.width} </span>  , height: <span style=color:red>${this.height} </span> , area of a rectangle <span style=color:red>  ${this.area()} </span>,  perimeter of a rectangle <span style=color:red> ${this.perimeter()} </span> done `)


 }




}
document.write(ob.print());