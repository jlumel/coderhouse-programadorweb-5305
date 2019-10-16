var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS'];

function setLocalList(key,list) {
    if (typeof key === "string" && Array.isArray(list) == true) {
        var stringifiedtestList = JSON.stringify(list)
        localStorage.setItem(key,stringifiedtestList)
        console.log(localStorage)
    }
    return;
}

setLocalList('studentsList', testList);