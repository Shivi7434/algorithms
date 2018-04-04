function basic1(){
    var x = [];
    x.push('coding','dojo','rocks');
    x.pop();
  console.log(x)
  }
  basic1();


function basic2(){
    const y = [];
    y.push(88)
    console.log(y)
}
basic2();

function basic3(){
    var z = [9,10,6,5,-1,20,13,2]
    for (var i = 0;i < z.length;i++){
      console.log (z[i])
    }
    for (var i = 0;i < z.length-1;i++){
      console.log (z[i])
    }  
}
// // basic3();

function basic4(){
    var names = ['Katie','Joe','Fritz','Pierre','Alphonso'];
    for (var i = 0;i < names.length;i++){
      for (var a = 0; a < names[i].length ; a++){
        if (names[i].length == 5){
        console.log(names[i]);
        }
      }
    }
  }
  basic4();


  function magic_multiply(x,y){
    var x = x*y;
    return x;
}
magic_multiply(5,2);


function magic_multiply(x,y){
    var x = x*y;
    return x;
}
magic_multiply(0,0);


function magic_multiply(x,y){
    for (var i = 0;i < x.length; i++){
      x[i] = x[i] * y;
    }  
     return x;
}
magic_multiply([1,2,3],2);

function magic_multiply(x,y){
    if (y.constructor === String ){
        console.log("Error. Can not multiply by string")
    }    
}
magic_multiply(7,"three");

function magic_multiply(x,y){
    string = "";
    for (var i = 0;i < y; i++){
      string += x;
    }
    console.log(string);
  }
  magic_multiply("Brendo",4);


