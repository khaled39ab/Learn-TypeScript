// typescript class object

// class can have constructor, properties, methods
// create object - let objectName = new className();


// In TypeScript, the class keyword provides a more familiar syntax for generating constructor functions and performing simple inheritance. 


class User {
    // properties, methods, constructor
    userName: string;
    age: number;
  
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
  
    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}`);
    }
  }
  
  let user1 = new User("Saiful Islam", 25);
  user1.display();
  
  let user2 = new User("Rakibul Islam", 31);
  user2.display();

  