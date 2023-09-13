// Challenge: Walk The Dog

class Dog {
  static allDogs = [];  
  static legCount = 4;
  static isCute = true;

  constructor(walkCount = 0, walkDistance = 0) {
    this.walkCount = walkCount;
    this.walkDistance = walkDistance;
    Dog.allDogs.push(this);
  }

  static legCount = 4;
  static isCute = true;

  static bark() {
    console.log("Woof!");
  }

  static randomAction() {
    let num = Math.random();

    if (num < 0.25) {
      console.log("Chase cat");
    } else if (num < 0.5) {
      console.log("Sniff other dog's butt");
    } else if (num < 0.75) {
      console.log("Wag tail");
    } else {
      console.log("Growl");
    }
  }

  static walkAverage() {
    console.log(Dog.allDogs);
    const averageWalkDistance = 5;
    console.log(
      `The average walk distance for all dogs is ${averageWalkDistance}km`
    );
  }

  walk(distance) {
    this.walkCount++;
    this.walkDistance += distance;
  }

  walkSummary() {
    console.log(
      `This dog has gone on ${this.walkCount} walk(s) with a total distance of ${this.walkDistance}km`
    );
  }

  walkAverage() {
    return this.walkDistance / this.walkCount;
  }
}

console.log(Dog.legCount);
console.log(Dog.isCute);

Dog.bark();
Dog.randomAction();

const dog = new Dog;

dog.walk(2);
dog.walk(3);
dog.walk(1.5);
dog.walkSummary();
console.log(dog.walkAverage());

Dog.walkAverage();