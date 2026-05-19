/* Object and Object Manipulation
-----------------
- Literal syntax to create object
- two ways we can access keys and the values
    - brakcet notation
    - dot notation
- Deleting a key in object
- Dynamic key
- Constructor function to create objects
- Constructor method of creating objects
- Factory functions
- Methods
- Nested objects
- How to check whether the property exist or not
- for in loop
- How to get all the keys of objects
- How objects are stored in memory
- Equality operator on objects
- Static methos
    - Object.assing(target, source)
    - Structured clone
- Object.entries(obj)
- Object.fromEntries(obj)
- Object.freeze
- Object.isFrozen
- Object.seal
- Object.hasOwn
- Destructiong of objects
    - Dynamic values on destruction the objects
    - Aliasis
    - Nested object destructuring
    - destructuring function params
    - destructuring the function returned values
    - destructuring within loops - for of loop
- Optional chaining
 */


// - Literal syntax to create object
let user = {
    name: "varun",
    age: 25,
    "first name": "vk"
}


/* - two ways we can access keys and the values
// - Dynamic key
    - brakcet notation 
    - dot notation */

console.log(user.age);

let dynamicObjKey = "first name"
console.log(user[dynamicObjKey]);


// - Deleting a key in object
console.log(user);

delete user.age;

console.log(user);


// - Constructor function to create objects

function Car(model, color) {
    this.model = model
    this.color = color
}

let audi = new Car("AUDI", "Black")

console.log('audi: ', audi);
console.log('audi: ', audi instanceof Car);

// - Constructor method of creating objects
/* let user = {
    name : "varun",
    age : 25,
    "first name" : "vk"
} */

let user2 = new Object()
user2.name = "naveen"
user2.age = 25
console.log('user2: ', user2);


// - Factory functions

function createUser(name, age) {
    return {
        name,
        age
    }
}

console.log(createUser("krish", 25));

// - Methods
let user3 = {
    name: "Udayan",
    age: 25,
    getBirthYear: function () {
        return 2026 - this.age
    },
    // - Nested objects
    address: {
        firstLine: "Chennai",
        zip: 6000028
    }
}

console.log(user3.getBirthYear());


// - How to check whether the property exist or not

let emp1 = {
    name: "Raju",
    designation: "Lead",
    isFounder: false
}

if (!emp1.name) {
    console.log("Name doesn't exist");
}

if (!emp1.isFounder) {
    console.log("IsFounder doesn't exist");
}

console.log("isFounder" in emp1);

// - for in loop

for (let currentKey in emp1) {
    console.log(currentKey, emp1[currentKey]);
}

// - How to get all the keys of objects
let empKeys = Object.keys(emp1);

for (let i = 0; i < empKeys.length; i++) {
    console.log(emp1[empKeys[i]]);
}

// - How objects are stored in memory => heap memory

// why object with const are mutable

// const emp2 = "varun";
// emp2 = "suriya"

const emp2 = {
    name: "suriya",
}

emp2.age = 24
console.log('emp2: ', emp2);


// - Equality operator on objects

let fruit1 = {
    name: "grape",
    color: "green"
}

let fruit2 = {
    name: "grape",
    color: "green"
}

console.log(fruit1 === fruit2);


/* 
- Static methods
    - Object.assign(target, source)
    - Structured clone     
*/

let emp5 = {
    "name": "Vijen",
    "age": 35
}

let commonDetails = {
    details: {
        address: "Banglore",
        cmpy: "Gridzy"
    }
}

let emp55 = Object.assign(emp5, commonDetails)
console.log('emp55: ', emp55);

let newObj1 = Object.assign({}, commonDetails)
console.log('newObj1: ', newObj1);

newObj1.details.age = 43

commonDetails.yearOfJoining = 2022

let emp56 = Object.assign(emp5, commonDetails)
console.log('emp56: ', emp56);

commonDetails.details.cmpy = "Enext"

console.log('emp56: ', emp56);

// --------------------------------

let veggie1 = {
    name: "carrot",
    details: {
        cal: 32,
        carbs: 50
    }
}

let veggie2 = { ...veggie1 }
console.log('veggie1: ', veggie1);
console.log('veggie2: ', veggie2);
console.log(Object.hasOwn(veggie2, "details"));

veggie2.details.protein = 45

let veggie3 = structuredClone(veggie1)
console.log('veggie3: ', veggie3);

veggie3.details.mg = 69

// - Object.entries(obj)

console.log(Object.entries(veggie1))

let veggie1Entries = Object.entries(veggie1)

// - Object.fromEntries(obj)
console.log(Object.fromEntries(veggie1Entries));

// - Object.freeze

let laptop1 = {
    brand: "apple",
    model: "m5"
}

console.log(Object.freeze(laptop1));

// laptop1.price = 120000

// - Object.isFrozen
console.log(Object.isFrozen(laptop1));

// - Object.seal

let laptop2  = {
    brand: "asus",
    model: "i5"
}

console.log('laptop2: ', laptop2);
Object.seal(laptop2)

laptop2.brand = "lenovo"
console.log('laptop2: ', laptop2);

console.log(Object.isSealed(laptop2));

// - Object.hasOwn
console.log(Object.hasOwn(laptop2, "brand"));

