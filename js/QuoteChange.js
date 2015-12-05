var quotes = 
	["The more I change, the less I stay the same.",
	 "When you do things right, people won't be sure you've done anything at all. - Futurama",
	 "Those who knew him, loved him, while those who did not know him, loved him from afar. - TNG",
	 "Truly, they were as gods who built this place! - Futurama",
	 "No mask? No mask! - The King in Yellow",
	 "Do the impossible! See the invisible! - TTGL",
	 "Do not go gentle into that good night. - D. Thomas", 
	 "You do you.",
	 "Expect the worst but expect victory.",
	 "How can you be good if you've never been bad?",
	 "It takes the bad days to appreciate the good ones.",
	 "And all living things, large and small, have dignity and a spark of the divine. - Futurama",
	 "Let us climb to the heavens that the gods themselves might envy us! - Futurama",
	 "Like everything else in life, pumping is just a primitive, degenerate form of bending. - Futurama"
];

var currentQuote = quotes[0];

function changeQuote() {
	var randomIndex = Math.floor(Math.random() * quotes.length);

	while(quotes[randomIndex] == currentQuote) {
		var randomIndex = Math.floor(Math.random() * quotes.length);
	}

	document.getElementById("quote").innerHTML = quotes[randomIndex];
	currentQuote = quotes[randomIndex];
}

changeQuote();