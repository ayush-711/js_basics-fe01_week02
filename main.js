// console.log("hi");
// console.error("this is error");
// console.warn("warning");


//strings , numbers , boolean , null , undefined

// const name = "ayush";
// const age = 21;
// const isgood = false;
// const a = null;
// const b = undefined;
// let c;

// console.log(typeof (age));
// console.log(typeof (name));
// console.log(typeof (isgood));
// console.log(typeof (a));
// console.log(typeof (b));


//CONCATENATION

// console.log('My name is ' + name + ' and I am ' + age + ' years old.')
// console.log(`My name is ${name} and I am ${age} years old.`)


//string properties and methods

// const s = "hello world hehehahaokok";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLocaleLowerCase());
// console.log(s.split(' '))


//// array manipulation

// const fruit = ['apple', 'mango', 'guava'];
// console.log(fruit);
// console.log(fruit[1]);

// fruit[3] = 'banana'

// console.log(fruit[3]);

// fruit.push('pineapple'); // push => make item added to array but at the END
// console.log(fruit);

// fruit.unshift('watermelon'); // unshit => push => make item added to array but at the START
// console.log(fruit);


// object literals


// const person = {
//     firstname: 'Ayush', lastname: 'Kumar', age: 21, hobbies: ['sports', 'gaming', 'eating'], address: {
//         street: '50 main st', city: 'delhi', country: 'india', pincode : 101010  }
  
// }

// console.log(person.firstname);
// console.log(person.address);
// console.log(person.address.pincode);
// console.log(person.hobbies[2]);

// console.log(`my name is ${person.firstname} and i am ${person.age} , my hobbies are ${person.hobbies}`)

// person.gmail = 'person@gmail.com';
// console.log(person.gmail);



// array object literals

const todos = [
    { id: 1, agenda: 'meeting with boss', isCompleted: true } ,
    { id: 2, agenda: 'coffee', isCompleted: true } ,
    { id: 3, agenda: 'book reading', isCompleted: false }
]

// console.log(todos[0].agenda, todos[0].isCompleted , todos[2].agenda , todos[2].isCompleted);


//to convert data into json 

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);