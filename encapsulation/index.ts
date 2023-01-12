// 4 key principles of Object Oriented Programming (OOP): Inheritance, Abstraction, Encapsulation, Polymorphism.Encapsulation helps us to manage the visibility of class members.

// Access modifiers: public, private, protected, readonly

// inheritance helps us to acquire properties of one class to another

class User {
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

class Student extends User {
    studentId: number;

    constructor(studentId: number, userName: string, age: number) {
        super(userName, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(
            `username: id: ${this.studentId}, ${this.userName}, age: ${this.age}`
        );
    }
}

let student1 = new Student( 1302020015, "keya", 31,);
student1.display();

let user1 = new User ('Emamul', 24)
user1.display();