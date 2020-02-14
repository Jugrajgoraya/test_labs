// Creating Promises

// Promise constructor

const DELAY = 0;
const THREE_SECONDS = 3000;

const pinkyPromise = new Promise((resolve, reject) => { 
  // promises are initialized with a callback function
  // the callback has two arguments res and rej, both are functions
  // both res and rej accept one arugment which can be anything.
  // reject is for bad values
  // resolve is for good values
  if (DELAY > THREE_SECONDS) {
    reject('Took too long');
  }
  setTimeout(() => {
    resolve("Thank you for keeping your promise");
  }, DELAY)
});

// console.log(pinkyPromise); // returns Promise { <pending> }
// setTimeout(() => {
//   console.log(pinkyPromise); // returns Pomise { <resolved> }
// }, 1000)
// Promises can have 3 states
// 1) resolved 👍
// 2) rejected 👎
// 3) pending ❓
// pending means the Promise has not recieved a value yet... waiting for a value

function coinFlip() {
  return new Promise((res, rej) => {
    const value = ["heads", "tails"][Math.floor(Math.random() * 2)];
    setTimeout(() => {
      res(value);
    }, 3000)
  });
}

const thrownCoin = coinFlip();// give me a new promise object
console.log(thrownCoin);
setTimeout(() => {
  console.log(thrownCoin);
}, 4000)