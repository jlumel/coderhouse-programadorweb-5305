let listaAlumnos = [];

let inputNombre = document.getElementById("input-nombre");

let inputApellido = document.getElementById("input-apellido");

let inputDNI = document.getElementById("input-dni");

let inputDNI2 = document.getElementById("input-dni2");

let inputEmail = document.getElementById("input-email");

let buttonAgregar = document.getElementById("agregar-alumno");

let buttonEliminar = document.getElementById("eliminar-alumno")

function validarInputNombre(event) {
    let valueNombre = event.target.value;
    if (typeof valueNombre === "string" && valueNombre.length !== 0) {
        event.target.className = "form-control is-valid";
    } else {
        event.target.className = "form-control is-invalid";
    }
};

function validarInputDNI(event) {
    valueDNI = parseInt(event.target.value);
    if (Number.isNaN(valueDNI) || valueDNI === 0 || validarDNI(valueDNI)) {
       event.target.className = "form-control is-invalid"; 
    } else {
       event.target.className = "form-control is-valid";
    }
};

function validarDNI(dni) {
    if (listaAlumnos.length === 0) {
        return false;
    }
    for (let i = 0; i < listaAlumnos.length; i++) {
        let alumno = listaAlumnos[i];
        if (alumno.dni === dni) {
            return true;
        }
    }
    return false;
};

function agregarAlumno (event) {
    let nuevoAlumno = {
        nombre: inputNombre.value,
        dni: inputDNI.value
    };

    listaAlumnos.push(nuevoAlumno);
    console.log(listaAlumnos)

    let bodyTable = document.getElementById("bodyTable");
    let tr = document.createElement("tr");
    tr.id = inputDNI.value;

    let tdNombre = document.createElement("td");
    tdNombre.innerHTML = inputNombre.value;
    tr.appendChild(tdNombre);

    let tdApellido = document.createElement("td");
    tdApellido.innerHTML = "";
    tr.appendChild(tdApellido);

    let tdDNI = document.createElement("td");
    tdDNI.innerHTML = inputDNI.value;
    tr.appendChild(tdDNI);

    let tdEmail = document.createElement("td");
    tdEmail.innerHTML = "";
    tr.appendChild(tdEmail);

    bodyTable.appendChild(tr);
};

function eliminarAlumno(event) {
    alumnoEliminar = document.getElementById(inputDNI.value);
        if (inputDNI2.value === alumnoEliminar.id) {
            document.getElementById("bodyTable").removeChild(alumnoEliminar);
        };

            for (let i = 0; i < listaAlumnos.length; i++) {
                let alumno = listaAlumnos[i];
               if (alumno.dni === inputDNI2.value) {
                listaAlumnos.splice(alumno,1); 
               } 
            }              
    };

inputNombre.onblur = validarInputNombre;

inputDNI.onblur = validarInputDNI;

buttonAgregar.onclick = agregarAlumno;

buttonEliminar.onclick = eliminarAlumno;






