// JavaScript File

// Array Todo List APP
/*
1. Declare an array
2. Prompt user on what they would like to do from the following options, 
   then assign response to a variable
	- "new" will prompt to enter a new todo item and will then push 
		user entry to the existing array
		Display the newly added todo item in the console to confirm that it has been added
	- "list" will print in console each todo item in the array with its 
		corresponding index 
		Example: 
		-> 0 : Get the milk
		-> 1 : Pick up dry cleaners
		-> 2 : Wash clothes
	- "delete" will prompt the user to enter the index of a todo item they wish to delete
	- "quit" will end the program

Use functions for adding todo, printing the list, and deleting todo
*/

// Step 1. Declare an array
var toDoList = ["NEW", "LIST", "DELETE", "QUIT"];

// Step 2. Prompt user on what they would like to do from the following options, then assign response to a variable
var answer = prompt("What would you like to do? 'CREATE TODO ITEM', 'LIST TODO ITEMS', 'DELETE TODO ITEM', 'QUIT'").toUpperCase();

if (answer === "NEW") {
    var toDoList = prompt("Enter new todo item");
    console.log(toDoList);
    var yesNo = prompt("Enter more Items? (Enter 'NO' to escape)").toUpperCase();
    while (yesNo === "YES" && toDoList !== "NO") {
        var toDoList = prompt("Enter new todo item").toUpperCase();
        console.log(toDoList);
    }
} else if (answer === "LIST") {
    for (var i = 0; i < toDoList.length; i++) {
        console.log(toDoList[i]);
    }
    
}