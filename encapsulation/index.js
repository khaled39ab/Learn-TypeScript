// 4 key principles of Object Oriented Programming (OOP): Inheritance, Abstraction, Encapsulation, Polymorphism.Encapsulation helps us to manage the visibility of class members.
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
// *********************  public modifier example  *******************************
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentId, userName, age) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("username: id: ".concat(this.studentId, ", ").concat(this.userName, ", age: ").concat(this.age));
    };
    return Student;
}(User));
var user1 = new User('Emamul', 24);
// user1.userName; //Error
// user1.display();
// Error: can't access coz userName is protected but in class or inherit object it is accessible 
