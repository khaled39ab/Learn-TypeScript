/* 
let studentId: number = 12123;
let studentName: string = 'Abir';
let studentAge: number = 23; 
*/
// import { studentId, studentName, studentAge, studentInfo } from "./Student";

/* 
function studentInfo(): void{
    console.log(`Id: ${studentId}, Name: ${studentName}, Age: ${studentAge}`);
}
*/

// studentInfo();


// import { studentId as id, studentName as name, studentAge as age, studentInfo as info} from "./Student";
// info();


import * as Student from './Student'
function studentInfo(): void {
    console.log(`Id: ${Student.studentId}, Name: ${Student.studentName}, Age: ${Student.studentAge}`);
}

studentInfo();

//--------------------------------------------------------

import {User} from './Student';

class Student1 extends User {
    studentId1: number;

    constructor(userId: number, userName: string, userAge: number) {
        super(userName, userAge);
        this.studentId1 = userId;
    }
    display(): void {
        console.log(
            `username: id: ${this.studentId1}, ${this.userName}, age: ${this.userAge}`
        );
    }
}

let student1 = new Student1( 1302020015, "keya", 31,);
student1.display();

let student2 = new Student1(123423423, "Aziz", 28);
student2.display();

let user1 = new User ('Emamul', 24)
user1.display();

let user2 = new User("Labib", 19);
user2.display();