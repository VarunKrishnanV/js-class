/* This
-----------------
- This keyword
    "this refers to the object that is currently executing the function. Its value depends on how the function is called, not where it is defined"
- What happens when JS is loaded
- Binding
    - Objects
    - Functions
- Implicit binding
- Functions
    - Normal mode
    - Strict mode
- Arrow functions
    - Normal mode
    - Strict mode
- Explict binding
    - Call
    - Apply
    - Bind
 */

/* This => keyword in JS
Its helpt to find what exacatly hepping in the particular executin context */

/* 
- What happens when JS is loaded
=> GEC create
=> this
=> this = window
=> Memory allocation */

/* - Binding
    - Objects
    - Functions */


// Implict binding

/* let user = {
    name : "varun",
    printName : function(){
       console.log(this.name);
    }
}
let user2 = {
    name : "Naveen",
    printName : function(){
       console.log(this.name);
    }
}
user.printName()


function callPrintName(obj){
    obj.printName()
}

callPrintName(user)
callPrintName(user2) */

/* let user = {
    name : "varun",
}

let user2 = {
    name : "Naveen",
}

function callPrintName(obj){
    let name = "Common"
    obj.printName = function (){
        console.log(this.name);
    }
}

callPrintName(user)
callPrintName(user2)

user.printName()
user2.printName()


// function which are not method
function sayName(){
    console.log(this);
}

sayName()


function outer(){
    console.log(this);

    return function inner(){
        console.log(this);
    }
}

let returnedInner = outer();

returnedInner() */


// this inside arrow functions

let logMsg = () => console.log(this);

logMsg()

let food = {
    foodname : "Pizza",
    color : "Brown",
    getDesc : function(){
        return () => console.log(`${this.foodname} is ${this.color}`)
    }
}

food.getDesc()()

/* 

=> function:
    - Normal function
        - Strict mode - undefined
        - Strict mode - window
    - Arrow function
         - Strict mode - window
        - Strict mode - window

    
=> method:
    - Normal function
        - tasks the object as this by which its invoked
    - Arrow function
        - takes the parent
*/


function greetUser(msg1, msg2){
    console.log(`${this.username} ${msg1}, ${msg2}`);
}

let user3 = {
    username : "Dhoni"
}
let user4 = {
    username : "Dube"
}

// user3.greetUser()

// Explicity binding:
    // - call
    // - apply
    // - bind

greetUser.call(user3, "Hi", "bye")

greetUser.apply(user4, ["Hi", "bye"])

let bindedGreetUser = greetUser.bind(user3)
bindedGreetUser(["hi", "hello"])


let users = [
    {
        name: "varun"
    },
    {
        name : "surya"
    }
]

console.log(`Hi ${users}`);


class Cartoon {
    constructor(name) {
        this.name = name;
        this.logName = function () {
            console.log(this.name);
        };
    }
}

let Cartoon1 = new Cartoon("ChotaBheem")
console.log('Cartoon1: ', Cartoon1);

Cartoon1.logName()


const user5 = {
    username : "varun",
    sayHi : function(){
        let inner =() => {
            console.log(this);
        }
        inner()
    }
}

console.log(user5.sayHi());

const user6 = {
    user : "Raju",
    sayBye : function(){
        console.log(this);
    }
}

let fn = user6.sayBye;
fn(); 