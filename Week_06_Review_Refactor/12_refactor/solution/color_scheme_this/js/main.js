function switchTheme() {
	  var theme = $(this).attr('class');
	  $('body').attr('class', theme);
	}
$(document).ready(function(){
	$('#switcher li').click(switchTheme);	
});