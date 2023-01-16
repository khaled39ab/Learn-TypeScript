//-------------- basic typescript ----------------

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
