var Node = require ('./node').Node;

function LinkedList(){
    this_length =0;
    this.head= null;
    this.tail= null;
}
LinkedList.prototype = {
    add: function(value) {
        var node = new Node(value);

        if (!this.head) {
            this.head=node;
            this.tail = node;
            this.lenght++;

            return node;
        }
        this.tail.next= node;
        node.previous = this.tail;
        this.tail = node;
        this._length++;
        return node;
    },
    prepend:function(value){
        var node = new Node(value);

        if(!this.head){
            this.head = node;
            this.tail =node;
            this._length++;

            return node;
        }

        node.next = this.head;
        this.head.previous = node;
        this.head =node;
        this._length ++;
        return node;
    },
    insert: function(index,value){
        var currentNode = this.head;
        var node = new Node(value);
        var count = 0;

        if (index <= -1 || index >= this.length){
            throw new Error("LinkedList index out of range.")
        }
    
        if (!this.head){
            this.head = node;
            this.tail =node;
            this._length++;

            return node;
        }
        if (index == 0) {
            
        }
    
    }


}