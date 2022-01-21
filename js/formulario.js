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
    if(e.target.value.length = 0){
        e.target.classList.add('error');
        
    }
    mostrarError();
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



