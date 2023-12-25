/*var date=/^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/;

do{
    var dates=prompt(" enter the date in the following format (DD / MM / YYYY) ex. 22/01/1999");

}while(!date.test(dates))
console.log(dates);
*/
var user=prompt(" enter the date in the following format (DD / MM / YYYY) ex. 22/01/1999");
var day;
var month;
var year;


function test(dates)
{
    newdate = year + "/" + month + "/" + day;
    day=parseInt(user.substring(0,2));
    month=parseInt(user.substring(3,5));
    year=parseInt(user.substring(6));

    var newdate=   year +"/"+month+"/"+day;
  try{
    if(dates.length!==10 || dates[2]!=="-" || dates[5]!=="-"  || day>31 ||month>12 || isNaN(day) || isNaN(month) || isNaN(year)  )
    {
        throw "sorry";
      
    }
    else
    {

    document.write(`your day is ${newdate}`);
    }


}
    catch{
        alert("Wrong date format");
        console.log("sorry")

    }
}
test(user);

