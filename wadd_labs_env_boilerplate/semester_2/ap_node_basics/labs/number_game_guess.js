const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number = Math.floor(Math.random()* 10 + 1);

let count = 1;
console.log("I'm thinking about a no between 1 to 10");

function guessIt(){
  rl.question(">", (answer) => {
    if(parseInt(answer) === number){
          console.log(`yeah you  did it in ${count} attempts`);
          rl.close();
      }
      if(parseInt(answer) !== number){
        count++;
        console.log("oppps..wanna try again");
        guessIt();
        }   
    })
}
guessIt()