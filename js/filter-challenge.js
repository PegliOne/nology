// Challenge: Built your own filter function

const myFilter = (array, func) => {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) newArr.push(array[i]);
  }

  return newArr;
};

const numbers = [1, 2, 3, 4];
const isEven = (number) => number % 2 === 0;

console.log(myFilter(numbers, isEven));
