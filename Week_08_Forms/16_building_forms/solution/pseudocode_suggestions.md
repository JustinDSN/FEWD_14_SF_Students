
![Code Demo](../../../img/icons/instr_code_along.png)

## To Do List API
1.	addToDoListItem
2.	removeToDoListItem
3.	editToDoListItem
4.	saveEditedToDoListItem
5.	markToDoListItemAsCompleted
	*	Or switchCompletedStatusOfToDoListItem if students decide they want to be able to undo marking an item as complete.
6.	emptyToDoList
7.	removeCompletedToDoListItems
8.	updateNumberOfToDoListItems

##Pseudocode
 
1.	When the user submits their to-do list item
	*	Select the input field the user has typed their to-do list info into
	*	Get the value of the input field
	*	Create a list item
	*	Place the text inside of the list item
	*	Append the list item to our ordered to-do list

2.	When the user clicks remove next to a to do list item
	*	Select the to-do list item the user wants to remove
	*	Delete the selected item from the page
 
3.	When the user clicks the edit better next to a list item
	*	Select the to-do list item the user wants to edit
	*	Replace the text in the list item with an input whose value is the same as the existing text
	*	Show the save edit button and hide the edit button

4.	When the user clicks the save edit button
	*	Select the to-do list item the user wants to save
	*	Get the value of the input inside of this item
	*	Replace the input in the list item with the value of the input field
	
5.	(if using check box method, there is nothing to do)
If using line-through method:
	*	When the user clicks on the list item
	*	Get the to-do list item the user clicked on
	*	Add a css line-through style to the item
 
6.	When the user clicks the Clear List button
	*	Select the list
	*	Empty the list
Optional: Store the emptied list to allow the user to go back.

7.	When the users clicks the Clear Completed button
	*	Select each to-do list item
	*	Check to see if it has been completed
	*	If it has been completed, remove the to-do list item

(in practice, select each to-do list item could be select completed to-do list items *if you're using a class to style a completed item*)


8.	Select the to-do list counter element
	*	Set the text inside the to-do list counter element to the number of items in the to-do list