var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 0] = "readData";
    requestType[requestType["getData"] = 1] = "getData";
})(requestType || (requestType = {}));
console.log(requestType);
