// Challenge: Odds & Events

const n = 6;

if (!parseInt(n)) {
  console.log("Invalid n");
} else if (n % 2 === 0) {
  console.log("n is even");
} else {
  console.log("n is odd");
}

// Challenge: Comparing Numbers

const x = 1;
const y = 2;

if (x === y) {
  console.log("x is equal to y");
} else if (x > y) {
  console.log("x is greater than y")
} else {
  console.log("x is small than y");
}

// Challenge: Comparing Numbers

const userInput = "hello";

if (typeof userInput === "number" && parseInt(userInput)) {
  console.log(userInput * userInput);
} else if (typeof userInput === "string") {
  console.log(userInput);
} else {
  console.log("invalid input");
}