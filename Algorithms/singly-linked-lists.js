
// ES6 - class is required. 
// Add, remove, traverse in the single linked list. 

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        console.log(newNode);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.length) return undefined;
        let current = this.head;
        let newTail;
        let temp;
        while(current) {
            console.log('In Loop');
            if(current.next === null) {
                temp = current;
                newTail.next = null;
                this.tail = newTail;
                this.length--;
                break;
            } else {
                // console.log('Next', current.next);
                newTail = current;
                current = current.next;
            }
        }
        return temp;
    }

    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

var list = new SinglyLinkedList();
list.push('Hello');
list.push('Hi');
list.push('Welcome');
// console.log(list);