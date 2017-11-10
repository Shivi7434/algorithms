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
  }