function toggleImage(element, num) {
	element.innerHTML = "";
	element.style.background = `url('images/butterfly${num}.jpg')`;
	element.style.backgroundSize = "cover";
	element.style.opacity = '0.95';
}