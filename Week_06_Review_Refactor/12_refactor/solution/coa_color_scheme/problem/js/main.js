$(document).ready(function(){
	$('#one').click(switchThemeOne);
	$('#two').click(switchThemeTwo);
	$('#three').click(switchThemeThree);
	$('#four').click(switchThemeFour);
	function switchThemeOne(){
		$('body').css({background:"gray",color:"white"});
	}
	function switchThemeTwo(){
		$("body").css({background:"white",color:"black"});
	}
	function switchThemeThree(){
		$("body").css({background:"blue",color:"white"});
	}
	function switchThemeFour(){
		$("body").css({background:"yellow",color:"black"});
	}
});