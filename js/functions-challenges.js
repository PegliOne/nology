// Challenge: Calculating Moon Orbits

function moonOrbits(amountOfEarthDays) {
  return amountOfEarthDays / 27.3;
}

// Challenge: Working with Circles

function circleArea(radius) {
  return (radius ** 2 * Math.PI).toFixed(2);
}

function circlePerimeter(radius) {
  return (radius * 2 * Math.PI).toFixed(2);
}

// Challenge: Years to Days & Seconds

function ageInDays(ageInYears) {
  return ageInYears * 365;
}

function ageInSeconds(ageInYears) {
  return ageInYears * 365 * 24 * 60 * 60;
}

// Challenge: Return the Remainder from Two Numbers

function calculateRemainder(num1, num2) {
  return num1 % num2;
}

// Challenge: Basketball Points

function remainder(amountOfTwoPointers, amountOfThreePointers) {
  return amountOfTwoPointers * 2 + amountOfThreePointers * 3;
}

// Challenge: Less Than 100?

function lessThan100(num1, num2) {
  return num1 + num2 < 100;
}
