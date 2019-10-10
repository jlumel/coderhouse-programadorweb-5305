// var cars = [
//     {
//       model:'Suran',
//       brand: 'volkswagen',
//       year: 2015
//     },
//     {
//       model:`Audi TT`,
//       brand:'Audi',
//       year: 2017
//     },
//     {
//       model:`Gran turismo`,
//       brand:'Maserati',
//       year: 2018
//     }
//   ]

function Car(model, brand, year, id) {
    this.model = model
    this.brand = brand
    this.year = year
    id = Math.random()

    this.getCarName = function () {
        console.log("El modelo del auto es " + model + ", la marca es " + brand + " y el año es " + year)
    }
}

let car1 = new Car("Suran","Volskwagen",2015);
car1.getCarName()

let car2 = new Car("Audi TT","Audi",2017);
car2.getCarName()

let car3 = new Car("Gran turismo","Maserati",2018);
car3.getCarName()


