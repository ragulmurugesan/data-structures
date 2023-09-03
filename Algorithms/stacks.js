// Writing our own stack instead of using array. 
// pattern is LIFO - Last In First Out 
// It is also a linked list.

// Writing our own stack instead of using array. 
// pattern is LIFO - Last In First Out 
// It is also a linked list.

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.length) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.length++;
        return this.length;
    }

    pop() {
        if (!this.length) return null;
        let temp = this.first;
        this.first = this.first.next;
        this.length--;
        if (this.length === 0) {
            this.first = null;
            this.last = null;
        }
        return temp;
    }
}

const list = new Stack();
list.push('Crown');
list.push('One by one');