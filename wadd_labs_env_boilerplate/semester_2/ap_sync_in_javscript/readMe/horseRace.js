const delay = require('./delay');

// Promise.all is a method that accepts an array of Promise objects
// it will execute all the promises in parallel
// when all the promises have <resolved> it will return a thenable with an array of all the resolved values

Promise.all([
  delay(10000, "blue"),
  delay(2000, "red"),
  delay(3000, "green"), // delay throws green
])
  .then(colors => {
    // Promise.all returns a thenable that contains an array of all the resolved values
    console.log(colors);
  })
  .catch(err => {
    // if any of the promises in the Promise.all array rejects the Promise.all is considered rejected
    console.log(err);
  })


// sequentially

// console.log('delay');
// delay(1000, "red")
//   .then(val => {
//     console.log('delay');
//     console.log(val);
//     return delay(2000, 'blue');
//   })
//   .then(val => {
//     console.timeLog('delay');
//     console.log(val);
//     return delay(1000, 'brown');
//   })
//   .then(val => {
//     console.timeEnd('delay');
//     console.log(val);
//   })
