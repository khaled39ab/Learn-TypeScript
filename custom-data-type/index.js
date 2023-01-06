// custom type
// let students: object[];
var students;
students = [];
var student1;
student1 = { stuName: 'Alo', stuId: 102 };
students.push(student1);
var student2;
student2 = { stuName: 'Ali', stuId: 101 };
students.push(student2);
var getRequest;
getRequest = "GET";
var postRequest;
postRequest = "POST";
// console.log(getRequest)
function requestHandler(request) {
    console.log(request);
}
requestHandler("POST");
requestHandler("GET");
