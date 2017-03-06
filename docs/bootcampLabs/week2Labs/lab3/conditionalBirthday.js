// JavaScript File
var age = prompt("What is your age?");

if (age > 0) {
    console.log("What a great time to be " + age + "!");
    if (age == 21) {
        console.log("Happy 21st Birthday!");
    }
        if (age % 2 === 1) {
            console.log("Your age is odd");
           
        }
    
}
else {
    console.log("Error. Please enter a valid age.");
}


