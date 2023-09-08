// DOM Selectors

const beerImage = document.querySelector("svg");
const form = document.querySelector("form");
const ageInput = document.querySelector("#age");
const countryInput = document.querySelector("#country");
const drunkInput = document.querySelector("#drunk");
const submitButton = document.querySelector("#btn");
const messageDiv = document.querySelector("#message");

// DOM Logic

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  getFormData();
});

const getFormData = () => {
  const data = new FormData(document.querySelector("form"));
  const age = data.get("age");
  const country = data.get("country");
  const drunkennessLevel = data.get("drunk");
  if (age && country && drunkennessLevel) {
    const person = {
      age: age,
      legalDrinkingAge: country === "USA" ? 21 : 18,
      isDrunk: drunkennessLevel > 3,
    };
    renderEntryState(person);
  }
};

const renderEntryState = (person) => {
  const message = checkIfCanEnterPub(person);
  if (message === "Come in") {
    submitButton.classList.remove("cannot-enter");
    submitButton.classList.add("can-enter");
    // beerImage.setAttribute("src", "./assets/green_beer.svg");
    beerImage.classList.remove("cannot-enter");
    beerImage.classList.add("can-enter");
  } else {
    submitButton.classList.remove("can-enter");
    submitButton.classList.add("cannot-enter");
    // beerImage.setAttribute("src", "./assets/red_beer.svg");
    beerImage.classList.remove("can-enter");
    beerImage.classList.add("cannot-enter");
  }
  messageDiv.textContent = message;
};

// Business Logic

const checkIfCanEnterPub = (person) => {
  if (!person.isDrunk && person.age >= person.legalDrinkingAge) {
    return "Come in";
  } else if (person.isDrunk) {
    return "You can't come in for you're drunk";
  } else {
    return "You can't come in for you're too young given your country's legal drinking age";
  }
};
