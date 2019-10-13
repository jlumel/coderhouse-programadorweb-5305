var numbers = [2,87,5,7,55,8,11,22,53,87,4];

let arrayPar = [];
let arrayImpar = [];

function crearArray(array,valor,miArray) {

for (let i = 0; i < array.length; i++) {
    let nuevoValor = array[i];
    if (nuevoValor % 2 === valor) {
       miArray.push(numbers[i]) 
    }
}

return miArray.join(" ")

}

console.log(crearArray(numbers, 0,arrayPar));

console.log(crearArray(numbers, 1,arrayImpar));