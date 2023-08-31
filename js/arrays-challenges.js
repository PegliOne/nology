// Challenge: Listing Hobbies

const hobbies = ["Swimming", "Playing Clarinet", "Video Games"];

console.log(hobbies[0]);

const firstHobby = hobbies.shift();

const arrLength = hobbies.length;

hobbies.push("Juggling");

console.log(hobbies[arrLength - 1]);

const hobbyString = `My hobbies are: ${hobbies.join(",")}`;
console.log(hobbyString);

// Challenge: Grocery Lists

const groceries = ["Apples", "Milk", "Bread", "Chips", "Body Wash"];
const groceriesString =  groceries.join("|");
console.log(groceriesString);