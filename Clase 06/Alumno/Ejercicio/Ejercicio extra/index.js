// Crear un objeto llamado CuentaBancaria
// El objeto deberá tener las siguientes propiedades publicas
// nombreTitular
// apellidoTitular
// numeroCuenta
// movimientos (es un array donde deberán ir agregando los montos de las operaciones de crédito y debito)
// saldo
// Ademas, deberá tener los siguientes métodos públicos
// nombreCompleto() (Deberá imprimir en consola el nombreTitular + apellidoTitular
// debito(monto) (Deberá restar el monto a su saldo actual, si la cuenta da menos o igual a cero deberá imprimir en consola que no se puede hacer el debito por saldo insuficiente)
// credito(monto) (Deberá sumar el monto a su saldo actual)
// mostrarSaldo() (Deberá imprimir en consola el saldo actual)
// Deberán crear al menos 2 cuentas bancarias distintas y hacer distintas operaciones de creditos/debitos

// let misMovimientos1 = [];
// let misMovimientos2 = [];

// function CuentaBancaria (nombreTitular,apellidoTitular,numeroCuenta,movimientos,saldo) {
//     this.nombreTitular
//     this.apellidoTitular
//     this.numeroCuenta
//     this.movimientos
//     this.saldo

//     this.nombreCompleto = function() {
//         console.log(nombreTitular + " " + apellidoTitular)
//     }
//     this.debito = function(monto) {
//         if (saldo + monto > 0) {
//             saldo = saldo + monto
//             movimientos.push(monto)
//             console.log(movimientos)
//         } else {
//             console.log ("No se puede realizar el debito por saldo insuficiente") 
//     }
// }
//     this.credito = function(monto) {
//         saldo = saldo + monto
//         movimientos.push(monto)
//         console.log(movimientos)
//     }
//     this.mostrarSaldo = function() {
//         console.log(saldo)
//     }
// }

// let cuenta1 = new CuentaBancaria ("Joaquin","Lumelsky",1,misMovimientos1,1000)

// let cuenta2 = new CuentaBancaria ("Jose","Rodriguez",2,misMovimientos2,300)

// cuenta1.nombreCompleto()
// cuenta1.debito(-100)
// cuenta1.mostrarSaldo()
// cuenta1.credito(200)
// cuenta1.mostrarSaldo()
// cuenta1.debito(-500)
// cuenta1.mostrarSaldo()
// cuenta1.debito(-2000)
// cuenta1.mostrarSaldo()

// cuenta2.nombreCompleto()
// cuenta2.debito(-500)
// cuenta2.mostrarSaldo()
// cuenta2.credito(200)
// cuenta2.mostrarSaldo()
// cuenta2.debito(-500)
// cuenta2.mostrarSaldo()
// cuenta2.credito(200)
// cuenta2.mostrarSaldo()
// cuenta2.debito(-500)
// cuenta2.mostrarSaldo()

function CuentaBancaria(nombreTitular, apellidoTitular, numeroCuenta, saldo) {
    this.nombreTitular = nombreTitular;
    this.apellidoTitular = apellidoTitular;
    this.numeroCuenta = numeroCuenta;
    this.saldo = saldo;
    this.movimientos = [];
    this.nombreCompleto = function() {
      console.log(this.nombreTitular + ' ' + this.apellidoTitular);
    };
    this.debito = function(monto) {
      if (this.saldo - monto < 0) {
        console.log('No se puede realizar el debito por saldo insuficiente');
        return;
      }
      this.movimientos.push(monto);
      this.saldo -= monto;
    };
    this.credito = function(monto) {
      this.saldo += monto;
      this.movimientos.push(monto);
    };
    this.mostrarSaldo = function() {
      console.log(this.saldo);
    };
    this.mostrarMovimientos = function() {
      console.log(this.movimientos);
    };
   }
   let cuenta1 = new CuentaBancaria('Joaquin', 'Lumelsky', 1, 1000);
   console.log('Arranca con saldo de 1000');
   cuenta1.nombreCompleto();
   cuenta1.debito(100);
   cuenta1.mostrarSaldo();
   cuenta1.credito(200);
   cuenta1.mostrarSaldo();
   cuenta1.debito(500);
   cuenta1.mostrarSaldo();
   cuenta1.debito(2000);
   cuenta1.mostrarSaldo();
   cuenta1.mostrarMovimientos();
   let cuenta2 = new CuentaBancaria('Jose', 'Rodriguez', 2, 300);
   // cuenta2.nombreCompleto();
   // cuenta2.debito(500);
   // cuenta2.mostrarSaldo();
   // cuenta2.credito(200);
   // cuenta2.mostrarSaldo();
   // cuenta2.debito(500);
   // cuenta2.mostrarSaldo();
   // cuenta2.credito(200);
   // cuenta2.mostrarSaldo();
   // cuenta2.debito(500);
   // cuenta2.mostrarSaldo();