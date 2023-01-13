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
// public modifier example
var User1 = /** @class */ (function () {
    function User1(userName1, age1) {
        this.userName1 = userName1;
        this.age1 = age1;
    }
    User1.prototype.display1 = function () {
        console.log("username1: ".concat(this.userName1, ", age1: ").concat(this.age1));
    };
    return User1;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(studentId1, userName1, age1) {
        var _this = _super.call(this, userName1, age1) || this;
        _this.studentId1 = studentId1;
        return _this;
    }
    Student1.prototype.display1 = function () {
        console.log("username: id: ".concat(this.studentId1, ", ").concat(this.userName1, ", age: ").concat(this.age1));
    };
    return Student1;
}(User1));
var student1 = new Student1(1302020015, "keya", 31);
student1.display1();
var user1 = new User1('Emamul', 24);
user1.display1();
//-------------------------------------------------------
// *********************  public modifier example  *******************************
var User2 = /** @class */ (function () {
    function User2(userName2, age2) {
        this.userName2 = userName2;
        this.age2 = age2;
    }
    User2.prototype.display2 = function () {
        console.log("username2: ".concat(this.userName2, ", age2: ").concat(this.age2));
    };
    return User2;
}());
var Student2 = /** @class */ (function (_super) {
    __extends(Student2, _super);
    function Student2(studentId2, userName2, age2) {
        var _this = _super.call(this, userName2, age2) || this;
        _this.studentId2 = studentId2;
        return _this;
    }
    Student2.prototype.display2 = function () {
        console.log("id: ".concat(this.studentId2, ", username2:").concat(this.userName2, ", age: ").concat(this.age2));
    };
    return Student2;
}(User2));
var user2 = new User2('Emamul', 24);
// user2.userName2; //Error
// user2.display2();
// Error: can't access coz userName2 and display2() is protected but in class or inherit object it is accessible 
// *********************  private modifier example  *******************************
var User3 = /** @class */ (function () {
    function User3(userName3, age3) {
        this.userName3 = userName3;
        this.age3 = age3;
    }
    User3.prototype.display3 = function () {
        console.log("username3: ".concat(this.userName3, ", age3: ").concat(this.age3));
    };
    return User3;
}());
var Student3 = /** @class */ (function (_super) {
    __extends(Student3, _super);
    function Student3(studentId3, userName3, age3) {
        var _this = _super.call(this, userName3, age3) || this;
        _this.studentId3 = studentId3;
        return _this;
    }
    //(If userName is private)
    // display3(): void {
    //     console.log(
    //         `id3: ${this.studentId3}, username3: ${this.userName3}, age3: ${this.age3}`
    //     );
    // }
    // Error: coz display3 method is private. It's not accessible even extends class
    Student3.prototype.display3 = function () {
        console.log("id3: ".concat(this.studentId3, ", username3: ").concat(this.userName3, ", age3: ").concat(this.age3));
    };
    // how to access or modify with private property
    Student3.prototype.setStudentId3 = function (id3) {
        this.studentId3 = id3;
    };
    Student3.prototype.getStudentId3 = function () {
        return this.studentId3;
    };
    return Student3;
}(User3));
// let user3 = new User3 ('Emamul', 24)
// user3.userName3; //Error
// user3.display3();
// Error: can't access coz userName is private. it's not accessible or modify. 
var student3 = new Student3(1201201, "Habib", 20);
student3.setStudentId3(120111);
console.log(student3.getStudentId3());
student3.display3();
