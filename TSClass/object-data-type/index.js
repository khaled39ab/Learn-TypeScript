// ---------object Type: can store value as key value pair-----------
var user;
user = { name: 'amin' };
// let users: object[];
// users = [
//     {name: 'Alom', id: 103},
//     {name: 'Atik', id: 104},
// ]
var users;
users = [];
var user1;
user1 = { name: 'Alom', id: 102 };
users.push(user1);
console.log(users);
var user2;
user2 = { name: 'Salim', id: 101 };
users.push(user2);
console.log(users);
for (var key in users) {
    console.log(users[key]['name']);
}
