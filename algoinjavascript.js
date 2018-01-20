function fizzBuzz(num){
    for (var i = 1; i <= num; i++){
      if ( i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
      else if (i % 3 === 0) console.log('Fizz');
      else if (i % 5 === 0) console.log ('Buzz');
      else console.log(i);
    }
  }
  fizzBuzz(20);
////////////////////////////////
function addandLog(array){
  for (var i = 0; i < array.length;i++){
    for (var j =0; j < array.length; j++){
      console.log(array[i] + array[j]);
    }
  }
}

addandLog (['A','B','C']);
addandLog (['A','D','C','B']);

/////////////////////////

  