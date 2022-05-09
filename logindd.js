var attempt = 3;        //no of attempt

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "12345" && password == "12345"){
alert ("Login successfully");
window.location = "navtab.html";              //navigate to other page after login 
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}