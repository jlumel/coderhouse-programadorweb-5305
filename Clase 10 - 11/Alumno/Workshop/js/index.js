let listaAlumnos = [];
let inputNombre = document.getElementById("input-nombre");
let inputApellido = document.getElementById("input-apellido");
let inputDNI = document.getElementById("input-dni");
let inputDNI2 = document.getElementById("input-dni2");
let inputEmail = document.getElementById("input-email");
let buttonAgregar = document.getElementById("agregar-alumno");
let buttonEliminar = document.getElementById("eliminar-alumno");
let inputNombre2 = document.getElementById("input-nombre2");
let buttonBuscar = document.getElementById("btn-buscar");

getLocalStorage("listaAlumnos");

inputNombre.onblur =

function(event) {
    let valueNombre = event.target.value;
    if (typeof valueNombre === "string" && valueNombre.length !== 0) {
        event.target.className = "form-control is-valid";
    } else {
        event.target.className = "form-control is-invalid";
    }
};

inputApellido.onblur =

function(event) {
    let valueApellido = event.target.value;
    if (typeof valueApellido === "string" && valueApellido.length !== 0) {
        event.target.className = "form-control is-valid";
    } else {
        event.target.className = "form-control";
    }
};

inputDNI.onblur =

function(event) {
    let valueDNI = parseInt(event.target.value);
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
        if (alumno.dni === dni.toString()) {
            return true;
        }
    }
    return false;
};

inputEmail.onblur =

function(event) {
    let valueEmail = event.target.value;
    if (valueEmail.indexOf("@") !== -1 && valueEmail.indexOf(".") !== -1) {
        event.target.className = "form-control is-valid";
    } else {
        event.target.className = "form-control is-invalid";
    }
};

function validarLocalStorage(key,alumnoBuscar) {
    
    let stringifiedObj = localStorage.getItem(key,listaAlumnos);
    let parsedObj = JSON.parse(stringifiedObj);

    if (parsedObj !== null) {
        for (let i = 0; i < parsedObj.length; i++) {
            let alumno = parsedObj[i];
            if (alumno == alumnoBuscar) {
                return false
            }
        }
        return true
    }
    return true
}

buttonAgregar.onblur=

function(event) {
    if (inputNombre.className !== "form-control is-valid" || inputDNI.className !== "form-control is-valid" || inputEmail.className !== "form-control is-valid") {
       event.target.className = "btn btn-outline-primary btn-block disabled" 
    } else {
        event.target.className = "btn btn-outline-primary btn-block"
    }
}

buttonAgregar.onclick =

function(event) {
    if (inputNombre.className === "form-control is-valid" && inputDNI.className === "form-control is-valid" && inputEmail.className === "form-control is-valid") {
        let nuevoAlumno = {
            nombre: inputNombre.value,
            apellido: inputApellido.value,
            dni: inputDNI.value,
            email: inputEmail.value
        };
        if (validarLocalStorage("listaAlumnos",nuevoAlumno) == true) {
        
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
    }   
};

buttonEliminar.onclick =

function(event) {

    for (let i = 0; i < listaAlumnos.length; i++) {
        let alumnoEliminar = listaAlumnos[i];
        if (alumnoEliminar.dni == inputDNI2.value) {
                
        listaAlumnos.splice(i,1);
        
        if (listaAlumnos === []) {
            localStorage.removeItem("listaAlumnos")
        } else {
            let stringifiedObj = JSON.stringify(listaAlumnos);
            localStorage.setItem("listaAlumnos",stringifiedObj);
            }
    
        let bodyTable = document.getElementById("bodyTable")
        let col2 = document.getElementById("col2")
    
            bodyTable.removeChild(document.getElementById(alumnoEliminar.dni));
            col2.removeChild(document.getElementById(alumnoEliminar.nombre));
            col2.removeChild(document.getElementById(alumnoEliminar.apellido));
            col2.removeChild(document.getElementById(alumnoEliminar.dni));
            col2.removeChild(document.getElementById(alumnoEliminar.email));
            } 
        }  
            console.log(alumnoEliminar)
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
};

buttonBuscar.onclick =

function(event) {
       
    for (let i = 0; i < listaAlumnos.length; i++) {
        let alumno = listaAlumnos[i];
        if (alumno.nombre.toLowerCase().indexOf(inputNombre2.value.toLowerCase()) !== -1 || alumno.apellido.toLowerCase().indexOf(inputNombre2.value.toLowerCase()) !== -1) {
            
            let col2 = document.getElementById("col2");
            let nombre = document.createElement("h2");
            nombre.id = alumno.dni;
            nombre.innerHTML = alumno.nombre;
            let apellido = document.createElement("h2");
            apellido.id = alumno.apellido;
            apellido.innerHTML = alumno.apellido;
            let dni = document.createElement("p");
            dni.id = alumno.dni;
            dni.innerHTML = "DNI:" + " " + alumno.dni;
            let email = document.createElement("p");
            email.id = alumno.email;
            email.innerHTML = "Email:" + " " + alumno.email;

            col2.appendChild(nombre);
            col2.appendChild(apellido);
            col2.appendChild(dni);
            col2.appendChild(email);
        };
    }
};