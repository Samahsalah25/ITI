var date=/^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/;

do{
    var dates=prompt(" enter the date in the following format (DD / MM / YYYY) ex. 22/01/1999");

}while(!date.test(dates))
var dateobj=new Date(dates);

var day ;
switch(dateobj.getDay())
{
    case 0:
    day="Sunday";
    break;
    case 1:
    day="Monday";
    break;
    case 2:
    day="Tuesday";
    break;
    case 3:
    day="Wednesday";
    break;
    case 4:
    day="Thursday";
    break;
    case 5:
    day="Friday";
    break;
    case 6:
    day="Saturday";
    break;
    default:
        day="unknown";
    



}
alert(`the Day of fate ${dateobj} is ${day}`)
