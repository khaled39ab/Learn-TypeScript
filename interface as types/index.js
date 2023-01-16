//-------------- basic typescript ----------------
var users = [];
var user1 = {
    id: 101,
    name: "Alif",
    age: 23
};
var user2 = {
    id: 102,
    name: "Zahid",
    age: 22
};
users.push(user1);
users.push(user2);
var displayUser = function (user) {
    console.log("Id: ".concat(user.id, " Name: ").concat(user.name, " Age: ").concat(user.age));
};
users.forEach(function (user) { return displayUser(user); });
