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

let student2 = new Student(123423423, "Aziz", 28);
student2.display();

let user1 = new User ('Emamul', 24)
user1.display();

let user2 = new User("Labib", 19);
user2.display();