do{
    var _name=prompt("Hello enter your name");

} while(!isNaN(_name))
console.log(_name);


var exnumb=/^[0-9]{8}$/;
do{
    var _number=prompt(" enter number and lenght of number =8 such as '12345678 '");

} while(!exnumb.test(_number))
console.log(_number);
var mobile=/^01[0125][0-9]{8}$/;
do{
    var _mobile=prompt(" enter Mobile phone must begin '010|| 011||012 '");

} while(!mobile.test(_mobile))
console.log(_mobile)
  var email=/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
  do{
    var _email=prompt(" enter your email should be as ''abc@sd.com '");

} while(!email.test(_email))
console.log(_email);


document.write(`<h3>Hello <span style="color:red"> ${_name} </span> </h3> `);
document.write(`<h3>Yiur number is<span  style="color:red"> ${_number} </span></h3>`);
document.write(`<h3>Yor phone number is <span style="color:red"> ${_mobile} </span>  </h3>`);
document.write(`<h3>your Email is <span style="color:red"> ${_email} </span></h3>`);
