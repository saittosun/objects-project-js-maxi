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

/////////spread operators in objects
const aPerson = { name: "barbie", hobbies: ["running", "cycling"] };
console.log(aPerson);

const anotherPerson = aPerson;
console.log(anotherPerson);
aPerson.age = 30;
console.log(anotherPerson);

const anotherAPerson = { ...aPerson };
aPerson.age = 31;
console.log(anotherAPerson); //age 30
// I didn't get that new value because now we created a copy. Now beware, just as with the arrays example earlier in the course, if you have other reference values inside of your object, like the hobbies array, an array is an object and therefore is also a reference value, then this will not be copied, instead well it's of course kind of copied over into the new object but the object is not cloned, it's not copied, it's still the same array object in memory. So if I go to person.hobbies and I push a new hobby of coding, you will see that person2 also has that on his hobbies if he expand this, here we also see coding now and that's just something which I explained in the arrays section already. This is normal, this is how reference values behave and the spread operator does not do a deep copy where it goes through all level of nested reference values you might have in this object or array and then copies it from scratch, instead it just copies the top level key-value pairs into a brand new object and any nested reference values are kept, the addresses there are kept, there are no hobbies created. If you would want to copy those as well, you would have to do it manually by assigning a new hobbies array where you copy over the old array
aPerson.hobbies.push("coding");
console.log(anotherAPerson);

const person3 = { ...aPerson, age: 29, hobbies: [...aPerson.hobbies] };
console.log(aPerson);
console.log(person3);
aPerson.hobbies.pop();
console.log(aPerson);
console.log(person3);
