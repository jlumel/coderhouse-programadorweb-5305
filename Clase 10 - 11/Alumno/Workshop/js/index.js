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

inputNombre.oninput =

function(event) {
    let valueNombre = event.target.value;
    if (valueNombre.length !== 0) {
        if (typeof valueNombre === "string") {
        event.target.className = "form-control is-valid";   
        } else {
        event.target.className = "form-control is-invalid";  
        }
        } else {
        event.target.className = "form-control";  
    }
    if (inputNombre.className === "form-control is-valid" && inputDNI.className === "form-control is-valid" && inputEmail.className === "form-control is-valid") {
        buttonAgregar.disabled = false;
    } else {
        buttonAgregar.disabled = true;
    }
};

inputApellido.oninput =

function(event) {
    let valueApellido = event.target.value;
    if (typeof valueApellido === "string" && valueApellido.length !== 0) {
        event.target.className = "form-control is-valid";
    } else {
        event.target.className = "form-control";
    }
};

inputDNI.oninput =

function(event) {
    let valueDNI = parseInt(event.target.value);
    if (event.target.value.length !== 0) {
        if (Number.isNaN(valueDNI) === true || valueDNI === 0 || validarDNI(valueDNI) == true) {
        event.target.className = "form-control is-invalid";  
        } else {
        event.target.className = "form-control is-valid";   
        }
        } else {
        event.target.className = "form-control";
    }
    if (inputNombre.className === "form-control is-valid" && inputDNI.className === "form-control is-valid" && inputEmail.className === "form-control is-valid") {
        buttonAgregar.disabled = false;
    } else {
        buttonAgregar.disabled = true;
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

inputEmail.oninput =

function(event) {
    let valueEmail = event.target.value;
    if (valueEmail.length !== 0) {
    if (valueEmail.indexOf("@") !== -1 && valueEmail.indexOf(".") !== -1) {
        event.target.className = "form-control is-valid";
    } else {
        event.target.className = "form-control is-invalid";
    }    
    } else {
        event.target.className = "form-control";  
    }
    
    if (inputNombre.className === "form-control is-valid" && inputDNI.className === "form-control is-valid" && inputEmail.className === "form-control is-valid") {
        buttonAgregar.disabled = false;
    } else {
        buttonAgregar.disabled = true;
    }
};

function validarLocalStorage(key,alumnoBuscar) {
    
    let stringifiedObj = localStorage.getItem(key,listaAlumnos);
    let parsedObj = JSON.parse(stringifiedObj);

    if (parsedObj !== null) {
        for (let i = 0; i < parsedObj.length; i++) {
            let alumno = parsedObj[i];
            if (alumno.dni === alumnoBuscar.dni) {
                return false
            }
        }
        return true
    }
    return true
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
        if (validarLocalStorage("listaAlumnos",nuevoAlumno) === true) {
        
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
        }
    }   
};

inputDNI2.oninput =

function(event) {
    let valueDNI = parseInt(event.target.value);
    if (Number.isNaN(valueDNI) === true || valueDNI === 0 || validarDNI(valueDNI) == false) {
       buttonEliminar.disabled = true
    } else {
        buttonEliminar.disabled = false
    }
}

buttonEliminar.onclick =

function(event) {

    for (let i = 0; i < listaAlumnos.length; i++) {
        let alumnoEliminar = listaAlumnos[i];
        if (alumnoEliminar.dni == inputDNI2.value) {
                
        listaAlumnos.splice(i,1);
                
        if (listaAlumnos.length === 0) {
            localStorage.removeItem("listaAlumnos")
        } else {
            let stringifiedObj = JSON.stringify(listaAlumnos);
            localStorage.setItem("listaAlumnos",stringifiedObj);
            }
    
        let bodyTable = document.getElementById("bodyTable");
        let col2 = document.getElementById("col2");
        let table = document.getElementById("table");
    
        bodyTable.removeChild(document.getElementById(alumnoEliminar.dni));
            
        if (table !== null) {
            col2.removeChild(table); 
        }
        } 
    }          
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

inputNombre2.oninput =

function(event) {
    if (typeof event.target.value === "string" && event.target.value.length !== 0) {
       buttonBuscar.disabled = false
    } else {
        buttonBuscar.disabled = true
    }
}

buttonBuscar.onclick =

function(event) {
    let col2 = document.getElementById("col2")
    let tableValidar = document.getElementById("table")
            if (tableValidar !== null) {
                col2.removeChild(tableValidar); 
            }
    for (let i = 0; i < listaAlumnos.length; i++) {
        let alumno = listaAlumnos[i];
        if (alumno.nombre.toLowerCase().indexOf(inputNombre2.value.toLowerCase()) !== -1 || alumno.apellido.toLowerCase().indexOf(inputNombre2.value.toLowerCase()) !== -1) {
            
            let table = document.createElement("table");
            table.id = "table";
            let nombre = document.createElement("h2");
            nombre.innerHTML = alumno.nombre;
            let apellido = document.createElement("h2");
            apellido.innerHTML = alumno.apellido;
            let dni = document.createElement("p");
            dni.innerHTML = "DNI:" + " " + alumno.dni;
            let email = document.createElement("p");
            email.innerHTML = "Email:" + " " + alumno.email;

            table.appendChild(nombre);
            table.appendChild(apellido);
            table.appendChild(dni);
            table.appendChild(email);
            col2.appendChild(table);
        };
    }
};