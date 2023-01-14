"use strict";
exports.__esModule = true;
exports.User = exports.studentInfo = exports.studentAge = exports.studentName = exports.studentId = void 0;
exports.studentId = 12123;
exports.studentName = 'Abir';
exports.studentAge = 23;
function studentInfo() {
    console.log("Id: ".concat(exports.studentId, ", Name: ").concat(exports.studentName, ", Age: ").concat(exports.studentAge));
}
exports.studentInfo = studentInfo;
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.userAge = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.userAge));
    };
    return User;
}());
exports.User = User;
