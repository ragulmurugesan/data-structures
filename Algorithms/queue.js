// First In Last out. 


class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node( val );
        let temp;
        if( this.size === 0 ) {
            console.log('Sample');
            this.first = newNode;
            this.last = newNode;
            return ++this.size;
        }
        this.last.next = newNode;
        this.last = newNode;
        return ++this.size;
    }

    dequeue() {
        if( !this.size ) return null;
        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}

const list = new Queue();