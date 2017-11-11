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