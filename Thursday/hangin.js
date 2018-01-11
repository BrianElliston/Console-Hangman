// this is where I am importing my other files and npm packages..
var words = require("./words.js")
var inquirer = require('inquirer');
//This is where I am a variable to pass in later
var createdWord = new Word();

var questions = [{
name: "letter_guessed",
message: "Please guess a letter"

}]
gameStarter();

function gameStarter(){
  inquirer.prompt(
    
     questions
     
   )
   .then(function(data){
     
     createdWord.bobContains(data.letter_guessed);
     createdWord.displayWord();
     //still need to check if we are done
     if (word.finished()){
       return
     }
     gameStarter();
   })

}



function Word(randomWord){
    
   randomWord = words[Math.floor(Math.random() * words.length)];
    
    this.bobContains = function(letter){}
    // this.displayWord = function(){} need this for this.finished
    this.lettersArray = [];
    for (var i = 0; i < randomWord.length; i++){
      console.log(randomWord[i]);
      this.lettersArray.push(new Letter(randomWord[i]));
    }
    this.finished = function(){
      
    }
    this.displayWord = function() {
      // iterate through the Letters in our array
      
      
      // call .display() method on each of our Letters
      // put them all together, with spaces in between
      // return the whole thing
    }
    
    console.log(this.lettersArray);
   
    
}



function Letter (character){
      this.guessed = false;
      this.character = character;
      this.toString = function(){
     
    

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





