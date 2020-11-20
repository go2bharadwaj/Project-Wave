var cars = [];
document.getElementById("MainHeader").innerHTML = "Welcome to Project Wave!";
document.getElementById("buttonBegin").innerHTML = "Click to Begin";
var number = 1;
document.getElementById("RedDot").innerHTML = number;


function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}