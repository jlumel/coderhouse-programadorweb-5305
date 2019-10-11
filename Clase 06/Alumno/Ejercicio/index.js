var numbers = [1,2,3,4,5]

function deleteElement(arrayPosition, miArray) {
    if (Array.isArray(miArray) == true && miArray.indexOf(arrayPosition) !== -1) {
        let miArrayCopy1 = miArray.slice()

        miArrayCopy1.splice(arrayPosition, 1)
                
        return miArrayCopy1 
    } 
        return undefined
          
}

console.log(deleteElement(2, numbers));

