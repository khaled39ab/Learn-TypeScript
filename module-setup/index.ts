
/* 
let studentId: number = 12123;
let studentName: string = 'Abir';
let studentAge: number = 23; 
*/
import { studentId, studentName, studentAge } from "./Student";

function studentInfo(): void{
    console.log(`Id: ${studentId}, Name: ${studentName}, Age: ${studentAge}`);
}

studentInfo();