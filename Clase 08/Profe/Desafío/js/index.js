function createStudentNode(student) {
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.id = student.dni;

  let h1 = document.createElement('h1');
  h1.innerHTML = student.firstName + ' ' + student.lastName;
  li.appendChild(h1);

  let h3 = document.createElement('h3');
  h3.innerHTML = 'DNI: ' + student.dni;
  li.appendChild(h3);

  let p = document.createElement('p');
  p.innerHTML = student.email;
  li.appendChild(p);

  return li;
}

let student = {
  firstName: 'Mauro',
  lastName: 'Petrini',
  dni: 356283828,
  email: 'dev.mpetrini@gmail.com'
};

document.getElementById('mainList').appendChild(createStudentNode(student));
