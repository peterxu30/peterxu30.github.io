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
	 "Like everything else in life, pumping is just a primitive, degenerate form of bending. - Futurama",
	 "In a world of uncertainties, the only constant is yourself.",
	 "Abstraction is selective ignorance. - Accelerated C++",
	 "Oh cruel fate, to be thusly boned. Ask not for whom the bone bones, it bones for thee. - Futurama",
	 "I’m the only thing I’m afraid of. - Kanye West",
	 "Human hunger birthed the Civ'lize, but human hunger killed it too. - Cloud Atlas",
	 "And how can man die better than facing fearful odds, for the ashes of his fathers, and the temples of his gods. - Thomas Babington Macaulay",
	 "rip - Twitch Chat",
	 "Acknowledging that you're wrong is the first step to being right.",
	 "The secretly terrible engineer solves problems he shouldn't have.",
	 "Oh heavy is the burden of being me. - DS9",
	 "It is the unknown that defines our existence. - DS9",
	 "Your drill is the drill that will pierce the heavens! - TTGL",
	 "I'm the only thing I'm afraid of. - Kanye West",
	 "Remember: victory is life. - DS9",
	 "The river will provide. - DS9",
	 "The only thing that we can be sure of the future is that it will be absolutely fantastic. - Arthur C. Clarke",
	 "If you can't handle me at my spookiest, then you don't deserve me at my dootiest. - Reddit"
];

function changeQuote() {
	var randomIndex = Math.floor(Math.random() * quotes.length);

	document.getElementById("quote").innerHTML = quotes[randomIndex];
}

changeQuote();