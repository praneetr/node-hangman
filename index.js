//contains logic of game and depends on word.js

var Word = require('./word.js');
var prompt = require('prompt');

console.log("Welcome to Fruit Hangman!");
console.log("Guess the name of a fruit one letter at a time");
console.log("-----------------------------");
prompt.start();



game = {
 	wordBank: ['guava', 'banana', 'kiwi', 'orange', 'mangoe', 'persimmon', 'durian'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['letter_guessed'], function(err, result){
             console.log("You guessed: " + result.letter_guessed);
             
// need to add logic here to show the word prefilled with correctly guessed letters as game progresses

 			var manyGuessed = self.currentWrd.checkLetter(result.letter_guessed);

 			if(manyGuessed ==0) {
 				console.log("INCORRECT");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWrd.findWord()){
 						console.log("You win!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("# of Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. The correct fruit is ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();