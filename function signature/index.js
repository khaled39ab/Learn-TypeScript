// function signature
var userInfo; // this function return void
var userInfo1;
var userInfo2; // this function must return string
userInfo = function () {
    console.log("Hello, TypeScript Function Signature");
};
userInfo1 = function (name) {
    console.log("Hello, ".concat(name, " Function Signature 1"));
};
userInfo2 = function (name, subject) {
    return "Hello, ".concat(name, " ").concat(subject, " 2");
};
userInfo();
userInfo1("TypeScript");
console.log(userInfo2("TypeScript", "Function Signature"));
