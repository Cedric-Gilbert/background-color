var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector(".button");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+")";

	css.textContent = body.style.background + ";";
}

function setRandomColor () {
	var r1 = Math.floor(Math.random() * 256);
	var g1 = Math.floor(Math.random() * 256);
	var b1 = Math.floor(Math.random() * 256);
	var r2 = Math.floor(Math.random() * 256);
	var g2 = Math.floor(Math.random() * 256);
	var b2 = Math.floor(Math.random() * 256);	
	body.style.background = "linear-gradient(to right, rgb(" + r1 + ", " +g1 + ", " +b1 + "), rgb(" + r2 +", " +g2 + ", " + b2 +"))"

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColor);