//Feel free to show students how to write a simple jquery plugin
(function($) {
	$.fn.shuffle=function(){
		var currentIndex = this.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = this[currentIndex];
			this[currentIndex] = this[randomIndex];
			this[randomIndex] = temporaryValue;
		}
		this.each(function(index,element){
			$(element).parent().prepend(element);
		});		
		return this;
	}
	$.fn.matches=function(cardToMatch){
		if($(this).eq(0).attr("class")==$(cardToMatch).attr("class")){
			return true;
		}
		return false;
	}
})(jQuery);