const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros
}

//declaro las variables que se necesitan
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
const form = document.getElementById('formulario');
const btnEnviar = document.getElementById('enviar');

//Eventos
nombre.addEventListener('blur', validarFormulario);
telefono.addEventListener('blur', validarFormulario);
email.addEventListener('blur', validarFormulario);
textarea.addEventListener('blur', validarFormulario);

// Funciones

function validarFormulario(e){
    e.preventDefault();

    if(nombre.value ==='' || nombre.value.length>30){
        mostrarError();
    }

    if (telefono.value === '' || telefono.value == isNaN || telefono.value.length>10){
        mostrarError();
    }

    if(expresiones.email== false){
        mostrarError();
    }
}

function mostrarError (){
    const p = document.createElement('p');
    p.textContent = "Todos los campos son obligatorios";
    p.classList.add ('border','border-danger','border-2', 'p-2','mt-5', 'error');
    //compruebo si existe la clase error
    const claseError = document.querySelectorAll('.error')
    if(claseError.length === 0){
        form.appendChild(p);
    }
}



