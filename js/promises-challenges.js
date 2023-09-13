// Challenge: Delayed Increment / Decrement

const delayedIncDec = (n, mode, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof n !== "number" || isNaN(n) || !["inc", "dec"].includes(mode)) {
        reject(new Error("Error: Invalid number or mode"));
      }  
      if (mode === "inc") {
        n++;  
      } else if (mode === "dec") {
        n--;  
      }
      resolve(n);
    }, timeout)
  }).then((value) => console.log(value));    
}; 

delayedIncDec(2, "inc", 1000);
delayedIncDec(4, "dec", 3000);
delayedIncDec(3, "inc", 2000);

// Challenge: Delayed Filter

const delayedFilter = (array, callback, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {   
      if (!(Array.isArray(array) && typeof callback === "function")) {
        reject(new Error("Error: Invalid array or function"));
      }  
      resolve(array.filter(callback));
    }, timeout)
  }).then((array) => console.log(array));    
}; 

delayedFilter([1, 2, 3, 4], (num) => num % 2 === 0, 1000);
delayedFilter(["string", 5, NaN, 6], (item) => typeof item === "number" && !isNaN(item), 2000);
delayedFilter("string", (num) => num % 2 === 0);