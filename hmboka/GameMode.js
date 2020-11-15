var cars = [];
document.getElementById("MainHeader").innerHTML = "Select Game Mode"; //provides text in main header
document.getElementById("buttonBegin").innerHTML = "Click to Begin"; //provides text for button


function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}