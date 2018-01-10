var words = require("./words.js")


var letter;
var lettersArray = [];
var underScore = "_";

function Word(randomWord){
    
   randomWord = words[Math.floor(Math.random() * words.length)];
    // this.bobRandomWord = words[Math.floor(Math.random() * words.length)];
    // this.bobContains = function(letter){}
    // this.displayWord = function(){}

    letter = randomWord.split("");
    var letterLength = letter.length;
    for (var i = 0; i < letterLength; i++){
       lettersArray.push(underScore);
    }
    console.log(letter);
    console.log(lettersArray);
   
    
}



function Letter (character){
      this.guessed = false;
      this.character = character;
      this.display = function(){
     
    

        if (this.guessed){

          return this.character
        }
        else {
          return "_"
        }

      };

      this.right = function(character){

        if (character === this.character){

           this.guessed = true;
           return true
        }
        else{

          return false
        }
      }

}

this.displayWord = function() {
  // iterate through the Letters in our array
  
  
  // call .display() method on each of our Letters
  // put them all together, with spaces in between
  // return the whole thing
}


Letter();
Word();