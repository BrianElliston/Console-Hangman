// this is where I am importing my other files and npm packages..
var words = require("./words.js")
var inquirer = require('inquirer');
//This is where I am a variable to pass in later
var createdWord = new Word();
var randomWord;
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
     
     var result = createdWord.bobContains(data.letter_guessed);
     console.log(result);
     createdWord.displayWord();
     //still need to check if we are done
     if (createdWord.finished()){
       return
     }
     gameStarter();
   })

}



function Word(randomWord){
    
   randomWord = words[Math.floor(Math.random() * words.length)];
    
    this.bobContains = function(letter){  // Checks if typed letter is in the word to be guessed or not
      if (this.indexOf(letter) < 0){
        return false;
      }
      else{
        return true;
      }
    }
    // this.displayWord = function(){} need this for this.finished
    this.lettersArray = [];
    for (var i = 0; i < randomWord.length; i++){
      console.log(randomWord[i]);
      this.lettersArray.push(new Letter(randomWord[i]));
    }
    this.finished = function(){
      console.log("hello");
    }
    this.displayWord = function() {
      // iterate through the Letters in our array
      // for (var i = 0; i < randomWord.length; i++){
        
      //   if ()
      // }
      console.log("hello 2");
      
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





