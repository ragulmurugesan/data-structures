
// Collection of nodes in a tree like structure that is in parent/child relationship
// Root is the first elem of the tree
// They are non-linear. 

/**
Root - First elem 
Child - Node connected to another node against root. 
Parent - Node to which another node is connected. 
Sibilings - Nodes connected to the same parent 
Leaf - Nodes with no children
Edge - Connection between 2 nodes. 
*/

class Node {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        let count = 0;
        while (true) {
            if(val === current.value) return undefined;
            if (val < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                else {
                    current = current.left;
                }
            } else if(val > current.value) {
                if( current.right === null ) {
                    current.right = newNode;
                    return this;
                }
                else {
                    current = current.right;
                }
            }
            // TEMP 
            count++;
            if( count === 5 ) {
                console.log('safe check fail');
                return this;
            }
        }
    }

    find(val) {
        if(this.root === null) return undefined;
        let count = 0;
        let current = this.root;
        while(current) {
            if(current.value === val) {
                return true;
            }
            if( val < current.value ) {
                if( val === current.value ) {
                    return true;
                }
                current = current.left;
            }
            else if( val > current.value ) {
                if( val === current.value ) {
                    return true;
                }
                current = current.right;
            }
            // TEMP
             count++;
            if( count === 10 ) {
                console.log('safe check fail');
                return this;
            }
        }
        return false;
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(12);
tree.insert(50);
tree.insert(35);
tree.insert(0);
