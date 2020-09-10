// jshint esversion: 9
const movieList = document.getElementById("movie-list");
// movieList.style.backgroundColor = "red"; // works
// movieList.style['background-color'] = "blue"; // works
movieList.style["backgroundColor"] = "yellow";
movieList.style.display = "block";

let person = {
  "first name": "max",
  age: 31,
  hobbies: ["sport", "sleep"],
  greet: function () {
    alert("hi i am here!!");
  },
  1: "hello my key is number",
};

person.age = 30; // overwrite
delete person.age;
console.log(person.isAdmin); // undefined
person.age = null; // null is used if we want to reset or clear smth.
console.log(person.age); // null
person.isAdmin = true;
console.log(person.isAdmin); // true
console.log(person); // {first name: "max", hobbies: Array(2), age: null, isAdmin: true, greet: ƒ}

console.log(person["first name"]); // max

console.log(person[1]);
console.log(person["1"]); //Javascript automatically coerces values to strings, so it kind of translates it to a string anyways behind the scenes but you can also access it like this.

// Property Order
console.log(person);

// Dynamic property access & setting properties dynamically
const keyName = "first name";
console.log(person.keyName); // undefinded
console.log(person[keyName]); // max

// Setting properties dynamically
const userChosenKeyName = "key name";
const person1 = {
  name: "sait",
  [userChosenKeyName]: "tosun",
};
console.log(person1);

const propKey = "field 12";
const person2 = {
  [propKey]: "esra",
};
console.log(person2["field 12"]);
console.log("other is: ", person2[propKey]);

// question: What would be a use-case for a dynamic property assignment (i.e. for setting a property via [] on the "left side of the colon")? answer is you want to set a user-defined property name(e.g. entered via some input). Because If you don't know the property name in advance (i.e. at the time you're writing the code), dynamic assignment allows you to refer to a variable which will eventually hold the to-be-used property name.


