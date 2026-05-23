




// types of methods

// - Static => called on Array
// - Instance => called on actual array

// - Immutability
//     - The toReversed() method
let arr1 = [1, 2, 3]
arr1.reverse()
console.log('reversed: ', arr1);

let arr2 = [1, 2, 3]
let arr22 = [1, 2, 3].toReversed()
console.log('toReversed: ', arr22);
console.log('arr2: ', arr2);

// - The toSorted() method
let arr3 = ["a", 'c', 'b'];
console.log(arr3.toSorted());
console.log('arr3: ', arr3);

// - The toSpliced() method
let arr4 = ["a", 'c', 'b'];
console.log('arr3: ', arr4.toSpliced(0, 2, 'aa', 'bb', 'cc'));

//- The with() method
let arr5 = [0, 1, 2, 3, 4, 5];
console.log(arr5.with(0, 4, 5));
console.log('arr5: ', arr5);

// - Array Iterator Methods in JavaScript
// - The filter() array method

let arr11 = [1, 4, 3, 23, 65, 23, 55, 12];
let fitlered = arr11.filter((num) => num > 20);
console.log('fitlered: ', fitlered);

let users = [
  {
    "id": 1,
    "name": "Varun Krishnan",
    "email": "varun@example.com",
    "phone": "+91 9876543210",
    "age": 25,
    "city": "Kochi",
    "isActive": true
  },
  {
    "id": 2,
    "name": "Rahul Nair",
    "email": "rahul@example.com",
    "phone": "+91 9123456789",
    "age": 28,
    "city": "Bangalore",
    "isActive": false
  },
  {
    "id": 3,
    "name": "Anjali Menon",
    "email": "anjali@example.com",
    "phone": "+91 9988776655",
    "age": 24,
    "city": "Chennai",
    "isActive": true
  }
]

console.log(users.filter((user, index, arr) => {
  return user.isActive === true
}));

// - The map() array method
users.map((user, index, arr) => {
  console.log('index: ', index);
  console.log(user.name, user.email);
});

// - The reduce() array method

let sum = [1, 3, 4, 5, 6].reduce(
  ((acc, current, i, arr) => acc + current ), 
  0)
console.log('sum: ', sum);

// - The reduceRight() array method

let sum2 = [-4, -5, 1, 2].reduceRight(
  ((acc, current, i, arr) => acc - current ), 
  0)
console.log('sum: ', sum2);


// - The some() array method => return true or false
let num3 = [11, 12, 3, 2, 33, 4, 5, 6]
console.log(num3.some(num => num === 6));

// - The every() array method
console.log(num3.every(num => num < 7));

// - The find() array method
console.log(num3.find(num => num < 7));

// - The findIndex() array method
console.log(num3.findIndex(num => num < 7));

// - The findLast() array method
console.log(num3.findLast(num => num < 7));

// - The findLastIndex() array method
console.log(num3.findLastIndex(num => num < 7));

//  - Array method Chaining
console.log('--------------------res: ', 
  [1, 2, 4, 5, 6, 12]
  .sort()
  .filter((num)=>num < 5)
  .some((num) => num === 1)
);


// - The forEach() array method

// maps can be chained foreach can't be chained
let num32 = [1, 2, 4, 5, 6, 12]
console.log('num32: ', num32);
let result = num32.map(num => num * 2); // returns updated array
console.log(result);
let result2 = num32.forEach(num => num * 2); // doesn't array
console.log(result2);

// - The entries() method
// Object.entries(obj)
let arrIterator = [11, 12, 14, 15].entries()
console.log('arrIterator: ', arrIterator);

for(const el of arrIterator){
  console.log(el);
}

arrIterator = [11, 12, 14, 15].entries()
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());


// - The values() method
let arrIterator2 = [11, 12, 14, 15].values()
console.log('arrIterator2: ', arrIterator2);
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());

// - The flatMap() array method
let sentences = [
 "Hello World",
 "How are you"
]
let resul = sentences.map(str => str.split(" ")).flat();
console.log('resul: ', resul);

// maps through and flatten the result
let resu = sentences.flatMap(str => str.split(" "));
console.log('resu: ', resu);
/* 

Array
-----------------
- Static Array Methods in JavaScript
  - The Array-Like
  - The Array.from() array method
  - The Array.fromAsync() array method
  - The Array.of() array method
*/