var words = require("./words.js")




function Word(){
    

    this.bobRandomWord = words[Math.floor(Math.random() * words.length)];
    this.bobContains = function(letter){}
    this.displayWord = function(){}
    
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



