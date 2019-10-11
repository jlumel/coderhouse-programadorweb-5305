var cars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
];

function Car(model, brand, year) {
  let id = Math.random();
  this.model = model;
  this.brand = brand;
  this.year = year;

  this.getCarName = function() {
    return this.model + ' ' + this.brand + ' ' + this.year;
  };
}

let car = new Car('Audi TT', 'Audi', 2017);
console.log(car.getCarName());
