// enum -> help to store constants in typescript and no duplicate data
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
console.log(requestType);
