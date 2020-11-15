var cars = [];
document.getElementById("MainHeader").innerHTML = "Select Game Mode"; //provides text in main header
document.getElementById("buttonBegin").innerHTML = "Choose amount of questions:"; //provides text for button


function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}