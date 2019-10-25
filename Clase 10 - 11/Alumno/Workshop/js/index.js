let listaAlumnos = [];

let inputNombre = document.getElementById("input-nombre");

let inputApellido = document.getElementById("input-apellido");

let inputDNI = document.getElementById("input-dni");

let inputDNI2 = document.getElementById("input-dni2");

let inputEmail = document.getElementById("input-email");

let buttonAgregar = document.getElementById("agregar-alumno");

let buttonEliminar = document.getElementById("eliminar-alumno");

let inputNombre2 = document.getElementById("input-nombre2")

let buttonBuscar = document.getElementById("btn-buscar");

function validarInputNombre(event) {
    let valueNombre = event.target.value;
    if (typeof valueNombre === "string" && valueNombre.length !== 0) {
        event.target.className = "form-control is-valid";
    } else {
        event.target.className = "form-control is-invalid";
    }
};

function validarInputApellido(event) {
    let valueApellido = event.target.value;
    if (typeof valueApellido === "string" && valueApellido.length !== 0) {
        event.target.className = "form-control is-valid";
    } else {
        event.target.className = "form-control";
    }
};

function validarInputDNI(event) {
    valueDNI = parseInt(event.target.value);
    if (Number.isNaN(valueDNI) == true || valueDNI === 0 || validarDNI(valueDNI) == true) {
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
        if (alumno.dni == dni) {
            return true;
        }
    }
    return false;
};

function validarInputEmail(event) {
    let valueEmail = event.target.value;
    if (valueEmail.indexOf("@") !== -1 && valueEmail.indexOf(".") !== -1) {
        event.target.className = "form-control is-valid";
    } else {
        event.target.className = "form-control is-invalid";
    }
};

function agregarAlumno (event) {
    if (inputNombre.className === "form-control is-valid" && inputDNI.className === "form-control is-valid" && inputEmail.className === "form-control is-valid") {
        let nuevoAlumno = {
            nombre: inputNombre.value,
            apellido: inputApellido.value,
            dni: inputDNI.value,
            email: inputEmail.value
        };
    
        listaAlumnos.push(nuevoAlumno);
    
        let bodyTable = document.getElementById("bodyTable");
        let tr = document.createElement("tr");
        tr.id = inputDNI.value;
    
        let tdNombre = document.createElement("td");
        tdNombre.innerHTML = inputNombre.value;
        tr.appendChild(tdNombre);
    
        let tdApellido = document.createElement("td");
        tdApellido.innerHTML = inputApellido.value;
        tr.appendChild(tdApellido);
    
        let tdDNI = document.createElement("td");
        tdDNI.innerHTML = inputDNI.value;
        tr.appendChild(tdDNI);
    
        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = inputEmail.value;
        tr.appendChild(tdEmail);
    
        bodyTable.appendChild(tr);
    
        stringifiedObj = JSON.stringify(listaAlumnos);
        localStorage.setItem("listaAlumnos",stringifiedObj);

        console.log(listaAlumnos);
        console.log(localStorage);
    }   
};

function eliminarAlumno(event) {
                
        for (let i = 0; i < listaAlumnos.length; i++) {
            let alumnoEliminar = listaAlumnos[i];
            if (alumnoEliminar.dni == inputDNI2.value) {
            
            listaAlumnos.splice(i,1);
            
            let stringifiedObj = JSON.stringify(listaAlumnos);
            localStorage.setItem("listaAlumnos",stringifiedObj);

            document.getElementById("bodyTable").removeChild(document.getElementById(alumnoEliminar.dni));
               } 
            }  
        
        console.log(listaAlumnos); 
        console.log(localStorage);           
    };

function getLocalStorage(key) {
        
        let stringifiedObj = localStorage.getItem(key);
        let parsedObj = JSON.parse(stringifiedObj);

        if (parsedObj !== null) {
            
            for (let i = 0; i < parsedObj.length; i++) {
                let alumno = parsedObj[i];

                let bodyTable = document.getElementById("bodyTable");
                let tr = document.createElement("tr");
                tr.id = alumno.dni;
            
                let tdNombre = document.createElement("td");
                tdNombre.innerHTML = alumno.nombre;
                tr.appendChild(tdNombre);
            
                let tdApellido = document.createElement("td");
                tdApellido.innerHTML = alumno.apellido;
                tr.appendChild(tdApellido);
            
                let tdDNI = document.createElement("td");
                tdDNI.innerHTML = alumno.dni;
                tr.appendChild(tdDNI);
            
                let tdEmail = document.createElement("td");
                tdEmail.innerHTML = alumno.email;
                tr.appendChild(tdEmail);
            
                bodyTable.appendChild(tr);

                listaAlumnos.push(alumno);
            };
        };
        console.log(listaAlumnos);
        console.log(localStorage);
        return;
    };

function buscarAlumno(event) {
    let stringifiedObj = localStorage.getItem("listaAlumnos");
    let parsedObj = JSON.parse(stringifiedObj);
    
    for (let i = 0; i < parsedObj.length; i++) {
        let alumno = parsedObj[i];
        if (alumno.nombre.toLowerCase().indexOf(inputNombre2.value.toLowerCase()) !== -1 || alumno.apellido.toLowerCase().indexOf(inputNombre2.value.toLowerCase()) !== -1) {
            console.log(alumno);
        }
    }
    };

getLocalStorage("listaAlumnos");

inputNombre.onblur = validarInputNombre;

inputApellido.onblur = validarInputApellido;

inputDNI.onblur = validarInputDNI;

inputEmail.onblur = validarInputEmail;

buttonAgregar.onclick = agregarAlumno;

buttonEliminar.onclick = eliminarAlumno;

buttonBuscar.onclick = buscarAlumno;






