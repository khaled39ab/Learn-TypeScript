// enum -> help to store constants in typescript and store no duplicate data
/*
enum are 3 type.
1- numeric enum
2- string enum
3- Heterogeneous enum
*/
//numeric enum 
var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 4] = "readData";
    requestType[requestType["getData"] = 5] = "getData";
    requestType[requestType["deleteData"] = 6] = "deleteData";
})(requestType || (requestType = {}));
// console.log(requestType)
// console.log(requestType.getData)
// string enum
var requestType2;
(function (requestType2) {
    requestType2["readData"] = "READ_DATA";
    requestType2["deleteData"] = "DELETE_DATA";
})(requestType2 || (requestType2 = {}));
// console.log(requestType2);
// console.log(requestType2.deleteData);
// console.log(requestType2['readData']);
// Heterogeneous enum
var requestType3;
(function (requestType3) {
    requestType3["readData"] = "READ_DATA";
    requestType3["deleteData"] = "DELETE_DATA";
    requestType3[requestType3["id"] = 1001] = "id";
})(requestType3 || (requestType3 = {}));
console.log(requestType3);
console.log(requestType3.id);
