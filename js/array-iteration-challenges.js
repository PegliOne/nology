// Challenge: Sum of n

const number = 100;

function addNumbers(n) {
  let total = 0;

  for (let i = 1; i < n; i++) {
    total += i;
  }

  console.log(total);
}

addNumbers(number);

function addNumbersWithoutLoop(n) {
  const total = (n * (n + 1)) / 2;
  console.log(total);
}

addNumbersWithoutLoop(number);

// Challenge: Write a shopping list

const shoppingList = [
  "milk",
  "watermelon",
  "eggs",
  "soap",
  "butter",
  "apples",
  "ice-cream",
];

function addNumbersToShoppingList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(`${i + 1}. ${list[i]}`);
  }
}

addNumbersToShoppingList(shoppingList);

// Challenge: Capitalizing Odd Positioned Letters

const string = "hello";

function capitaliseOddLettersAndIncrementEvenLetters(string) {
  let newString = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < string.length; i++) {
    const nextLetterIndex = (alphabet.indexOf(string[i]) + 1) % 26;
    const newLetter =
      i % 2 === 0 ? alphabet[nextLetterIndex] : string[i].toUpperCase();
    newString += newLetter;
  }

  return newString;
}

console.log(capitaliseOddLettersAndIncrementEvenLetters(string));

const string2 = "hello there";

function removeSomeVowels(string) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    const isVowel = ["a", "e", "i", "o", "u"].includes(string[i]);
    const isProceededBySpecialLetter = ["l", "m", "r"].includes(string[i + 1]);

    if (!isVowel || isProceededBySpecialLetter) {
      newString += string[i];
    }
  }

  return newString;
}

console.log(removeSomeVowels(string2));
