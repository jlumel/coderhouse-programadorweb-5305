let listaAlumnos = [];
let inputNombre = $("#input-nombre");
let inputApellido = $("#input-apellido");
let inputDNI = $("#input-dni");
let inputDNI2 = $("#input-dni2");
let inputEmail = $("#input-email");
let buttonAgregar = $("#agregar-alumno");
let buttonEliminar = $("#eliminar-alumno");
let inputNombre2 = $("#input-nombre2");
let buttonBuscar = $("#btn-buscar");

function habilitarBoton() {
    let deshabilitado
    if (inputNombre.hasClass("is-valid") && inputDNI.hasClass("is-valid") && inputEmail.hasClass("is-valid")) {
        deshabilitado = false;
    } else {
        deshabilitado = true;
    } 
    buttonAgregar.attr("disabled", deshabilitado); 
};

getLocalStorage("listaAlumnos");

inputNombre.blur(function() {
    let valueNombre = $(this).val();
    if (valueNombre.length !== 0) {
        if (isNaN(valueNombre) === true) {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");   
        } else {
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");   
        }
        } else {
            $(this).removeClass("is-valid","is-invalid"); 
    }
    habilitarBoton()
});

inputApellido.blur(function() {
    let valueApellido = $(this).val();
    if (valueApellido.length !== 0) {
        if (isNaN(valueApellido) === true) {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");   
        } else {
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");   
        }
        } else {
            $(this).removeClass("is-valid","is-invalid"); 
    }
});


inputDNI.blur(function() {
    let valueDNI = $(this).val();
    if (valueDNI.length !== 0) {
        if (isNaN(valueDNI) === true || parseInt(valueDNI) === 0 || validarDNI(parseInt(valueDNI)) === true) {
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");   
            } else {
                $(this).removeClass("is-invalid");
                $(this).addClass("is-valid");   
            }
            } else {
                $(this).removeClass("is-valid","is-invalid"); 
        }
    habilitarBoton()
});


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

inputEmail.blur(function() {
    let valueEmail = $(this).val();
    if (valueEmail.length !== 0) {
    if (valueEmail.indexOf("@") !== -1 && valueEmail.indexOf(".") !== -1) {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");   
        } else {
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");   
        }
        } else {
            $(this).removeClass("is-valid","is-invalid"); 
    }
    habilitarBoton()
});

function validarListaAlumnos(alumnoBuscar) {
    
    if (listaAlumnos.length !== 0) {
        for (let i = 0; i < listaAlumnos.length; i++) {
            let alumno = listaAlumnos[i];
            if (alumno.dni === alumnoBuscar.dni) {
                return false
            }
        }
        return true
    }
    return true
};

buttonAgregar.click(function() {
    if (inputNombre.hasClass("is-valid") && inputDNI.hasClass("is-valid") && inputEmail.hasClass("is-valid")) {
        let nuevoAlumno = {
            nombre: inputNombre.val(),
            apellido: inputApellido.val(),
            dni: inputDNI.val(),
            email: inputEmail.val()
        };
        if (validarListaAlumnos(nuevoAlumno) === true) {
        
        listaAlumnos.push(nuevoAlumno);
    
        let bodyTable = $("#bodyTable");
        bodyTable.append('<tr id="' + inputDNI.val() + '"><td>' + inputNombre.val() + '</td><td>' + inputApellido.val() + '</td><td>' + inputDNI.val() + '</td><td>' + inputEmail.val() + '</td></tr>')
            
        stringifiedObj = JSON.stringify(listaAlumnos);
        localStorage.setItem("listaAlumnos",stringifiedObj);

        
        }
    }
        inputNombre.val(null)
        inputApellido.val(null)
        inputDNI.val(null)
        inputEmail.val(null)   
});

inputDNI2.keyup(function() {
    let valueDNI2 = $(this).val();
    let deshabilitado
    if (isNaN(valueDNI2) === true || parseInt(valueDNI2) === 0 || validarDNI(parseInt(valueDNI2)) === false) {
       deshabilitado = true;
    } else {
        deshabilitado = false;
    }
    buttonEliminar.attr("disabled", deshabilitado);
});

buttonEliminar.click(function() {

    for (let i = 0; i < listaAlumnos.length; i++) {
        let alumnoEliminar = listaAlumnos[i];
        if (alumnoEliminar.dni === inputDNI2.val()) {
                
        listaAlumnos.splice(i,1);
                
        if (listaAlumnos.length === 0) {
            localStorage.removeItem("listaAlumnos")
        } else {
            let stringifiedObj = JSON.stringify(listaAlumnos);
            localStorage.setItem("listaAlumnos",stringifiedObj);
            }
    
        $("#" + alumnoEliminar.dni + "").remove();

        }
        } 
    });

function getLocalStorage(key) {
        
    let stringifiedObj = localStorage.getItem(key);
    let parsedObj = JSON.parse(stringifiedObj);

    if (parsedObj !== null) {
            
    for (let i = 0; i < parsedObj.length; i++) {
        let alumno = parsedObj[i];

        let bodyTable = $("#bodyTable");
        bodyTable.append('<tr id="' + alumno.dni + '"><td>' + alumno.nombre + '</td><td>' + alumno.apellido + '</td><td>' + alumno.dni + '</td><td>' + alumno.email + '</td></tr>')

        listaAlumnos.push(alumno);
    };
    };
        console.log(listaAlumnos);
        console.log(localStorage);
};

inputNombre2.keyup(function() {
    let valueNombre = $(this).val()
    let deshabilitado
    if (isNaN(valueNombre) === true && valueNombre.length !== 0) {
        deshabilitado = false;
    } else {
        deshabilitado = true;
    }
    buttonBuscar.attr("disabled", deshabilitado);
});

buttonBuscar.click(function() {
    let col2 = $("#col2")
    $("#busqueda").remove()
        
    for (let i = 0; i < listaAlumnos.length; i++) {
        let alumno = listaAlumnos[i];
        if (alumno.nombre.toLowerCase().indexOf(inputNombre2.val().toLowerCase()) !== -1 || alumno.apellido.toLowerCase().indexOf(inputNombre2.val().toLowerCase()) !== -1) {
        
        col2.append('<div id="busqueda"><h2>' + alumno.nombre + '</h2><h2>' + alumno.apellido + '</h2><p>' + alumno.dni + '</p><p>' + alumno.email + '</p></div>')
        
        };
    }
});