function includesText(textoAComparar, miTexto) {

    if (miTexto.toString().toUpperCase().indexOf(textoAComparar.toString().toUpperCase()) !== -1) {
        return true
    } 
    return false
}

console.log(includesText("Pa", "Patricia"));
console.log(includesText("pa", "Patricia"));
console.log(includesText(1, "Patricia"));