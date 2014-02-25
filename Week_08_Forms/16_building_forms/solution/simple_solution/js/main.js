// Initial Values
var count = 0;

// Attachments
// Here, we attach certain function to certain events
// Below, we elaborate on what each function does

// When the #new form is submitted, add the new item
$('#new').on('submit', addNewItem);

// When an item gets clicked, mark as complete or incomplete
$('#todos').on('click', '.item', switchStatus);

// When a remove link is clicked, remove that item
$('#todos').on('click', '.remove', removeItem);

// When an edit link is clicked, go into edit mode
$('#todos').on('click', '.edit', editItem);

// When an item editor is submitted, save the changes
$('#todos').on('submit', '.editor', saveItem);

// When a user leaves an item editor form, save the changes
$('#todos').on('blur', '.editor', saveItem);

// When the Clear List button is clicked, clear out the items 
$('#clear').on('click', clearList);

// When the Clear Completed button is clicked, clear out the completed items
$('#clearCompleted').on('click', clearCompleted);


// Functions
// See above for when these are used

function updateCount() {

	// Log the current count
	console.log(count);

	// Count the number of items
	count = $('#todos li').not('.done').length;
	console.log(count);

	// Print the new count
	$('#count').html(count);

}

function addNewItem(event) {
	
	// Prevent page reload
	event.preventDefault();
	
	// Get the text the user entered
	var newItem = $('#newItem').val();
	
	// Add an <li> with that text to the <ul>
	$('#todos').append('<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
	
	// Update the count
	updateCount();

}

function removeItem(event) {

	// Prevent page reload
	event.preventDefault();

	// The parent is the item; remove it
	$(this).parent().remove();

	// The list has been changed, so update the count
	updateCount();

}

function editItem(event) {

	// Prevent page reload
	event.preventDefault();

	// Get the text of the to-do item; it's a sibling of the clicked link
	var itemText = $(this).siblings('.item').html();

	// Get the parent <li>
	var listItem = $(this).parent();

	// Replace the parent <li> contents with an edit form
	listItem.html('<form class="editor"><input value="' + itemText + '"></form>');

	// Focus the keyboard on the input that was just added
	listItem.find('input').focus();

}

function saveItem(event) {

	// Prevent page reload
	event.preventDefault();

	// Get the new text from the editor
	var itemText = $(this).children('input').val();

	// Get the parent <li>
	var listItem = $(this).parent();

	// Replace the parent <li> contents with the updated item and controls
	listItem.html('<span class="item">' + itemText + '</span><a class="edit">Edit</a><a class="remove">Remove</a>');

}

function switchStatus() {

	console.log('switchStatus function is running!');
	console.log($(this)); // Just to confirm what "this" is

	// Get the parent <li>
	var listItem = $(this).parent();

	// Toggle the class of the parent <li>
	listItem.toggleClass('done');

	// The list has been changed, so update the count
	updateCount();

}

function clearList() {

	// Find all the items and remove them
	$('#todos li').remove();

	// The list has been changed, so update the count
	updateCount();

}

function clearCompleted() {

	// Find all the items that are done, and remove them
	$('#todos li.done').remove();

	// The list has been changed, so update the count
	updateCount();

}