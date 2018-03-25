var quotes = 
	["The more I change, the less I stay the same. - Peter Xu",
	 "When you do things right, people won't be sure you've done anything at all. - Futurama",
	 "Those who knew him, loved him, while those who did not know him, loved him from afar. - TNG",
	 "Truly, they were as gods who built this place! - Futurama",
	 "No mask? No mask! - The King in Yellow",
	 "Do the impossible! See the invisible! - TTGL",
	 "Do not go gentle into that good night. - D. Thomas", 
	 "You do you. - Peter Xu",
	 "Expect the worst but expect victory. - Peter Xu",
	 "How can you be good if you've never been bad? - Peter Xu",
	 "It takes the bad days to appreciate the good ones. - Peter Xu",
	 "And all living things, large and small, have dignity and a spark of the divine. - Futurama",
	 "Let us climb to the heavens that the gods themselves might envy us! - Futurama",
	 "Like everything else in life, pumping is just a primitive, degenerate form of bending. - Futurama",
	 "In a world of uncertainties, the only constant is yourself. - Peter Xu",
	 "Abstraction is selective ignorance. - Accelerated C++",
	 "Oh cruel fate, to be thusly boned. Ask not for whom the bone bones, it bones for thee. - Futurama",
	 "I’m the only thing I’m afraid of. - Kanye West",
	 "Human hunger birthed the Civ'lize, but human hunger killed it too. - Cloud Atlas",
	 "And how can man die better than facing fearful odds, for the ashes of his fathers, and the temples of his gods. - Thomas Babington Macaulay",
	 "rip - Twitch Chat",
	 "Acknowledging that you're wrong is the first step to being right. - Peter Xu",
	 "The secretly terrible engineer solves problems he shouldn't have. - Peter Xu",
	 "Oh heavy is the burden of being me. - DS9",
	 "It is the unknown that defines our existence. - DS9",
	 "Your drill is the drill that will pierce the heavens! - TTGL",
	 "I'm the only thing I'm afraid of. - Kanye West",
	 "Remember: victory is life. - DS9",
	 "The river will provide. - DS9",
	 "The only thing that we can be sure of the future is that it will be absolutely fantastic. - Arthur C. Clarke",
	 "Honor thy consumer. - Cloud Atlas",
	 "A Soul's value is the dollars therein. - Cloud Atlas",
	 "They offered me what I couldn't refuse - money! - Zootopia",
	 "Pleasant things for the most part are very dangerous. - Warm Beer",
	 "Through strife, progress. - Peter Xu",
	 "The world's a toilet and I'm shit. - Salty Studio",
	 "Sidewalks are roads for the assertive driver. - Achievement Hunter",
	 "我老了。- Yi Yi",
	 "疯了，累了，痛了，人间喜剧 - 王菲",
	 "You either die today or go to work tomorrow. - Peter Xu",
	 "Dare to dream and dream to dare. - Peter Xu",
	 "Oh how the magic school bus of yore has become the struggle bus of today. - Peter Xu",
	 "If you could see your whole life laid out in front of you, would you change things? - Arrival",
	 "Knowing is good, but knowing everything is better. - The Circle",
	 "The only bad idea is no idea. - Peter Xu",
	 "Understanding the moon—our constant companion, our silvery sister, target of dreamers and explorers since time immemorial—is a worthy cause on its own. - Rebecca Boyle",
	 "If technology is not solving your problems, then you’re not using enough technology. - Halting Problem",
	 "For all find what they truly seek. - C.S. Lewis",
	 "If you can't handle me at my spookiest, then you don't deserve me at my dootiest. - Reddit"
];

var frequency = 10000;
var myInterval = 0;
var lastSeen = 0;
var element = document.getElementById("quote");


function startLoop() {
    if (myInterval > 0) {
    	clearInterval(myInterval);
    } // stop
    myInterval = setInterval( "changeQuote()", frequency );  // run
}

function changeQuote() {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	if (randomIndex == lastSeen) {
		randomIndex = Math.min(randomIndex + Math.floor(Math.random() * 10), quotes.length - 1);
	}
	lastSeen = randomIndex;
	element.innerHTML = quotes[randomIndex];
	element.id = "";
	void element.offsetWidth;
	element.id = "quote";
}

changeQuote();
startLoop();
