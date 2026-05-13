/*

Variables:
-----------------
- Variables
- Types of variables
- Diff. bw let, const, var
- Primitive vs No primitive Datatypes
- How values are stored
- Abstract syntax tree (ASTexplorer.net)
- How JS runs

Operators:
-----------------
- Operators
- Types of operators
    - Arithmetic
    - Assignment
    - Logical
    - Conditional
    - Bitwise
    - Comparison
        - Relational
        - Equality
    - Grouping
    - typeof
    - instanceof

- Control flow:
-----------------
    - if
    - if else
    - switch
    - continue
    - break
- why switch is fast? => jump table

Iterations:
-----------------
- for
- while
- do while
- when to use for and while and difference b/w them



Execution Context:
-----------------
- Lexical env
- Execution context
- Globel exection conexxt
- Creation phase and execution phase
- What happens in creation phase
- Example with diagrams 

*/
/* 
Operators:
-----------------

- Types of operators
    - Arithmetic => +, -, *, /, **, ++, --
    - Assignment => =, +=, -=, *=, .....
    - Logical = &&, ||, !, ??
    - Conditional =? ?:
    - Bitwise => &, |, ^, ~
    - Comparison => <,  >, <=
    - Relational
    - Grouping
    - typeof
    - instanceof */


 /* 
- Operators => symbols
    - Operator
    - Operands
    = Expressions 
*/

{let a = 10;
console.log(a++);
console.log(a);
let b = 10;
console.log(++b);}

let a = 5;

a += 5
console.log('a: ', a);


// short circuting:

let input = null;

let name = input || "username"
console.log('name: ', name);


let user = {
    name : "naveen",
    age : 25
}

console.log("name" in user);

let num = [1, 2, 3]
console.log('num: ', num);

console.log(num instanceof Object);

// groupoing
let sum = (5 + 6) + (8+10)


class Car{
    constructor(name, color){
        this.name = name;
        this.color = color
    }
}

let car1 = new Car("Benz", "Black")
let car2 = new Car("Audi", "Black")
console.log('car1: ', car1 instanceof Car);
console.log('car2: ', car2 instanceof Car);