// - What is an Array in JavaScript?

let num1 = [1, 2, 3, 4]
let str1 = ["Naveen", "Varun", "Udayan"]
let complex = [1, "Varun", { name: "VK" }, [2, 3]]

// => O based index


// - How to Create an Array in JavaScript?

// Literal method
let num2 = [1, 2, 3]
let num22 = [1, 2, 3]

// constructor method
let num3 = new Array(1, 2, 3)
console.log(num2 === num22);

let num5 = new Array(5) //creates only empty slotes
console.log('num5: ', num5);

// - How to Get Elements from an Array in JS?
console.log(num2[0]);
console.log(num2[1]);
console.log(num2[2]);

// - How to Add Elements to an Array in JS?
// - push
let numbers = [11, 12]
console.log('numbers.push: ', numbers.push(13));
console.log('numbers: ', numbers);

// - unshift
console.log('numbers.unshift: ', numbers.unshift(14));
console.log('numbers: ', numbers);

// - How to Remove Elements from an Array in JS?
console.log('numbers.pop: ', numbers.pop());
console.log('numbers: ', numbers);

console.log('numbers.shift: ', numbers.shift());
console.log('numbers: ', numbers);

// - How to Copy and Clone an Array in JS?

let arr1 = [[1, 2], 3, 4, 5]
console.log('arr1: ', arr1);

let arr2 = arr1.slice()
console.log('arr2: ', arr2);

arr1[0].push(23)
arr1.push(23)
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);


// - How to Determine if a Value is an Array in JS?
console.log('Array.isArray(arr1): ', Array.isArray(arr1));

// - Array Destructuring in JavaScript

let user = {
  age: 23,
  name: "Varun"
}
let { name: username } = user;

let veggies = ['carrot', 'beetroot', 'cabbage', "onion"]

//   - How to Assign a Default Value to a Variable?
//   - How to Skip a Value in an Array?

let [veg1, , veg3, veg4 = "default"] = veggies
console.log(veg1, veg3, veg4);

let nums = [[1, 2], [3, 4]];

//   - Nested Array Destructuring in JS
let [[n1,], [n2, n4]] = nums;

console.log(n1, n2, n4);
console.log(nums[0][1]);

// Slice
let arr5 = [0, 1, 2, 3, 4, 5]
let arr6 = arr5.slice(0, -1) //the end index will be excluded
arr6 = arr5.slice(0, 4) //the end index will be excluded
console.log('arr2: ', arr6);

const a = [1, 2, 3];
a.push(5) //allowed.                    
// a = [5, 6, 7] //throws error
console.log(a);


// - How to Use the Rest Parameter in JS?
let b1 = [1, 2, 3, 4, 5]
let [numone, numtwo, ...numrem] = b1
console.log('numone: ', numone);
console.log('numtwo: ', numtwo);
console.log('numrem: ', numrem);



// - How to Use the Spread Operator in JS?
let b2 = [...b1]
console.log('b2: ', b2);

let uservar = {
  name : "varun",
  age : "22",
  address: "kochi"
}

const {name, ...rest} = uservar
console.log('name: ', name);
console.log('rest: ', rest);


// - Destructuring Use Cases in JavaScript
//   - How to Swap Values with Destructuring?
let f1 = 1;
let f2 = 3;
console.log(f1, f2);
[f1, f2] = [f2, f1];
console.log(f1, f2);

//   - How to Merge Arrays?

let arrOne = [...[1, 3, 4], ...[6, 7, 7]]
console.log('arrOne: ', arrOne);

// - The length property
let arr3 = [1, 2, 3, 4, 5, 6];

console.log(arr3.length);

// max size of array = 2^32 = 4294967295

console.log(arr3);
arr3.length = 10
console.log(arr3);
arr3.length = 5
console.log(arr3);
arr3.length = 0
console.log(arr3);

// max size of array = 2^32 = 4294967295
let arr4 = [];
// arr4.length = 4294967296;
// arr4.length = -1;
console.log('arr4: ', arr4);