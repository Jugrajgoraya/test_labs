function destroy(string) {
    const array = [];
    let str = string.split(" ");
    for (let i = 0; i < str.length; i ++) {
      if (str[i+1] !== str[i]) {
        array.push(str[i]);
      }
      if (str[i+1] === str[i]) {
        str.splice(i+1,1); 
      }
    }
    for(let i = 0; i< array.length; i++){
        if(array[i]==array[i+1] ){
            array.splice(i, 2)
        }
    }
    return array.join(" ");
  }

  console.log(destroy("sun moon moon sun"));
  console.log(destroy("apple apple banana pear banana"));
  console.log(destroy("a a a apple banana banana pineapple"));
  
  //with stack and queue

  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(data) {
      this.items.push(data);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    get front() {
      return this.items[0];
    }
  
    get rear() {
      return this.items[this.items.length - 1];
    }
  }
  
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
  
    get top() {
      return this.nodes[this.nodes.length - 1];
    }
  
    unload() {
      return this.nodes;
    }
  }
  
  function destroyConsecutiveWords(sentence) {
    const setenceArray = sentence.split(" ");
    const s1 = new Stack();
    const q2 = new Queue();
    for (const word of setenceArray) {
      q2.enqueue(word);
    }
    while (!q2.isEmpty()) {
      if (s1.top === q2.front) {
        s1.remove();
        q2.dequeue();
      } else {
        s1.add(q2.dequeue());
      }
    }
    return s1.nodes.join(" ");
  }
  
  console.log(destroyConsecutiveWords("a b b a")); // ""
  console.log(destroyConsecutiveWords("a b b a c")); // "c"
  console.log(destroyConsecutiveWords("apple banana apple banana banana apple")); // "apple banana"