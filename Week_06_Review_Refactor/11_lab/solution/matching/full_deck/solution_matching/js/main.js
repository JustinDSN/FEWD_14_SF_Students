var numberOfMoves=0;
var gameHasEnded=false;
function newGame(){
	var cards=$(".cards");
	cards.removeClass("selected matched");
	cards=shuffleCards(cards);
	cards.add("#game").show();
	$("#gameOver").hide();
	gameHasEnded=false;
}
//for shuffling, students should find a shuffle function online and use it
//if you have advanced students, feel free to show them how to write a jquery extension
//source of shufflecards: http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
function shuffleCards(cards){
	var currentIndex = cards.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = cards[currentIndex];
		cards[currentIndex] = cards[randomIndex];
		cards[randomIndex] = temporaryValue;
	}
	cards.each(function(index,card){
		$("#game-cards").prepend(card);
	});
	return cards;
}
function isAMatch(card1,card2){
	if(card1==card2){
		return true;
	}
	return false;
}
function handleEndOfGame(){
	if(!gameHasEnded){
		$("#number-of-moves").text(numberOfMoves);
		$("#gameOver").show();
		alert($("#gameOver").text());
		numberOfMoves=0;
		//handles if user clicks on cards after finishing game
		gameHasEnded=true;
	}
}
function cheat(){
	if($(this).is(":checked")){
		$(".cards").on("mouseenter",function(){
			var hoverItemClass=$(this).attr("class");
			var selectedItemClass=$(".selected").attr("class");
			var aCardIsSelected=selectedItemClass!=undefined;
			var hoveredCardIsNotAlreadySelectedCard=!$(this).hasClass("selected");
			var hoveredCardIsSameAsSelectedCard=selectedItemClass.indexOf(hoverItemClass)!=-1;
			if(aCardIsSelected && hoveredCardIsNotAlreadySelectedCard && hoveredCardIsSameAsSelectedCard){
				$(this).addClass("cheat");
			}
		}).on("mouseleave",function(){
			$(this).removeClass("cheat");
		});
	}
	else{
		$(".cards").off("mouseenter mouseleave");
	}
}
$(document).ready(function(){
	newGame();
	$(".cards").on("click",function(){
		//if cheat mode enabled, to avoid using indexof or replace
		$(this).removeClass("cheat");
		
		//hack for no settimeout

		//if 2 are selected on first click, this is a new matching attempt so hide selected cards
		if($(".selected").length==2){
			$(".selected").removeClass("selected");
		}

		//feel free to use toggle class (but only if you want to allow them to turn over a card they just turned over)

		//if card hasn't already been matched, select it
		if(!$(this).hasClass("matched")){
			$(this).addClass("selected");	
		}
		//if there are now 2 cards selected, check to see if they match
		if($(".selected").length==2){
			numberOfMoves++;
			var card1=$(".selected:eq(0)").attr("class");
			var card2=$(".selected:eq(1)").attr("class");
			if(isAMatch(card1,card2)){
				$(".selected").addClass("matched").removeClass("selected");
			}
		}
		//game over when all cards have class "matched"
		if($(".matched").length==$(".cards").length){
			handleEndOfGame();
		}
	});
	$("#start,#reset").on("click",newGame);
	$("#cheat").on("click",cheat);
});