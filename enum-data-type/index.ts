// enum -> help to store constants in typescript and store no duplicate data

/*  
enum are 3 type. 
1- numeric enum 
2- string enum
3- Heterogeneous enum
*/


//numeric enum 

enum requestType {
    readData = 4,
    getData,
    deleteData
}

// console.log(requestType)
// console.log(requestType.getData)


// string enum
enum requestType2 {
    readData = 'READ_DATA',
    deleteData = 'DELETE_DATA'
}

// console.log(requestType2);
// console.log(requestType2.deleteData);
// console.log(requestType2['readData']);


// Heterogeneous enum
enum requestType3 {
    readData = 'READ_DATA',
    deleteData = 'DELETE_DATA',
    id = 1001
}

console.log(requestType3);
console.log(requestType3.id);