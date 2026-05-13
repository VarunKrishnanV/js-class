/*

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


/* if(false)
    console.log("varun");
    console.log("varun");

if(conditon){

}else{

}


if(5 > 6){
    => one
} 
if(6 < 10){
    => two
}

if(5 > 6){

}else if(6 < 10){
    
} */

// switch

let val = 11

switch(true){
    case val < 6:
        console.log("one");
        break;
    case val > 6:
        console.log("two");
        break;
    default:
        console.log("Default");
}



/* 

Iterations:
-----------------
- for
- while
- do while
- when to use for and while and difference b/w them 

*/


// for(let i = 0; i < 10; i++){
//     console.log(i);
// }


// let i = 0;

// while(i < 10){
//     console.log(i);
//     i++
// }


let j = 11;

do{
    console.log(j);
    j++
}while(j < 10)






