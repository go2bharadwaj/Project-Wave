let question = "Welcome to Project Wave!" //string for question
document.getElementById("MainHeader").innerHTML = question;

function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}