// Challenge: Generating Unique Random Numbers

let randomNumbers = [];

while (randomNumbers.length < 10) {
    const randomNumber = Math.floor(Math.random() * 16);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
}

console.log(randomNumbers);

// Challenge: generateNumbers function

function generateNumbers(n, r, isUnique) {
  if (isUnique && n > r + 1) {
    return "Invalid input";
  }

  let randomNumbers = [];

  while (randomNumbers.length < n) {
    const randomNumber = Math.floor(Math.random() * (r + 1));
    if (!randomNumbers.includes(randomNumber) || !isUnique) {
      randomNumbers.push(randomNumber);
    }
  }
  
  return randomNumbers;
}

console.log(generateNumbers(10, 20, true));