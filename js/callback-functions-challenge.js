// Challenge: Altering a sentence

const alterSentence = (sentence, callback) => {
  const words = sentence.split(" ");
  const alteredWords = words.map((word) => callback(word));
  return alteredWords.filter((word) => word !== "").join(" ");
};

const capitalise = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const reverse = (word) => {
  const letters = word.split("");
  return letters.reverse().join("");
};

const removeAllVowels = (word) => {
  return word.replace(/[aeiouAEIOU]/g, "");
};

console.log(alterSentence("This is a sentence", capitalise));
console.log(alterSentence("This is also a sentence", reverse));
console.log(alterSentence("This is a sentence too", removeAllVowels));
