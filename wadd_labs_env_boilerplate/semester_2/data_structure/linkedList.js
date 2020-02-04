// class Node {
//     constructor(data){
//         this.head = data;
//         this.next = null;
//     }

// }class Linkedlist{
//     constructor(node){
//         this.head = node;
//     }
//     insert(){
//         let curentNode = this.head;
//         while(currentNode.next){
//             curentNode = currentNode.next;
//         }
//         const newNode = node;
//         currentNode.next = node;
//     }
// }

//
class Node {
    constructor(data){
        this.head = data;
        this.next = null;
    }
}
class Linkedlist{
    constructor(node){
        this.head = node;
    }
 // change this code to insert a node at a "nth" position instead of the last position
// if i === 0 then insert at the front of the linked list
    insert(i, node){
        let currentNode = this.head;
        for (let j =0; j< i; j++) {
            curentNode = currentNode.next;
        }
        const newNode = node;
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.head = currentNode;
    }
}

const ll = new Linkedlist(new Node('a'));
ll.insert(0, new Node('b'))
ll.insert(0, new Node('c'))

console.log(ll);


