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