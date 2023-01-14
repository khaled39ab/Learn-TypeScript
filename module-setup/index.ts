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

studentInfo()