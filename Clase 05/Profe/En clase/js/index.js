////Objetos
// function People() {
// }

// var people = new People();

//--------------------- °°°°° ---------------------

////Función constructora y new

// function User(name) {

// }

// var user1 = new User('Mauro');
// var user2 = new User('Mauro');
// var user3 = new User('Pedro');

// console.log(user1 === user2);
// console.log(user1 === user3);

////Propiedades de un objeto

////Privadas
// function User(name) {
//     var modified  = false;
//     console.log('Hola mi nombre es', name);
// }

// var user = new User('Mauro');
// console.log(user.modified);
// console.log(user.name);
// user.name = 'Pato';
// console.log(user.name);

////Publicas
// function User(name) {
//     this.firstName = name;
//     this.age = 45;
// }

// var user = new User('Mauro');
// console.log(user.name);
// console.log(user.firstName);
// console.log(user.age);
// user.firstName = 'Pato';
// console.log(user.firstName);

////Metodos de un objeto

////Privados
// function User(name) {
//     this.age = 45;
//     function showInfo() {
//         console.log('Hola mi nombre es', name, ' y mi edad es ', this.age);
//     }

//     function addYear() {
//         this.age = this.age + 1;
//     }

//     showInfo();
//     addYear(); //Esta funcion no cambia la propiedad age porque se llama al crear el objeto
// }

// var user = new User('Mauro');
// console.log(user.age);
// user.addYear(); //error is not a function

////Publicos
// function User(name) {
//   this.age = 45;

//   this.showInfo = function() {
//       console.log('Hola mi nombre es ', name, ' y mi edad es ', this.age);
//   };

//   this.addYear = function() {
//       this.age += 1;
//   }
// }

// var user = new User('Mauro');
// console.log(user.age);
// user.addYear();
// user.showInfo();
