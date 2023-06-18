// import { apiKey, otherApiKey } from "./util.js";
// import * as util from "./util.js";
// import { apiKey, otherApiKey as content } from "./util.js";

// console.log(util.apiKey, util.otherApiKey, util.default);
// console.log(content);

// console.log("Hello World!");

// console.log(10 <= 9);

// if (10 === 10) {
//   console.log("works");
// }

// function greet() {
//   console.log("Hello!");
// }

// function greetUser(userName, message = "Hello!") {
//   console.log(userName);
//   console.log(message);
// }

// function createGreeting(userName, message = "Hello!") {
//   return "Hi, I am " + userName + ". " + message;
// }

// greet();
// greetUser("Gildo", "Seja bem vinde");
// greetUser("Joe", "Hello my friend");
// greetUser("Ana");
// console.log(createGreeting("Miles"));

// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Greet!!!");
//     console.log(this.age);
//   },
// };

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hello", this.name, this.age);
//   }
// }

// const user1 = new User("Dan", 78);
// console.log(user1);
// user1.greet();

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sports");

// const newHobbies = hobbies.map((item) => item + "!");
// const objHobbies = hobbies.map((item) => ({ text: item }));
// console.log(objHobbies);

// function transformToObjects(numberArray) {
//   // Todo: Add your logic
//   // should return an array of objects
//   return numberArray.map(item => ({val: item}));
// }

// const [firstName, lastName] = ["Max", "Fivela"];
// console.log(firstName, lastName);

// const user = {
//   name: "Max",
//   age: 34,
// };

// // console.log(userName, age);

// const hobbies = ["Sports", "Cooking", "Reading"];
// const beverages = ["Water", "Coke", "Sprite"];

// const mergedList = [...hobbies, ...beverages];
// console.log(mergedList);

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendedUser);

// const password = prompt("Enter password");

// if (password === "Hello") {
//   console.log("Hello works!");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted");
// }

// const hobbies = ["Sports", "Cooking", "Reading"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// const handleTimeout = () => {
//   console.log("Timeout");
// };

// setTimeout(handleTimeout, 2000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi"));

// function init() {
//   function greet() {
//     console.log("Hi!");
//   }

//   greet();
// }

// init();

let userMessage = "Hello!";
