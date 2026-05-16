/* 

Scope:
-----------------
- Type of scope
    - Global sope
    - Block scope
    - Function scope
    - Module scope
- Scope chain / variable loopup
- Variable shadowing
- Better practise for loops (use let not var)
- JS closures
- Data encapsulation
    - Function factory
- Closures and memory leakage

*/

// import { sum } from './module.js';

// console.log(sum());


/* 
var a = 20;
var a = 50;

function outerLogger() {
    console.log(a);
    function logger() {
        let a = 10;
        console.log(a);
    }
    logger()
}
outerLogger()
console.log(a); 
*/

/* var a = 0;

console.log(a); // 0
console.log(a++); // 0
console.log(++a); // 0

for(a; a < 5; a++){
    console.log(a);
}

for(var a = 0; a < 5; a++){
    console.log(a);
}
 */

/* 
let age = 21;
if(age <= 20){
    var a = 10
}else{
    let a = 30
}

for(let i = 0; i < a; i++){
    console.log(i);
} 
*/


function atm(){
    let balance = 0;

    let deposit = (amt) => {
        balance = balance + amt
        return balance
    }

    let debit = (amt) => {
        balance = balance - amt
        return balance
    }

    return {deposit, debit}
}

let user1 = atm()
console.log('user1: ', user1);

console.log(user1.deposit(100));
console.log(user1.deposit(100));
console.log(user1.debit(100));
console.log(user1.deposit(100));

// mark and sweep algorithm

let demo = () =>{
    let a = 0;
    console.log(a);
}