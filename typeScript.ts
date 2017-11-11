// to run command type tsc typesScript.ts

interface SomethingInterface {
    doSomething(): string;
    saySomething(): string;
  }
  
  
  //everything mentioned above should be brought inside class otherwise it gets mad
  
  
  class Something implements SomethingInterface {
    name: string
    age: string 
  
    constructor(name: string, age: string) {
      this.name = name;
      this.age = age;
    }
    doSomething(): string{  //doSomething is a function
      return this.name;
    }
    saySomething(): string{
      return "something";
    }
  
    

    // Another Example

    interface AnimalInterface {
        breathe(): void;
        eat(): void;
      }
      
      
      class Animal implements AnimalInterface {
        breathe(): void {
          console.log('breathing');
        }
      
        eat(): void {
          console.log("munch munch");
        }
      }
      
      class Horse extends Animal {
        gallop(): void {
          console.log("I'm runnin Jennay!")
            
          }
      }  


      // some more examples

var num_arr :number[] = [1, 2, 3, 4, 5];
      
for (var x in num_arr){  //gives back index
  console.log(x)
}

for (var x of num_arr){ //gives back values
  console.log(x)
}