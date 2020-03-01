const fs = require('fs');
const readline = require('readline');
const logSymbols = require('log-symbols');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Queue {
    constructor () {
        this.queue = [];
    }
    enqueue  (item){
        this.queue.push(item);
    }
    
    dequeue () {
        return this.queue.shift();
    }
}
const todoList = new Queue();
rl.question('Welcome to Todo CLI! \n ----------------- \n (v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n ', function (data) {
    // to view file
    if ( data === 'v') {
        fs.readFile('./todolist.txt','utf8',(err,options) => {
            if (err) throw err;
            console.log(options);
        })
    }
    // to add option to the file
    if (data === 'n') {
        rl.question('What ? \n', (answer) => {
            fs.appendFileSync('todolist.txt',answer);
        })
    }
    // to delete options from specific index
    if (data[0] === 'd') {
        const index = array.indexOf(data);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }
    // to quit the readline module
    if (data === 'q') {
        rl.close()
    }
})    