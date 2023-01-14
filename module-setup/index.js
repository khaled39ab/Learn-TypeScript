"use strict";
/*
let studentId: number = 12123;
let studentName: string = 'Abir';
let studentAge: number = 23;
*/
// import { studentId, studentName, studentAge, studentInfo } from "./Student";
exports.__esModule = true;
/*
function studentInfo(): void{
    console.log(`Id: ${studentId}, Name: ${studentName}, Age: ${studentAge}`);
}
*/
// studentInfo();
// import { studentId as id, studentName as name, studentAge as age, studentInfo as info} from "./Student";
// info();
var Student = require("./Student");
function studentInfo() {
    console.log("Id: ".concat(Student.studentId, ", Name: ").concat(Student.studentName, ", Age: ").concat(Student.studentAge));
}
studentInfo();
