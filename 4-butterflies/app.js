function toggleImage(element, num) {
	if(element.innerHTML != "")
	{
		element.innerHTML = "";
		element.style.background = `url('images/butterfly${num}.jpg')`;
		element.style.backgroundSize = "cover";
		element.style.opacity = '0.95';
	}
	else if(element.innerHTML == "")
	{
		element.style.background = 'rgba(234,234,234,.7)';
		element.innerHTML = "&#129419";
	}
}