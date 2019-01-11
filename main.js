
window.addEventListener('load', init);

/*
 * init()
 * Called by window.addEventListener('load', init);
 */
function init() {
	document.body = document.createElement("body");
	document.body.innerHTML = "<p>Hello World!</p>";
}