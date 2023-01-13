// 4 key principles of Object Oriented Programming (OOP): Inheritance, Abstraction, Encapsulation, Polymorphism.Encapsulation helps us to manage the visibility of class members.

// Access modifiers: public, private, protected, readonly


//---------------------------------------------------------


// public modifier example

class User1 {
    public userName1: string;
    public age1: number;

    constructor(userName1: string, age1: number) {
        this.userName1 = userName1;
        this.age1 = age1;
    }

    display1(): void {
        console.log(`username1: ${this.userName1}, age1: ${this.age1}`);
    }
}

class Student1 extends User1 {
    studentId1: number;

    constructor(studentId1: number, userName1: string, age1: number) {
        super(userName1, age1);
        this.studentId1 = studentId1;
    }
    display1(): void {
        console.log(
            `username: id: ${this.studentId1}, ${this.userName1}, age: ${this.age1}`
        );
    }
}

let student1 = new Student1(1302020015, "keya", 31,);
student1.display1();

let user1 = new User1('Emamul', 24)
user1.display1();


//-------------------------------------------------------


// *********************  public modifier example  *******************************
class User2 {
    protected userName2: string;
    public age2: number;

    constructor(userName2: string, age2: number) {
        this.userName2 = userName2;
        this.age2 = age2;
    }

    protected display2(): void {
        console.log(`username2: ${this.userName2}, age2: ${this.age2}`);
    }
}

class Student2 extends User2 {
    studentId2: number;

    constructor(studentId2: number, userName2: string, age2: number) {
        super(userName2, age2);
        this.studentId2 = studentId2;
    }
    display2(): void {
        console.log(`id: ${this.studentId2}, username2:${this.userName2}, age: ${this.age2}`);
    }
}

let user2 = new User2('Emamul', 24)
// user2.userName2; //Error
// user2.display2();
// Error: can't access coz userName2 and display2() is protected but in class or inherit object it is accessible 



// *********************  private modifier example  *******************************
class User3 {
    // private userName3: string;
    public userName3: string;
    public age3: number;

    constructor(userName3: string, age3: number) {
        this.userName3 = userName3;
        this.age3 = age3;
    }

    display3(): void {
        console.log(`username3: ${this.userName3}, age3: ${this.age3}`);
    }
}

class Student3 extends User3 {
    private studentId3: number;

    constructor(studentId3: number, userName3: string, age3: number) {
        super(userName3, age3);
        this.studentId3 = studentId3;
    }
    //(If userName is private)

    // display3(): void {
    //     console.log(
    //         `id3: ${this.studentId3}, username3: ${this.userName3}, age3: ${this.age3}`
    //     );
    // }
    // Error: coz display3 method is private. It's not accessible even extends class

    display3(): void {
        console.log(
            `id3: ${this.studentId3}, username3: ${this.userName3}, age3: ${this.age3}`
        );
    }

    // how to access or modify with private property
    setStudentId3(id3: number): void {
        this.studentId3 = id3
    }


    getStudentId3(): number {
        return this.studentId3
    }
}

// let user3 = new User3 ('Emamul', 24)
// user3.userName3; //Error
// user3.display3();

// Error: can't access coz userName is private. it's not accessible or modify. 

let student3 = new Student3(1201201, "Habib", 20);
student3.setStudentId3(120111);
console.log(student3.getStudentId3());
student3.display3();

