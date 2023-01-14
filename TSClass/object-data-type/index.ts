// ---------object Type: can store value as key value pair-----------

let user: object;
user = { name: 'amin' };

// let users: object[];
// users = [
//     {name: 'Alom', id: 103},
//     {name: 'Atik', id: 104},
// ]

let users: object[];
users = [];

let user1: { name: string, id: number }
user1 = { name: 'Alom', id: 102 }

users.push(user1)
console.log(users)

let user2: { name: string, id: number }
user2 = { name: 'Salim', id: 101 };

users.push(user2);
console.log(users);

for (const key in users) {
    console.log(users[key]['name'])
}