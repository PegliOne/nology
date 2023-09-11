// A function that calculates the sum of numbers
// return the sum of numbers
// it should work for different amount of arguments - 1 or more

// no parameters sum() => throw an error
// all parameters must be numbers -> if not throw an error sum(2, "apple", true)

// sum(2)
// sum(2, 3, 4, 5)
// sum(10, 11, 11, 11, 11, 11, 11)

export const tooFewArgsError = new Error(
  "Too few arguments, at least one argument must be given"
);

export const invalidArgsError = new Error(
  "Incorrect argument type, all args must be numbers"
);

export const sum = (...nums) => {
  if (nums.length < 1) {
    throw tooFewArgsError;
  }

  const areAllNums = nums.every((num) => typeof num === "number");

  if (!areAllNums) {
    throw invalidArgsError;
  }

  return nums.reduce((total, num) => total + num);
};
