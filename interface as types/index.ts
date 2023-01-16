//-------------- typescript without interface ----------------

/* 

let users: {
    id: number,
    name: string,
    age: number
}[] = [];

let user1: {
    id: number,
    name: string,
    age: number
} = {
    id: 101,
    name: "Alif",
    age: 23
}

let user2: {
    id: number,
    name: string,
    age: number
} = {
    id: 102,
    name: "Zahid",
    age: 22
}

users.push(user1);
users.push(user2);

const displayUser = (user: { id: number, name: string, age: number }) => {
    console.log(`Id: ${user.id} Name: ${user.name} Age: ${user.age}`);
}

users.forEach(user => displayUser(user))

*/

// -------------------   with interface as types -------------------

interface IUser {  // "I" for interface as mark. not mandatory  
    id: number,
    name: string,
    age: number
}

let users: IUser[] = [];

let user1: IUser = {
    id: 101,
    name: "Alif",
    age: 23
}

let user2: IUser = {
    id: 102,
    name: "Zahid",
    age: 22
}

users.push(user1);
users.push(user2);

const displayUser = (user: IUser) => {
    console.log(`Id: ${user.id} Name: ${user.name} Age: ${user.age}`);
}

users.forEach(user => displayUser(user));
