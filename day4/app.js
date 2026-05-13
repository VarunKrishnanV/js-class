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

{
    let a = 5;
    console.log('a: ', a);


    function sayHello() {
        console.log("Hello");
    }


    let sayHello2 = function () {
        console.log("Hello2");
    }

    sayHello2()
    sayHello()
}

// Hoisting

{
    let sum = function (a, b = 0, ...rest) {
        console.log(rest);
        return a + b;
    }

    console.log(sum(1, 2, 3, 4));

}

// Nested function => inner and outer function

{
    let outer = function () {

        let profit = 10;

        return function inner(b, c) {
            return profit + b + c;
        }

    }

    let sum2 = outer()

    console.log('sum2: ', sum2(4, 5));
    console.log('sum2: ', sum2(5, 10));


    let sum5 = outer()(3, 4)
    console.log('sum5 curried: ', sum5);
}


// - Callback function


{
    let calculator = (functionToExecute) => {
        return functionToExecute(5, 5)
    }

    let sum4 = (a, b) => {
        return a + b
    }

    let sub4 = (a, b) => {
        return a - b
    }

    let muyltiply4 = (a, b) => {
        return a * b
    }

    console.log(calculator(sum4));
    console.log(calculator(sub4));
    console.log(calculator(muyltiply4));
}

// 
{

    console.log("-------------- Impure function --------------");

    let outerVar = 5

    function sum(a, b) {
        return a + b + outerVar
    }

    console.log(sum(5, 6));

    outerVar++

    console.log(sum(5, 6));



    console.log("-------------- Pure function --------------");

    function sum1(a, b) {
        return a + b
    }

    console.log(sum1(5, 6));
    console.log(sum1(5, 6));

}



console.log("-------------- Higher order function --------------");
/* 
A Higher-Order Function (HOF) is a function that either:

Takes another function as an argument, or
Returns a function

Functions are treated like values in JavaScript, so they can be passed around just like variables.
 */

console.log("-------------- arrow function --------------");


let arrFun = () => "Hello"

console.log(arrFun());


console.log("-------------- IIFE --------------");
// Immediately Invoked function expression

/* let chatIntegration = () => {
    console.log("Chat integrated");
}

chatIntegration() */


(() => {
    console.log("Chat integrated");
})()



