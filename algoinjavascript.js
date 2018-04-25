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
// to check number of times word has been repeated//
function harmlessRansomNote (noteText, magazineText){
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};
  
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  
  console.log(magazineObj);
}

harmlessRansomNote('','this is all the magazine text in the magazine ');
////////////////////////////////////
// to check whether magazine has same words as note// test ran true//
function harmlessRansomNote (noteText, magazineText){
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};
  
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  
  var noteIsPossible = true;
  noteArr.forEach(word => {
      if (magazineObj[word]) {
        magazineObj[word] --;
        if (magazineObj[word] < 0) noteIsPossible = false;
        
      }
      
      else noteIsPossible = false;
  });

  return noteIsPossible;
  
}
harmlessRansomNote('this is a secret note for you from a secret admirer','Lorem from secret Ipsum has been the industry standard dummy text ever since the 1500s, when an admirer for you note secret is a this unknown printer took a galley of type and scrambled it to make a type specimen book');

////////////////////////////
/// is palindrome//// returns true////

function isPalindrome (string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  

  
  
  var lettersArr = [];
  charactersArr.forEach(char => {
    if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  
  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

console.log(isPalindrome("Madam I'm Adam"));

///////////////////////////////
//// Ceaser Cipher//// result in movin 1 alphabet forward and converting into it
function caesarCipher (str, num ) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijlkmnopqrstuvwxyz'.split('');
  var newString = '';
  for ( var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25 ) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()){
      newString += alphabet[newIndex].toUpperCase();
    }  
    
    else newString += alphabet[newIndex];
  }
  return newString;
}
caesarCipher('Zoo Keeper', 1)
///// results movind forward by 1 - 'App Mffqfs'//////

function reverseWords(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];
  
  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i =word.length - 1; i >= 0; i--){
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });
  return reversedWordsArr.join(' ');
}
reverseWords('There is a day');
/////////////////////////////////////////////
function addandLog(array){
  for (var i = 0; i < array.length;i++){
    console.log(array[i] + array[i]);
      
    }
}

addandLog ([1 , 2 , 3]);

