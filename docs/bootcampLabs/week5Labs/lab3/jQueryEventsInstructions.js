// JavaScript File

jQuery Events

In this exercise, you will use the following jQuery events:
•	click()
•	keypress() 
•	on()

To read more in depth about these events, visit https://api.jquery.com/category/events/

Complete the following steps:
click() Event
1.	Open the events.html file in Cloud 9 or your text editor
2.	Create a script file named events.js and include it in your events.html file. 
3.	Return to events.js and write a click event for the buttons.
4.	When the buttons are clicked:
a.	Change the background color of the button to pink
b.	Use the alert() method to display the text of the button  that was clicked
keypress() Event
1.	Write a keypress event for the input text box. 
2.	When a key is pressed
a.	Use console.log() to print out a message notifying the user that a key has been pressed
on() Event
1.	Write a click event for the headers on the page, using on()
2.	When a header is clicked, turn the text color purple. Make sure only the clicked h1 element is changed to purple.
3.	Rewrite the input’s keypress event to use the on() method. Use the event.which property to console log which key was pressed. HINT: Be sure to pass in your event argument in your callback function before trying to use event.which property.
