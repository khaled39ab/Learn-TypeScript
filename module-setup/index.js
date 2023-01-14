"use strict";
/*
let studentId: number = 12123;
let studentName: string = 'Abir';
let studentAge: number = 23;
*/
// import { studentId, studentName, studentAge, studentInfo } from "./Student";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//--------------------------------------------------------
var Student_1 = require("./Student");
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(userId, userName, userAge) {
        var _this = _super.call(this, userName, userAge) || this;
        _this.studentId1 = userId;
        return _this;
    }
    Student1.prototype.display = function () {
        console.log("username: id: ".concat(this.studentId1, ", ").concat(this.userName, ", age: ").concat(this.userAge));
    };
    return Student1;
}(Student_1.User));
var student1 = new Student1(1302020015, "keya", 31);
student1.display();
var student2 = new Student1(123423423, "Aziz", 28);
student2.display();
var user1 = new Student_1.User('Emamul', 24);
user1.display();
var user2 = new Student_1.User("Labib", 19);
user2.display();
