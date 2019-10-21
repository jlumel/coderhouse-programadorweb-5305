var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS'];

function setLocalList(key,list) {
    if (localStorage.getItem(key) !== null) {
        console.log("Ya existe");
        return;  
    }
    if (typeof key === "string" && Array.isArray(list) == true) {
        var stringifiedObj = JSON.stringify(list);
        localStorage.setItem(key,stringifiedObj);
        console.log(localStorage);
}  
}

setLocalList('studentsList', testList);

setLocalList('studentsList', testList);

function getLocalList(key) {
    if (typeof key === "string") {
        var list = localStorage.getItem(key);
        var parsedObj = JSON.parse(list);
        console.log(parsedObj);
        return;
    }
    let arrayVacio = [];
    console.log(arrayVacio);
}

getLocalList('studentsList');