/* Execution Context:
-----------------
- Execution context
- Lexical env
- Globel exection conexxt
- Creation phase and execution phase
- What happens in creation phase
- Example with diagrams  */


let a = 5
var b = 20

function test(){
    b = 10
    console.log(a, b);
}

/* Hoiting and TDZ:
-----------------
- Hoisting
- Temporal dead zone
- Function hoiting
- Variable hoiting
- Difference between let, const, var */