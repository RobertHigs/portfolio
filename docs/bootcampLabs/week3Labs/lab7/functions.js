// JavaScript File

/*Functions Problem Set*/

/* 
isEven()
Write a function isEven() which takes a single numeric argument and 
return true if the number is even, and false otherwise
Example:
isEven(42)     //true
isEven(555)    //false
*/

var isEven = function(number) {
    //If the number is even
    if(number % 2 === 0) {
        console.log("true");
        
    //If the number is odd
    } else {
    console.log("false");
    }
};

isEven(5);


/*
factorial()
Write a function factorial() which takes a single numeric argument
and returns the factorial of that number
6! is 6 x 5 x 4 x 3 x 2 x 1
0! is 1
Example: 
factorial(5);   //120
factorial(10);  //3628800
*/

//Using a Recursion Function
/* function factorial(n) {
    //Because we are doing the same thing (multiplication) over again to a particular value (an integer) until we get the desired result.
    if (n === 0) {
        return 1;
    }
    //This is it! Reursion!!
    return n * factorial(n-1);
}

factorial(10);
*/


//Using a While Loop
 function factorial(num) {
    //Step 1: Create a variable result to store num
    var result = num;
    
    //If num = 0, the factorial will return to 1
    if(num === 0) {
        return 1;
    }
    
    //Step 2. Creat the While Loop
    while(num > 1) {
        num --;  //Decrementation by 1 at each iteration
        result = result * num;  //Or result *= num
        
        //Step 3. Return the factorial of the provided integer
        console.log(result);
    }
 }
    
    factorial(10);

/*
kebabToSnake()
write a function kebabToSnake() which takes a single kebab-cased 
string argument and return the sanke_cased version
Basically, replace "-" with "_"
Example:
kebabToSnake("hello-world");    //"hello_world"
*/

function kebabToSnake(str) {
    //Replace all dashes with "_"
    var myString = str.replace(/-/g, "_");
    //Return str
    console.log(myString);
}

kebabToSnake("I-love-Kat-beyond-the-moon-and-back!");