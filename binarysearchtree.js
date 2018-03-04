function factorial(num) {
    if (num === 1) {
        return num;
    }
    else {
       return num * factorial(num-1);
    }
}

factorial(5);


//insert method

function BST(value) {
    this.value=value;
    this.left=null;
    this.right=null;
    
  }
  BST.prototype.insert = function(value){
      if (value <= this.value) {
          if (!this.left) this.left = new BST(value);
          else this.left.insert(value);
      }
      else if (value > this.value) {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
        
      }
  };
  
  
  var bst = new BST(50);
  
  bst.insert(30);
  bst.insert(70);
  bst.insert(100);
  bst.insert(60);
  bst.insert(59);
  bst.insert(20);
  bst.insert(45);
  bst.insert(35);
  bst.insert(85);
  bst.insert(105);
  bst.insert(10);
  bst.insert(50);


  console.log(bst.contains(15));
  
  console.log(bst.right.right);

  
 // contains method //
 
 BST.prototype.contains = function (value) {
    if (value === this.value) return true
    else if (value < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value);
    }
    else if (value > this.value){
       if (!this.right) return false;
       else return this.right.contains(value);
    }
  }
  
  
    var bst = new BST(50);
    
    bst.insert(30);
    bst.insert(70);
    bst.insert(100);
    bst.insert(60);
    bst.insert(59);
    bst.insert(20);
    bst.insert(45);
    bst.insert(35);
    bst.insert(85);
    bst.insert(105);
    bst.insert(10);
    
    console.log (bst.contains(105));



    // firsttTrivarsalfunction

    BST.prototype.depthFirstTraversal = function(iteratorFunc) {
        if (this.left) this.left.depthFirstTraversal(iteratorFunc);
        iteratorFunc(this.value);
        if (this.right) this.right.depthFirstTraversal(iteratorFunc);
       
    };
    
    
    
      var bst = new BST(50);
      
      bst.insert(30);
      bst.insert(70);
      bst.insert(100);
      bst.insert(60);
      bst.insert(59);
      bst.insert(20);
      bst.insert(45);
      bst.insert(35);
      bst.insert(85);
      bst.insert(105);
      bst.insert(10);
      bst.depthFirstTraversal(log);
      
      function log(value) {
        console.log(value);
      }

      // in order depthFirstTraversal

      BST.prototype.depthFirstTraversal = function(iteratorFunc,order) {
        if (order === 'pre-order') iteratorFunc(this.value);
        if (this.left) this.left.depthFirstTraversal(iteratorFunc,order);
        if (order === 'in-order')iteratorFunc(this.value);
        if (this.right) this.right.depthFirstTraversal(iteratorFunc,order);
       
    };
    
    
    
      var bst = new BST(50);
      
      bst.insert(30);
      bst.insert(70);
      bst.insert(100);
      bst.insert(60);
      bst.insert(59);
      bst.insert(20);
      bst.insert(45);
      bst.insert(35);
      bst.insert(85);
      bst.insert(105);
      bst.insert(10);
      bst.depthFirstTraversal(log, 'in-order');
      
      function log(value) {
        console.log(value);
      }
  
      // pre order depthFirstTraversal

      BST.prototype.depthFirstTraversal = function(iteratorFunc,order) {
        if (order === 'pre-order') iteratorFunc(this.value);
        if (this.left) this.left.depthFirstTraversal(iteratorFunc,order);
        if (order === 'in-order')iteratorFunc(this.value);
        if (this.right) this.right.depthFirstTraversal(iteratorFunc,order);
       
    };
    
    
    
      var bst = new BST(50);
      
      bst.insert(30);
      bst.insert(70);
      bst.insert(100);
      bst.insert(60);
      bst.insert(59);
      bst.insert(20);
      bst.insert(45);
      bst.insert(35);
      bst.insert(85);
      bst.insert(105);
      bst.insert(10);
      bst.depthFirstTraversal(log, 'pre-order');
      
      function log(value) {
        console.log(value);
      }
      


      // post order  depthFirstTraversal

      BST.prototype.depthFirstTraversal = function(iteratorFunc,order) {
        if (order === 'pre-order') iteratorFunc(this.value);
        if (this.left) this.left.depthFirstTraversal(iteratorFunc,order);
        if (order === 'in-order')iteratorFunc(this.value);
        if (this.right) this.right.depthFirstTraversal(iteratorFunc,order);
        if (order === 'post-order') iteratorFunc(this.value);
       
    };
    
    
    
      var bst = new BST(50);
      
      bst.insert(30);
      bst.insert(70);
      bst.insert(100);
      bst.insert(60);
      bst.insert(59);
      bst.insert(20);
      bst.insert(45);
      bst.insert(35);
      bst.insert(85);
      bst.insert(105);
      bst.insert(10);
      bst.depthFirstTraversal(log, 'post-order');
      
      function log(value) {
        console.log(value);
      }
      
// breadthFirstTraversal
      BST.prototype.breadthFirstTraversal = function(iteratorFunc){
        var queue = [this];
        while(queue.length){
            var treeNode = queue.shift();
            iteratorFunc(treeNode);
            if (treeNode.left) queue.push(treeNode.left);
            if (treeNode.right) queue.push(treeNode.right);
        }
        
      }
      
      
        var bst = new BST(50);
        
        bst.insert(30);
        bst.insert(70);
        bst.insert(100);
        bst.insert(60);
        bst.insert(59);
        bst.insert(20);
        bst.insert(45);
        bst.insert(35);
        bst.insert(85);
        bst.insert(105);
        bst.insert(10);
      
        
        function log(node) {
          console.log(node.value);
        }
        
      bst.breadthFirstTraversal(log);
 output 
 
input
clear
Native Browser JavaScript
   
50
30
70
20
45
60
100
10
35
59
85
105


// get min and max value

BST.prototype.getMinVal = function() {
    if (this.left) return this.left.getMinVal();
    else return this.value;
};

BST.prototype.getMaxVal = function(){
    if (this.right) return this.right.getMaxVal();
      else return this.value;
};

  



  var bst = new BST(50);
  
  bst.insert(30);
  bst.insert(70);
  bst.insert(100);
  bst.insert(60);
  bst.insert(59);
  bst.insert(20);
  bst.insert(45);
  bst.insert(35);
  bst.insert(85);
  bst.insert(105);
  bst.insert(10);

  
  function log(node) {
    console.log(node.value);
  }
  
console.log('MIN:', bst.getMinVal());
console.log('MAX:', bst.getMaxVal());


function Count(leaf){
  let count =1;
  if (leaf === null) return 0;
  if (leaf.left !== null)
    count += count(leaf.left);
  else(leaf.right !== null)
    count += count(leaf.right);
  return count;
}