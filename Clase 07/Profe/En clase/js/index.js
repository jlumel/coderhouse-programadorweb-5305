////sessionStorage
sessionStorage.clear();
sessionStorage.setItem('name', 'Mauro');
sessionStorage.getItem('name');
sessionStorage.removeItem('name');

////localStorage
localStorage.clear();
localStorage.setItem('name', 'Mauro');
localStorage.getItem('name');
localStorage.removeItem('name');

////JSON.stingify
let obj = {
  firstName: 'Mauro',
  lastName: 'Petrini',
  age: 29
};

let stringifyObj = JSON.stringify(obj);
console.log(stringifyObj);

////JSON.parse
console.log(JSON.parse(stringifyObj));
