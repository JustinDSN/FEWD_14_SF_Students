/*Instructions: 
Go through each line of code and determine its purpose. 
When you get to an instruction, follow it. 
When you get to a REPLACE_ME, replace it with the appropriate content.
*/
var leftKeys=[];//An array of keys to press to move the basket left, read the instructions in the index to determine what keycodes should go here
var rightKeys=[];//An array of keys to press to move the basket right, read the instructions in the index to determine what keycodes should go here
var startKeys=[];//An array of keys to press to start the game, read the instructions in the index to determine what keycodes should go here
var eggsMissed=0;
var score=0;
function startNewGame(){
	$(".egg").remove();
	score=0;
	$("#score").children("span").text(0);
	dropAnEgg("slow");
}
function dropAnEgg(){
	//What argument is missing in our function declaration?
	if($(".egg").length<=3){//Question: Why do we check to see if there are less than 4 eggs in our page?
		$("#egg-drop-game").prepend('<div class="egg '+speed+'-falling-egg" style="margin-left:'+randomStartPosition()+'px"><div class="egg-left"></div><div 	class="egg-right"></div></div>');
	}
}
function randomStartPosition(){
	//This is just some math. 
	//Math.random returns a random number between 0-1. 
	//If we multiply by the width of the container, we get a number between 0 and the container's width. 
	//Question: Why do we subtract 20? Hint: Look at the CSS for the egg.
	return Math.random()*($("#egg-drop-game").width()-20);
}
function moveBasketLeft(){
	//Hint, what is the basket's margin when it is all the way to the left of the game container? Use the Chrome inspector to move the basket and find out.
	if($("#basket").css("margin-left")!="REPLACE_ME"){
		$("#basket").css("margin-left","-=25");
	}
}
function moveBasketRight(){
	//Hint, what is the basket's margin when it is all the way to the right of the game container? Use the Chrome inspector to move the basket and find out.
	if($("#basket").css("margin-left")!="REPLACE_ME"){
		$("#basket").css("margin-left","+=25");
	}
}
function pause(){
	var allEggs=$(".slow-falling-egg,.medium-falling-egg,.fast-falling-egg");
	//Hint for this REPLACE_ME: What's the opposite of the animation running?
	if(allEggs.css("-webkit-animation-play-state")=="REPLACE_ME"){
		allEggs.css("-webkit-animation-play-state","running");
	}
	else{
		allEggs.css({"-webkit-animation-play-state":"REPLACE_ME"})
	}
}
function increaseScore(){
	//write a line of code that increases the score by 1
	$("#score").children("span").text(score);
	if(score>5){
		dropAnEgg("medium");
	}
	if(score>10){
		dropAnEgg("fast");
	}
}
$(document).ready(function(){
	$(window).on("keydown",function(e){
		//Question: What does indexOf do when called on an array?
		if(e.which==32 && $(".egg").length>0){
			//What function should be called here? Start by determining what the "if" statement means
			return;
		}
		if(leftKeys.indexOf(e.which)!=-1){
			//What function should be called here?
		}
		else if(rightKeys.indexOf(e.which)!=-1){
			//What function should be called here?
		}
		else if(startKeys.indexOf(e.which)!=-1){
			//What function should be called here?
		}
	});
	$("#egg-drop-game").on("animationEnd webkitAnimationEnd",".egg",function(){
		//Code inside of this function will run when an egg hits the bottom because the animation ends at that point
		var eggMargin=$(this).css("margin-left");
		var basketLeftEdge=$("#basket").css("margin-left");
		var basketRightEdge=basketMargin+$("#basket").width();
		//Instructions: console.log eggMargin, basketRightEdge, and basketMargin to figure out why the next line doesn't work, then fix the problem. 
		//Hint: What are the datatypes of eggMargin, basketRightEdge, and basketMargin when you log them and what should they be?
		if(eggMargin>basketMargin && eggMargin<basketRightEdge){
			//should the egg stay around once it's been caught? If not, remove it.
			increaseScore();
		}
		else{
			//what class do we need to add to show the egg breaking?
			$(this).children().addClass("REPLACE_ME");
		}
		dropAnEgg("slow");
	}).on("transitionEnd webkitTransitionEnd",".egg-left,.egg-right",function(){
		$(this).parent().remove();
		eggsMissed++;
		if(eggsMissed==10){//THEN game is over
			//Should there still be eggs falling when the game is over? If not, remove all the eggs
			alert("Game over! You caught "+REPLACE_ME+" eggs!");
		}
	});
});