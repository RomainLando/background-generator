var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.querySelector("button");

function setGradient() {
	changeBackground(color1.value, color2.value)
	displayGradient();

}

function randomGradient() {
	rand1 = getRandomColor();
	rand2 = getRandomColor();
	changeBackground(rand1,rand2)
	displayGradient();
	color1.value = rand1;
	color2.value = rand2;
}

function displayGradient() {
	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackground(a,b) {
	body.style.background=
	"linear-gradient(to right, "
	+ a
	+ ", "
	+ b
	+ ")";
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomize.addEventListener("click", randomGradient);
