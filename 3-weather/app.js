const api = {
	key: "35f31bdff2980750028de320d86f14e6",
	base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
	// enter button is 13
	if(evt.keyCode == 13) {
		getResults(searchbox.value);
		searchbox.value = "";
	}
}

function getResults(query) {
	fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
		.then(weather => {
			return weather.json();
		}).then(displayResults);
}

function displayResults (weather) {
	let city = document.querySelector('.location .city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;

	let now = new Date();
	let date = document.querySelector('.location .date');
	date.innerText = dateBuilder(now);

	let temp = document.querySelector('.current .temp');
	temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;

	let icon = document.querySelector('.current .icon');
	icon.src = `images/${weather.weather[0].icon}.png`;

	let weather_el = document.querySelector('.current .weather');
	weather_el.innerText = weather.weather[0].description;

	let hiLow = document.querySelector('.current .hi-low');
	hiLow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;
}

function dateBuilder (d) {
	let months = ["January", "February", "March", "April", "May", "June", 
	"July", "August", "September", "October", "November", "December"];

	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();

	return `${date} ${month} ${year}`;
}