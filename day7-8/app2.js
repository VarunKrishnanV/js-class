/*
- Destructiong of objects
    - Dynamic values on destruction the objects
    - Aliasis
    - Default values
    - Nested object destructuring
    - destructuring function params
    - destructuring the function returned values
    - destructuring within loops - for of loop */


// - Dynamic values on destruction the objects

let student = {
    name: "Varun",
    age: 24,
    cmpy: "Gridzy"
}

console.log(student.name);
console.log(student.age);
console.log(student.cmpy);

// let { name, age, cmpy } = student
// console.log(name);
// console.log(age);
// console.log(cmpy);

let student2 = {
    name: "Raju",
    age: 30,
    cmpy: "Gridzy",
    intersts: [1, 3, 5]
}



let {
    name: studName,
    age: studAge,
    cmpy: studCmpy,
    city: studCity = "BLR",
    interstsCount = student2.intersts.length
} = student2

let studName1 = student2.name

console.log('studName---: ', studName);
console.log('studAge---: ', studAge);
console.log('studCmpy---: ', studCmpy);
console.log('studCity---: ', studCity);
console.log('interstsCount---: ', interstsCount);



// used to iterate on the key of an object
for (let key in student) {
    console.log(key);
}

let students = [
    {
        name: "Varun",
        age: 24,
        cmpy: "Gridzy"
    },
    {
        name: "Naveen",
        age: 24,
        cmpy: "Gridzy2"
    }

]

// used to iterate on the key of an object of array of objects
for (let { name, age } of students) {
    console.log(`Student name is ${name}, age is ${age}`);
}


// nested destructions
let vk = {
    name: "Varun",
    age: 24,
    cmpy: "Gridzy",
    address : {
        line1 : "banglore",
        zip : "123231"
    }
}

let { address : {zip}} = vk
// allows only to one level
console.log('zip: ', zip);


// destruction function params

/* function add(obj){
    console.log(obj.num1 + obj.num2);
} */

function add({num1, num2}){
    console.log(num1 + num2);
}

add({ num1 : 10, num2  : 50})


function apiCallToGetUserDetails(){
     return {
        name: "Varun",
        age: 24,
        cmpy: "Gridzy",
        address : {
            line1 : "banglore",
            zip : "123231"
        }
    }
}

let {name, age, cmpy, address} = apiCallToGetUserDetails()
console.log('age: ', age);
console.log('name: ', name);

// - Optional chaining