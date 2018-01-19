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
            this.length++;

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

function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
};
var user200 = new User('Jill', 'Robinson', 25, 'female');
User.prototype.emailDomain = '@facebook.com'
user1
user200.emailDomain
User.prototype.getEmailAddress = function() {
    return this.firstName + this.lastName + this.emailDomain;
}
function() {
    return this.firstName + this.lastName + this.emailDomain;
}
function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  
  function Node(value, next,prev) {
    this.value = value;
    this.next=next;
    this.prev = prev;
  }
  
   //var LL = new LinkedList();    will bring down the value named in func
  var userList = new LinkedList();
  var toDoList = new LinkedList ();
  
  console.log (LL);


  function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  
  function Node(value, next, prev) {
    this.value = value;
    this.next=next;
    this.prev = prev;
  }
  
  var node1 = new Node(100,'node2',null);
  
  console.log(node1);

//   #add to head Method 

  function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  
  function Node(value, next, prev) {
    this.value = value;
    this.next=next;
    this.prev = prev;
  }
  
  LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value,this.head,null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  };
  var ll = new LinkedList();
  
  
  ll.addToHead(100);
  ll.addToHead(200);
  ll.addToHead(300);
  
  console.log(ll);


//   add to tail method 

  LinkedList.prototype.addToTail = function (value) {
    var newNode = new Node(value ,null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  };
  
  var myll = new LinkedList();
  
  myll.addToTail(10);
  myll.addToTail(20);
  myll.addToTail(30);
  
  myll.addToHead(100);
  
  console.log(myll.tail.prev.prev.prev);

//   remove head value

LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
  };
  
  var ll = new LinkedList ();
  ll.addToHead(1000);
  ll.addToHead(2000);
  ll.addToTail(3000);
  
  ll.removeHead();
  console.log(ll.removeHead());


//   remove tail 

  LinkedList.prototype.removeTail = function () {
    if (!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next=null;
    else this.head = null;
    return val;
  };
  
  var ll = new LinkedList ();
  ll.addToHead('one');
  ll.addToHead('two');
  ll.addToHead('three');
  
  
  console.log(ll.removeTail());

//   search method 

  LinkedList.prototype.search = function(searchValue) {
    var currentNode = this.head;
    var counter = 0;
    while (currentNode){
      if (currentNode.value === searchValue) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  };
  
  
  var myll = new LinkedList();
  
  myll.addToHead(123);
  myll.addToHead(70);
  myll.addToHead('hello');
  myll.addToTail(19);
  myll.addToTail('world');
  myll.addToTail(20);
  
  console.log(myll.search(50));

//   index of 

  LinkedList.prototype.indexOf = function (value){
    var indexes = [];
    var currentIndex = 0;
    var currentNode = this.head;
    while(currentNode){
      if (currentNode.value === value){
        indexes.push(currentIndex)
      }
      currentNode = currentNode.next ;
      currentIndex ++;
    }
    return indexes;
  };
  
  var myll = new LinkedList();
  myll.addToTail(1);
  myll.addToTail(5);
  myll.addToTail(3);
  myll.addToTail(5);
  myll.addToTail(8);
  myll.addToTail(7);
  myll.addToTail(5);
  
  console.log(myll.indexOf(5));