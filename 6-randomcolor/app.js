const btn = document.getElementById("changecolor");
const game = document.getElementById("flipbtn");
const color = document.querySelector(".color");
const submit = document.getElementById("submit");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

document.body.onload = changeColor();

btn.addEventListener('click', function() {
	ncolor = changeColor();
	color.textContent = "#"+`${ncolor}`;
});

game.addEventListener('click', function() {
	changeColor();
});

submit.addEventListener('click', function() {
	let inHex = document.getElementById("hex").value;
	let bcolor = document.body.style.backgroundColor;
	bcolor = rgbToHex(bcolor);
	
	if (inHex === bcolor) 
		alert("Correct!");
	else if (inHex.length == 6)
		alert("That's not right, the correct answer is #"+`${bcolor}`)
});

function getRandom(max) {
	return Math.floor(Math.random() * max);
}

function changeColor() {
	let ncolor = "";

	for(let i=0 ; i < 6 ; i++) {
		ncolor += `${hex[getRandom(hex.length)]}`;
	}

	document.body.style.backgroundColor = "#"+`${ncolor}`;
	return ncolor;
}

function rgbToHex(rgb) {
	// rgb is in the form: rgb(###, ###, ###)
	rgb = rgb.slice(4, rgb.indexOf(")"));
	rgb = rgb.split(", ");
	
	r = "" + componentToHex(parseInt(rgb[0])) 
			+ componentToHex(parseInt(rgb[1])) 
			+ componentToHex(parseInt(rgb[2]));
	
	return r.toUpperCase();
}

function componentToHex(c) {
	let h = c.toString(16);
	return h.length == 1 ? "0" + h : h;
}