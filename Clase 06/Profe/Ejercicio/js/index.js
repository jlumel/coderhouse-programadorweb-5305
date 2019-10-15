function removeNumber(index, numbers) {
  if (!Array.isArray(numbers)) return undefined;
  if (index > numbers.length - 1) return undefined;

  numbers.splice(index, 1);
  return numbers;
}

let numbers = [1, 2, 3, 4, 5];
let newNumbers = removeNumber(3, numbers);

console.log(newNumbers.toString());
