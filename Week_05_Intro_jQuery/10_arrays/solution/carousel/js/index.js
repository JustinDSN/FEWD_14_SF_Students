var images=["images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg"];
var i=0;
var votes=[];
function previousImage(){
	i>0 ? changeImage(--i):0;
}
function nextImage(){
	i+1<images.length ? changeImage(++i):calculateVotes();
}
function changeImage(){
	$("#image-to-vote-on").attr("src",images[i]);
	$("#your-vote>option").prop("selected",false);
}
function calculateVotes(){
	var ave=0;
	if(votes.length!==0){
		votes.forEach(function(element){
			ave+=parseInt(element);
		});
		ave=(Math.round((ave/votes.length) * 100) / 100).toFixed(2);
	}
	$("#image-to-vote-on+div").text("You have reached the end. Total deliciousness score was: "+ave);
}
$(document).ready(function(){
	$("#your-vote").on("change",function(){
		if(i<images.length){
			votes[i]=$("#your-vote").val();
			nextImage();
		}
	});
	$("#buttons-wrapper .btn[value='Skip']").on("click",nextImage);
	$("#buttons-wrapper .btn[value='Back']").on("click",previousImage);
});