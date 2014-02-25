/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */
q1 = [1,2,3,4];
q1.forEach(function(element,index){
	q1[index]=++element;
});
console.log("Question 1: " + q1);

/**
* Question 2
* Create an array of names with Will, Nevan, and Jessica as values. Append each of these names to the class-list element using forEach. 
*/
q2=["Will","Nevan","Jessica"];
q2.forEach(function(element){
	$(".class-list").append("<li>"+element+"</li>");
});
/**
 * Question 3
 * Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q2.
 */
q3 = 0;
q1.forEach(function(element,index){
	q3+=element;
});
q3=q3/q1.length;
console.log("Question 3: " + q3);