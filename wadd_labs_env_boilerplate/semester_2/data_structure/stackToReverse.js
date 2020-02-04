// Our Stack Implementation 

class Stack {
    constructor() {
      this.nodes = [];
    }
  
    add(data) {
      this.nodes.push(data);
    }
  
    remove() {
      return this.nodes.pop();
    }
  
    isEmpty() {
      return this.nodes.length === 0;
    }
  }
  
  // Use cases for a stack...
  // keeping history within a browser
  // most languages use a "call stack" to keep track of function calls
  // redo / undo features use a stack
  // recursion
  
  
  // Demo: Validating Parenthesis
  
  function sanitizeParenthesis(string) {
    const pStack = new Stack();
    for (let char of string) {
      if (char === '(') {
        pStack.add(char);
      }
      if (char === ')') {
        if(pStack.isEmpty()) {
          return 'Bad Code';
        }
        pStack.remove();
      }
    }
    if (pStack.isEmpty()) {
      return 'Good Code'
    } else {
      return 'Bad Code'
    }
  }
  
  // console.log(sanitizeParenthesis('console.log()')) // "good Code"
  // console.log(sanitizeParenthesis('console.log(()')) // "bad Code"
  // console.log(sanitizeParenthesis('console.log))')) // "bad Code"
  // console.log(sanitizeParenthesis('console.log()()()()()')) // "good Code"
  // console.log(sanitizeParenthesis('console.log((()))')) // "good Code"
  console.log(sanitizeParenthesis('console.log)(')) // "good Code"


function reverseStringQ(string) {
    let revString = '';
    const characterQueue = new Queue();
    for (let i = string.length - 1; i >= 0; i--) {
      characterQueue.enqueue(string[i]);
    }
    while(!characterQueue.isEmpty()) {
      revString += characterQueue.dequeue();
    }
    return revString;
  }
  
  console.log(reverseStringQ('abcd')); // 'dcba';
  
  // reverse a string using a stack
  function reverseStringS(string) {
    let revString = '';
    const characterStack = new Stack();
    for (let c of string) {
      characterStack.add(c);
    }
    while(!characterStack.isEmpty()) {
      revString += characterStack.remove();
    }
    return revString;
  }
  console.log(reverseStringS('abcdsafdsfdsafasdd')); // 'dcba';