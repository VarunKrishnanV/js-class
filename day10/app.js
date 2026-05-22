/* 
Error handling
-----------------
Error Types
- Parsing Error(Syntax error)
- Runtime Error

- Exceptions
- Uncaught reference error
- Uncaught type error
- Syntax Error
- Range Error
- URI Error
- Eval() - used to evaluate expression

- Try Catch
- Error object - err.message, err.name, err.stack
- Rethrow Error
- Finally
- Custorm Error

- Self Assignment Operator 
*/


// If we get parsing error we have to fix it first and have to move forward




// Exceptions - runtime error that intterps program executions

/* Exceptions vs Errors

Unrecoverable errors – crash the program (or should)
Recoverable exceptions – caught and handled */

// - Uncaught reference error

// let b = c

// let c = 10;

// console.log(c.name.firstname);

// let arr = new Array(-1)


console.log(decodeURIComponent("Hello%20Varun"));

// used to execute string JS code
console.log(eval("5 + 3 * 2"));
console.log(eval("console.log('Hi');"));

// try catch

try{
    decodeURIComponent("Hello%20Varun")
    console.log("All fine");
}catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

// how to handle the error explicity

let num = 23423;
let divisor = 0;

try{
    if(divisor === 0){
        throw new Error("We can't divide a number with 0")
    }
    let res = num / divisor;
    console.log(res);
}catch(err){
    console.log(err);
}


// finally

let num2 = 23423;
let divisor2 = 0;

try{
    if(divisor2 === 0){
        throw new Error("We can't divide a num2ber with 0")
    }
    let res = num2 / divisor2;
    console.log(res);
}catch(err){
    console.log(err);
}finally{

    // disconnect DB or cleariable variable memeory
    num2 = null
    divisor2 = null
}

// rethrowing the error:

/* function getUsername(obj){
    try{
        if(obj.name === ""){
            throw new Error("----Name is empty----")
        }
    }catch(err){
        console.log("Name is empty in catch");
        throw err
    }
}

try{
    getUsername({name : ""});
    
}catch(err){
    console.log(err.message);
} */

// Custom Error

function ValidationError(msg){
    this.name = "Validation Error";
    this.msg = msg;
    this.stack = new Error().stack;
}


function getUsername(obj){
    try{
        if(obj.name === ""){
            throw new ValidationError("----Name is empty----")
        }
    }catch(err){
        console.log("Name is empty in catch");
        throw err
    }
}

getUsername({name : ""});


// Self Assignment Operator(nullish assignment)
function sum(num, num2){
    num2 ??= 20;
    return num + num2;
}

console.log(sum(10));      // 30
console.log(sum(10, 5));   // 15