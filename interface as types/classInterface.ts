// class implements interface
interface UserFormatter {
    formatUser: () => string;
}

export class User implements UserFormatter {
    constructor(private fullName: string, private age: number) { }

    formatUser = () => {
        return `Name: ${this.fullName}, Age: ${this.age}`;
    };
}

let user = new User("Mr. Potato", 32);
// console.log(user);
console.log(user.formatUser());


// -------------  More Example  ----------------------
interface IUser {
    name: string;
}

interface IStudent extends IUser {
    student_id: string;
}

class Student implements IStudent {
    name: string;
    student_id: string;

    constructor(name: string, student_id: string) {
        this.name = name;
        this.student_id = student_id;
    }

    printDetails = () => {
        return `Name: ${this.name}, ID: ${this.student_id}`;
    };
}

const stu1 = new Student("Samsul Islam", "13017");
console.log(stu1.printDetails());