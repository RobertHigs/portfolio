// JavaScript File

// Print all numbers between -10 and 19
console.log("Printing numbers between -10 and 19");
for (var i = -10; i < 20; i++) {
    console.log(i);
}

//Print all even numbers between 10 and 40
console.log("Printing numbers between 10 and 40");
for (var i = 10; i <= 40; i+=2) {
    console.log(i);
}

//Print all numbers between 300 and 333
console.log("Printing numbers between 300 and 333");
for (var i = 300; i <= 333; i++) {
    console.log(i);
}

//Print all number divisible by 5 AND 3 between 5 and 50
console.log("Printing all number divisible by 5 AND 3 between 5 and 50")
for (var i = 5; i <= 50; i+=5) {
    if (i%5 === 0 && i%3 === 0) {
        console.log(i);
    }
}