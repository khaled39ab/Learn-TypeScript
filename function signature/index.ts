// function signature

let userInfo: () => void; // this function return void
let userInfo1: (name: string) => void;
let userInfo2: (name: string, subject: string) => string; // this function must return string

userInfo = () => {
    console.log("Hello, TypeScript Function Signature");
}

userInfo1 = (name: string) => {
    console.log(`Hello, ${name} Function Signature 1`);
}

userInfo2 = (name: string, subject: string) => {
    return`Hello, ${name} ${subject} 2`;
}

userInfo();
userInfo1("TypeScript");
console.log(userInfo2("TypeScript", "Function Signature"));