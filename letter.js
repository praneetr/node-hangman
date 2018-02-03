// Letter constructor displays an underlying character or a blank placeholder
// (such as an underscore), depending on whether or not the user has guessed the letter. 

var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};
  
// this command exports the letter constructor
module.exports = letter;