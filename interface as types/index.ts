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

console.log(users);
