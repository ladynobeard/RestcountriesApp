
// Global Variabls
const countriesList = document.getElementById("countries");
let countries; // will contain "fetched" data

window.addEventListener('load', init);

function init() {
	fetch("https://restcountries.eu/rest/v2/all")
	.then(res => res.json())
	.then(data => initialize(data))
	.catch(err => console.log("Error:", err));

}

/*
 * init()
 * Called by window.addEventListener('load', init);
 */
function initialize(countriesData) {
	
	countries = countriesData;
	console.log("First country is: " + countries[0].name);
	
	
	document.body = document.createElement("body");
	document.body.innerHTML = "<p>Hello World!</p>";
}
