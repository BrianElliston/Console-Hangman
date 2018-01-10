//create a Word(), and make our inquirer call to start the game;

function Word() {
	this.randomWord = words[Math.floor(Math.random()*words.length)];
	// iterate through randomWord, and create a Letter object for each character
	// store all those Letters in an array

	this.contains = function(letter) {
		//iterate through the Letters in the above array
		// call .right() method on each of our Letters
		// return true if we ANY of the Letters returns true
		// call this.displayWord() at the end **doesn't necessarily have to be inside this function
	};

	this.displayWord = function() {
		// iterate through the Letters in our array
		// call .display() method on each of our Letters
		// put them all together, with spaces in between
		// return the whole thing
	}

	this.finished = function() {
		// tell them whether we're finished, or have more letters to guess
	}
}

function Letter(character) {
	// your code here
	this.right = function(character) {
		//checked whether they guessed right, and modified this.guessed accordingly
	}
}

//inquirer prompt will call our Word with each guessed letter
//callback on inquire prompt might be where we display the word?
// check whether they're done!