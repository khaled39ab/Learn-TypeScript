console.log("Hello, I'm from TypeScript");

const display = (message: string) =>{
    let sum: number = 20; // for use noUnusedLocals config, it's getting error
    console.log(message + ", "+"I'm from function");
    //if parameter is not use it'll be error for use noUnusedLocals config,
}

display("Hi");