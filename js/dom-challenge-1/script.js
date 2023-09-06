// DOM Selectors

const submitButton = document.querySelector('.button');
const beerImage = document.querySelector('img');
const messageDiv = document.querySelector('#message');
console.log(message);

// Business Logic

const person1 = {
  age: 18,
  legalDrinkingAge: 18,
  isDrunk: false  
}

const renderEntryState = (person) => {
  const message = checkIfCanEnterPub(person);
  if (message === "Come in") {
    submitButton.classList.add("can-enter");
    beerImage.setAttribute("src", "./assets/green_beer.svg");
  } else {
    submitButton.classList.add("cannot-enter");
    beerImage.setAttribute("src", "./assets/red_beer.svg");
  }   
  messageDiv.textContent = message;
}

const checkIfCanEnterPub = (person) => {
  if (!person.isDrunk && person.age >= person.legalDrinkingAge) {
    return "Come in";
  } else {
    return "You can't come in";
  }     
}

renderEntryState(person1);