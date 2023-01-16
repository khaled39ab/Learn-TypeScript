"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formatUser = function () {
            return "Name: ".concat(_this.fullName, ", Age: ").concat(_this.age);
        };
    }
    return User;
}());
exports.User = User;
var user = new User("Mr. Potato", 32);
var Student = /** @class */ (function () {
    function Student(name, student_id) {
        var _this = this;
        this.printDetails = function () {
            return "Name: ".concat(_this.name, ", ID: ").concat(_this.student_id);
        };
        this.name = name;
        this.student_id = student_id;
    }
    return Student;
}());
var stu1 = new Student("Samsul Islam", "13017");
// console.log(stu1.printDetails());
