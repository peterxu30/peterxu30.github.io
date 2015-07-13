var quotes = 
	["The more I change, the less I stay the same.",
	 "When you do things right, people won't be sure you've done anything at all. - Futurama",
	 "Those who knew him, loved him, while those who did not know him, loved him from afar. - TNG",
	 "Truly, they were as gods who built this place! - Futurama",
	 "You do you."];

function changeQuote() {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	document.getElementById("quote").innerHTML = quotes[randomIndex];
}

changeQuote();