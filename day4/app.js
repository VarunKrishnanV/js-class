/* Funcations:
-----------------
- Function declaration 
- Function expresson
- Parameters vs arguments
- Default params
- Rest the params
- Nested function => inner and outer function
- Callback function
- Pure function
- Higher order function
- Arrow function
- IIFE
- Call stack
- Recursion */


// function declaration

let a = 5;
console.log('a: ', a);


function sayHello(){
    console.log("Hello");
}


let sayHello2 = function() {
    console.log("Hello2");
}

sayHello2()
sayHello()

// Hoisting

let sum = function(a, b = 0, ...rest){
    console.log(rest);
    return a + b;
}

console.log(sum(1, 2, 3, 4));

// 