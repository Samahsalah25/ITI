/*let m="1,2,3,EE,l,z,,e,r,o,_,s,c,h,o,o,l,2,0,z";
let solution=m.split("").map(function(ele){
    return ele==="_"?" ":ele

}).filter(function(ele){
 
    return ele!="@"&&ele !=","&&ele!="_"  && isNaN(parseInt(ele))})
  solution.pop(); 
  solution.shift();
 solution= solution.reduce(function(acc ,curr){
        return `${acc}${curr}`

    })
console.log(solution); */

//// task 2 in zero challange
 /*let mix=[1,2,3,4,"E",4,"l","z","e","r",5,"o"];
 let m= mix.map(function( ele){
    return isNaN(parseInt(ele))? ele:""
 }).reduce((acc ,curr)=> acc +curr
 )
 console.log(m);*/

 /////// task 5
 /*
 let nums=[2,12,11,5,10,1,99];
 let n= nums.reduce(
    function(acc ,curr){
        return curr%2===0? acc*curr :acc+curr;
    }

 ,1)
 console.log(n); */
 let n=[1,10,-10,-10,5,"A",3,"B","C"];
 let u=n.filter(ele=>!isNaN(parseInt(ele))).map(ele=>-ele )
 console.log(u);
 