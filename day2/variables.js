
// Variables:
// -----------------



// - Variables => just a storage place to store the variables

/*

- Types of variables
    - Primitive 
        - Number
        - String
        - Boolean
        - undefiend
        - null
        - BigInt
        - Symbol
    - No-primitvie
        - functions, array, objects

 */

{
    let a = 10;
    let b = 10;
    console.log(a === b);

    let a1 = Symbol(10)
    let b2 = Symbol(10)
    console.log(a1 === b2);

    console.log(typeof(a1));

    let name;
    console.log(name);

    let age = null;
    console.log(age);
}


{
    function sum() {
        return 5 + 6;
    }

    let a = [1, 2, 4]

    let b = {
        name: "varun"
    }

    console.log(typeof sum, sum);
    console.log(typeof a, a);
    console.log(typeof b, b);
}

/* - Diff. bw let, const, var 

var => function socpe
let const => block scope {}

*/



/* 
How values are stored 

Primitive => stack
Non-primitive => heap

*/


/* 

- How JS runs

HTML parse => JS download => execute
HTML parse => JS download => JS engine => tokenize => parsing (AST) => interpreting => code generation


tokenize => function, a, (), {, return, 5, }
 */


let a = 10;

function fun(){
    let b = 10;
    return b
}
function fun1(){
    console.log(a);
}

a = null;

// - Abstract syntax tree (ASTexplorer.net)
