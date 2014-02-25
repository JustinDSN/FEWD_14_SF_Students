$(document).ready(function(){
	$(".notepad-line").on("keydown",checkListItem);
	$("li").on("click","input[type=checkbox]",updateNumberOfToDoListItems);
	$("#clear-completed").on("click",removeCompletedToDoListItems);
	$("#clear-all").on("click",emptyToDoList);
});
function checkListItem(e){
	var isEmpty=$(this).val()=="";
	switch(true){
		//On enter
		case e.which===13 && !isEmpty: addToDoListItem.call(this,e);
		break;
		//On backspace
		case e.which===8 && isEmpty: 
			//e.preventDefault to keep backspace from removing previous list item's last character when re-focused
			e.preventDefault();
			removeToDoListItem.call(this,true);
		break;
		//on up arrow
		case e.which===38: focusPrev.call(this);
		break;
		//on down arrow
		case e.which===40: focusNext.call(this);
		break;
	}
}
function addToDoListItem(e){
	if($(this).prev().length==0){
		$(this).before("<input type='checkbox'>");
	}
	focusNext.call(this);
	updateNumberOfToDoListItems();
}
function removeToDoListItem(setFocus){
	//if there's no checkbox, remove does nothing
	$(this).val("").prev().remove();
	if(setFocus){
		focusPrev.call(this);
	}
	$("#notepad ol").append($(this).parent());
	updateNumberOfToDoListItems();
}
function removeCompletedToDoListItems(){
	$(".notepad-line").each(function(){
		if($(this).prev(":checked").length!=0){
			removeToDoListItem.call(this);
		}
	});
}
function emptyToDoList(){
	$(".notepad-line").each(removeToDoListItem);
}
function focusPrev(){
	$(this).parent().prev().children("[type=text]").focus();
}
function focusNext(){
	$(this).parent().next().children("[type=text]").focus();
}

function updateNumberOfToDoListItems(){
	$("#list-count").text($("[type=checkbox]:not(:checked)").length);
}