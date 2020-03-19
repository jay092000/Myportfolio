
function myFunction() {
	
	document.getElementById("button").classList.add("onclic");
	setTimeout(stopLoding, 4000)
}

function stopLoding() {
	
	document.getElementById("button").classList.remove("onclic");
	document.getElementById("button").classList.add("validate");

	setTimeout(continueExecution, 2000)
}

function continueExecution()
{
	document.getElementById("button").classList.remove("validate");
}

// $( "#button" ).click(function() {
//   $( "#button" ).addClass( "onclic",validate);

// });

// function validate() {
//   setTimeout(function() {
// 	  console.log("-----");
// 	$( "#button" ).removeClass( "onclic" );
// 	$( "#button" ).addClass( "validate", 450, callback );
//   }, 2250 );
// }
//   function callback() {
// 	setTimeout(function() {
// 	  $( "#button" ).removeClass( "validate" );
// 	}, 1250 );
//   }