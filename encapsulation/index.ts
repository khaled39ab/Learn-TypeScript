// 4 key principles of Object Oriented Programming (OOP): Inheritance, Abstraction, Encapsulation, Polymorphism.Encapsulation helps us to manage the visibility of class members.

// Access modifiers: public, private, protected, readonly


//---------------------------------------------------------

/* 
// public modifier example

class User {
    public userName: string;
    public age: number;

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

*/

//-------------------------------------------------------

/* 
// *********************  public modifier example  *******************************
class User {
    protected userName: string;
    public age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    protected display(): void {
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

let user1 = new User ('Emamul', 24)
// user1.userName; //Error
// user1.display();
// Error: can't access coz userName is protected but in class or inherit object it is accessible 

*/


// *********************  private modifier example  *******************************
class User {
    // private userName: string;
    public userName: string;
    public age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}

class Student extends User {
    private studentId: number;

    constructor(studentId: number, userName: string, age: number) {
        super(userName, age);
        this.studentId = studentId;
    }
    //(If userName is private)

    // display(): void {
    //     console.log(
    //         `username: id: ${this.studentId}, ${this.userName}, age: ${this.age}`
    //     );
    // }
    // Error: coz display method is private. It's not accessible even extends class

    display(): void {
        console.log(
            `username: id: ${this.studentId}, ${this.userName}, age: ${this.age}`
        );
    }

    // how to access or modify with private property
    setStudentId(id: number): void{
        this.studentId = id
    }


    getStudentID(): number{
        return this.studentId
    }
}

// let user1 = new User ('Emamul', 24)
// user1.userName; //Error
// user1.display();

// Error: can't access coz userName is private. it's not accessible or modify. 

let student1 = new Student(1201201, "Habib", 20);
student1.setStudentId(120111);
console.log(student1.getStudentID());
// student1.display()

