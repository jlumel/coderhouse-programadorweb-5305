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
    this.guardar = function(key) {
    let obj = {
      miCuenta: this.numeroCuenta,
      miSaldo: this.saldo
    }
    let stringifiedObj = JSON.stringify(obj)
    localStorage.setItem(key,stringifiedObj)
    }
   };

    let cuenta1 = new CuentaBancaria('Joaquin', 'Lumelsky', 1, 1000);

         
   cuenta1.guardar("1");

   var list = localStorage.getItem("1");
   var parsedObj = JSON.parse(list);
   
   if (parsedObj.miCuenta === cuenta1.numeroCuenta) {
    cuenta1.saldo += parsedObj.miSaldo
    console.log("Saldo inicial: " + cuenta1.saldo)
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
   };

   

      

   