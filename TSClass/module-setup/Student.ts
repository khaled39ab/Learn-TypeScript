export let studentId: number = 12123;
export let studentName: string = 'Abir';
export let studentAge: number = 23;

export function studentInfo(): void {
    console.log(`Id: ${studentId}, Name: ${studentName}, Age: ${studentAge}`);
}

export class User {
    userName: string;
    userAge: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.userAge = age;
    }

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.userAge}`);
    }
}