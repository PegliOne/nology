// Challenge: Count occurences

const countOccurences = (array, target) => {
  const targets = array.filter((element) => element === target);
  return targets.length;
}

console.log(countOccurences([1, 2, 1, 3, 4, 1, 1, 2, 4], 1));