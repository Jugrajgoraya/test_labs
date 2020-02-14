const delay = require('./delay')

Promise.all([
    delay(10000, "blue"),
    delay(2000, "red"),
    delay(3000, "green"), // delay throws green
  ])
    .then(times => {
      // Promise.all returns a thenable that contains an array of all the resolved values
      console.log(time);
    })

    // sequentially

console.time('delay');
delay(1000, "red")
  .then(val => {
    console.timeLog('delay');
    console.log(val);
    return delay(2000, 'blue');
  })
  .then(val => {
    console.timeLog('delay');
    console.log(val);
    return delay(1000, 'brown');
  })
  .then(val => {
    console.timeEnd('delay');
    console.log(val);
  })