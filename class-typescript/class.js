// typescript class object
// class can have constructor, properties, methods
// create object - let objectName = new className();
// In TypeScript, the class keyword provides a more familiar syntax for generating constructor functions and performing simple inheritance. 
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
var user1 = new User("Saiful Islam", 25);
user1.display();
var user2 = new User("Rakibul Islam", 31);
user2.display();
