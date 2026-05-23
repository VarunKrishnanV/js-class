/* 

Array
-----------------

 - Array Iterator Methods in JavaScript
    - The filter() array method
    - The map() array method
    - The reduce() array method
    - The reduceRight() array method
    - The some() array method
    - The every() array method
    - The find() array method
    - The findIndex() array method
    - The findLast() array method
    - The findLastIndex() array method
    - Array method Chaining
    - The forEach() array method
    - The entries() method
    - The values() method
    - The flatMap() array method

  - Static Array Methods in JavaScript
    - The Array-Like
    - The Array.from() array method
    - The Array.fromAsync() array method
    - The Array.of() array method
  - Immutability
    - The toReversed() method
    - The toSorted() method
    - The toSpliced() method
    - The with() method
- Tasks and Quizzes With Interview Questions 

*/



// - JavaScript Array Methods
//   - How to Create, Remove, Update, and Access Arrays in JavaScript?

//     - The concat() array method
let arr1 = [1, 2, 3]
let arr2 = [4, 5]
let arr3 = [6, 7]

let arr4 = arr1.concat(arr2, arr3);
console.log(arr1.concat(arr2, arr3));
console.log('arr4: ', arr4);

//     - The join() array method
let myName = ['v', 'a', 'r', 'u', 'n']
console.log(myName.join('-'));
console.log(myName.join(''));

//     - The fill() array method = mutates original array
let fillArr = new Array(10, 2, 3, 4)
console.log('fillArr: ', fillArr);
fillArr = fillArr.fill(1)
console.log('fillArr: ', fillArr);

// ??????????????????
let fillArr2 = new Array(20).fill(1).map((i) => console.log(i))
let fillArr3 = new Array(20).fill(1).map((i) => i)
console.log('fillArr2: ', fillArr2);
console.log('fillArr3: ', fillArr3);


let arr10 = [1, 2, 4, 2, 6, 7, 8, 2, 0, 10]
//     - The includes() array method
console.log(fillArr.includes(1));

//     - The indexOf() array method
console.log(arr10.indexOf(5));
console.log(arr10.indexOf(2));

//     - The lastIndexOf() array method
console.log(arr10.lastIndexOf(2));

//     - The reverse() array method = mutates original array
arr10.reverse()
console.log(arr10);

//     - The at() Method
console.log(arr10.at(5));
console.log(arr10[5]);
console.log(arr10.at(-1));

//     - The splice() array method => mutate original array
let arrSplice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.splice(start, deleteCount, item1, item2, item3);

// console.log('arrSplice.splice(): ', arrSplice.splice());
// console.log('arrSplice.splice(): ', arrSplice.splice(0));
// console.log('arrSplice.splice(): ', arrSplice.splice(0, 5));
// console.log('arrSplice.splice(): ', arrSplice.splice(4, 2, '1', '2'));
console.log(arrSplice);

//     - The flat() Method
let flatArr = [1, 2, [1, 3], [3, 4, [5, 6]]]
let flattendArr = flatArr.flat()
console.log('flattendArr: ', flattendArr);

//     - The copyWithin() Method => mutates original array
// arr.copyWithin(target, start, end)

let copy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let copy = [5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 10]
console.log('copy: ', copy);
console.log(copy.copyWithin(2, 5, 10));
console.log('copy: ', copy);
// copes from start to before end index and paste those elements starting from the target index

//     - Grouping elements in Array
const emp = [
  { name : "emp1", salary : 40000, role: "admin" },
  { name : "emp2", salary : 20000, role: "superadmin" },
  { name : "emp2", salary : 30000, role: "superadmin" },
  { name : "emp2", salary : 90000, role: "superadmin" },
  { name : "emp3", salary : 90000, role: "admin" }
]

let empGroupedByRole = Object.groupBy(emp, ({role}) => role)
empGroupedByRole = Object.groupBy(emp, ({salary}) => salary)
empGroupedByRole = Object.groupBy(emp, ({salary}) => {
  return salary <= 40000? "LessThan40K" : "MoreThan40K"
})
console.log('empGroupedByRole: ', empGroupedByRole);


//     - The sort() array method => mutates original array
let sortArr = [1, 11, 2, 22, 24, 30, 50, 5]
console.log(sortArr.sort());
console.log(sortArr.sort((a, b) => a - b));
console.log(sortArr.sort((a, b) => b - a));

// refer notes.tldr
const people = [
  { name: "Zara", age: 25 },
  { name: "Ali",  age: 30 },
  { name: "Bob",  age: 20 },
];

// Sort by age
people.sort((a, b) => a.age - b.age);
console.log('people: ', people);

const people2 = [
  { name: "Zara", age: 25 },
  { name: "Ali",  age: 30 },
  { name: "Bob",  age: 20 },
];
// Sort by name alphabetically
people2.sort((a, b) => a.name.localeCompare(b.name));
console.log('people2: ', people2);


/* 
=> Negative = (<0) => a comes before b
=> Zero     = (0)  => Order stays the same
=> Positive = (>0) => b comes before a 
*/



