// custom type

type Student = { stuName: string, stuId: number };

// let students: object[];
let students: Student[];
students = [];

let student1: Student
student1 = { stuName: 'Alo', stuId: 102 }

students.push(student1)

let student2: Student
student2 = { stuName: 'Ali', stuId: 101 };

students.push(student2);

// console.log(students)


type RequestType = "GET" | "POST";

let getRequest: RequestType;
getRequest = "GET";

let postRequest: RequestType;
postRequest = "POST";

// console.log(getRequest)

function requestHandler(request: RequestType) {
    console.log(request)
}

requestHandler("POST");
requestHandler("GET");