// abstraction helps us to hide the implementation of something
// class declared with abstract keyword
// object can not be created from abstract class
// if a class extends abstract class; it must inherit all the abstract methods



abstract class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    abstract display(): void;
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

let student2 = new Student(123423423, "Aziz", 28);
student2.display();
