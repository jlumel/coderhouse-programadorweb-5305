function Student() {
  id = Math.ceil(Math.random() * 20);
  this.firstName = '';
  this.lastName = '';
  this.dni = 0;
  this.email = '';

  this.getId = function() {
    return id;
  };

  this.getFullName = function() {
    if (this.firstName !== undefined && this.lastName !== undefined) {
      return this.firstName + ' ' + this.lastName;
    }

    return undefined;
  };
}

var student = new Student();
student.firstName = 'Juan';
student.lastName = 'Perez';
student.dni = 36819584;
student.email = 'dev.mpetrini@gmail.com';

console.log('ID:' + student.getId() + ' - ' + student.getFullName());
