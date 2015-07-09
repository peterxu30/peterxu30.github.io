var quotes = 
	["The more I change, the less I stay the same.",
	 "When you do things right, people won't be sure you've done anything at all. - Futurama",
	 "Those who knew him, loved him, while those who did not know him, loved him from afar. - TNG",
	 "You do you."];

function changeQuote() {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	document.getElementById("quote").innerHTML = quotes[randomIndex];
}

changeQuote();