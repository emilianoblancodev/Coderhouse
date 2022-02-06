// const expresiones = {
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	telefono: /^\d{7,14}$/ // 7 a 14 numeros
// }

//declaro las variables que se necesitan
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
const form = document.getElementById('formulario');
const btnEnviar = document.getElementById('enviar');

//Eventos
nombre.addEventListener('change', validarFormulario);
telefono.addEventListener('change', validarFormulario);
email.addEventListener('change', validarFormulario);
textarea.addEventListener('change', validarFormulario);
form.addEventListener('submit', mostrarEnviado);

// Funciones

function validarFormulario(e){
    e.preventDefault();

    if(nombre.value ==='' || nombre.value.length>25){
        mostrarError();
    }

    if (telefono.value ==='' || telefono.value == isNaN || telefono.value.length>10){
        mostrarError();
    }

    if(expresiones.correo == false){
        mostrarError();
    }

}

function mostrarError (){
    const p = document.createElement('p');
    p.textContent = "Todos los campos son obligatorios";
    p.classList.add ('border','border-danger','border-2', 'p-2','mt-5', 'error');
        setTimeout(() => {
            p.remove();
        }, 3000);
    //compruebo si existe la clase error
    const claseError = document.querySelector('.error')
    if(claseError.length === 0){
        form.appendChild(p);
    }
}

function mostrarEnviado (){
    const pok = document.createElement('p');
    pok.textContent = "Formulario enviado correctamente";
    pok.classList.add ('border','border-success','border-2', 'p-2','mt-5', 'enviado');
        setTimeout(() => {
            pok.remove();
        }, 3000);

    //compruebo si existe la clase enviado
    const claseEnviado = document.querySelectorAll('.enviado')
    if(claseEnviado.length === 0){
        form.appendChild(p);
    }
}



