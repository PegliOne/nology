// Challenge: Tell me the day!

const day = 1;

switch (day % 7) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;  
  case 3:
    console.log("Today is Wednesday");
    break;  
  case 4:
    console.log("Today is Thursday");
    break;  
  case 5:
    console.log("Today is Friday");
    break; 
  case 6:
    console.log("Today is Saturday");
    break;   
  case 0:
    console.log("Today is Sunday");
    break;  
  default:
    console.log("Invalid input");  
} 

// Challenge: Eye Colour

const parent1 = "brown";
const parent2 = "green";
const combined = `${parent1} and ${parent2}`;

let probabilities = null;

switch (combined) {
  case "brown and brown":
    probabilities = "6.25%, brown is 75% and green is 18.75%.";
    break;
  case "green and brown":
  case "brown and green":
    probabilities = "12.5%, brown is 50% and green is 37.5%.";
    break;  
  case "blue and brown":
  case "brown and blue":
    probabilities = "50%, brown is 50% and green is 0%.";
    break;  
  case "green and green":
    probabilities = "25%, brown is <1% and green is 75%.";
    break;  
  case "green and blue":
  case "blue and green":
    probabilities = "50%, brown is 0% and green is 50%.";
    break; 
  case "blue and blue":
    probabilities = "99%, brown is 0% and green is 1%.";
    break; 
} 

probabilities === null 
  ? console.log("Invalid input") 
  : console.log(`Your eye colours are ${combined}, the chances of your child having blue eyes is ${probabilities}.`);