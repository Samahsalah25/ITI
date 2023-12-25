/*function add(...num)
{
    for(let i=0;i<num.length;i++)
    {
      if(!isFinite(num[i]))
      {
        document.write(`sorry you should enter number`);
      }
      else
      document.write(` ${num[i]} `);

    }
}

var res=add("samah",2,4);
document.write(res); */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  var m=isNumber("samah");
  document.write(` ${m} `);
