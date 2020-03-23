function myFunction() {

	document.getElementById("button").classList.add("onclic");
	setTimeout(stopLoding, 4000)
}

function stopLoding() {
	console.log("in fuction...");
	document.getElementById("button").classList.remove("onclic");
	document.getElementById("button").classList.add("validate");

	setTimeout(continueExecution, 2000)
}

function continueExecution()
{
	document.getElementById("button").classList.remove("validate");
}
