var numbers = [2,87,5,7,55,8,11,22,53,87,4];

let nuevoArray;

function crearArray(array,valor) {

for (let i = 0; i < array.length; i++) {
    let nuevoValor = array[i];
    if (nuevoValor % 2 = valor) {
       nuevoArray.push(numbers[i]) 
    }
}

return nuevoArray.join(" ")

}

console.log(crearArray(numbers, 0));

console.log(crearArray(numbers, 1));