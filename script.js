function load() {
	let internet = document.getElementById("internet");
	let corner = document.getElementById("corner");
	document.getElementById("blinkies").innerHTML = loadPage("/blinkies.html");
	document.getElementById("coolpeople").innerHTML = loadPage("/coolpeople.html");
	light();
}

function loadPage(href){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", href, false);
	xmlhttp.send();
	return xmlhttp.responseText;
}

async function light() {
	let lightDuration = Math.floor(Math.random() * 3500 + 2000);
	let blinks = Math.floor(Math.random() * 7);
	let flipCoin = Math.floor(Math.random() * 2);

	internet.style.color = "pink";
	corner.style.color = "lightblue";

	await sleep(lightDuration);
	for(let i = 0; i < blinks; i++) {
		if(flipCoin == 1) {
			internet.style.color = "transparent";
			await sleep(Math.floor(Math.random() * 200 + 20));
			internet.style.color = "pink";
			await sleep(Math.floor(Math.random() * 200 + 20));
		} else {
			corner.style.color = "transparent";
			await sleep(Math.floor(Math.random() * 200 + 20));
			corner.style.color = "lightblue";
			await sleep(Math.floor(Math.random() * 200 + 20));
		}
	}

	light();
}

function sleep(ms) {
	return new Promise((resolve) => {setTimeout(resolve, ms)});
}