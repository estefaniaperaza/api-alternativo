function guardarDatos() {
    let mis_datos = {
        inputEmail: document.getElementById("inputEmail").value,
        inputPassword: document.getElementById("inputPassword").value
    };

    let mis_datos_json = JSON.stringify(mis_datos);

    localStorage.setItem("mis_datos", mis_datos_json);
        
}


document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("button").addEventListener("click", function() {
        let inputEmail = document.getElementById("inputEmail");
        let inputPassword = document.getElementById("inputPassword");
        let camposCompletos = true;

        if (inputEmail.value === '') {
            inputEmail.classList.add("invalid");
            camposCompletos = false;
            alert("Debe ingresar su Email");
        } else {
            inputEmail.classList.remove("invalid")
        }
        if (inputPassword.value === '') {
            inputPassword.classList.add("invalid");
            camposCompletos = false;
            alert("Debe escribir una contraseña");
        } else {
            inputPassword.classList.remove("invalid")
        }
        if (camposCompletos) {
            window.location = "index.html";
        }
    }
    )

});

