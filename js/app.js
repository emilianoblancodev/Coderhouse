// declaro variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const boton = document.querySelector('#boton');
const kilometros = document.querySelector('#kilometros');

// Para generar el rango de años de los coches que va a comercializar la empresa
const years = document.createElement('option');
const max = new Date().getFullYear();
const min = max - 12; // 12 años de antiguedad como maximo

// Para que me muestre del 2022 al 2011 de manera descendente
for(let i = max; i >  min; i--) {
    const option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

// Datos para la busqueda
const datosBusqueda = {
    marca : '',
    year: '',
    color : '',
    transmision: '',
    minimo: '',
    maximo:'',
    puertas:'',
    kilometros:'',
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

// Event Listeners para el formulario
marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;

    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

year.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


puertas.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value
    // llamar a la función de filtrar Autos
    filtrarAuto();
});

color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value
    // llamar a la función de filtrar Autos
    filtrarAuto();
});

kilometros.addEventListener('input', e => {
    datosBusqueda.kilometros = Number(e.target.value);
    // llamar a la función de filtrar Autos
    filtrarAuto();
});

function limpiarHTML() {
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // limpiar los resultados anteriores
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarAutos(autos){
    limpiarHTML();

    // Mostrar el Resultado
    const contenedor = document.querySelector('#resultado');

    // Construir el HTML de los autos
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
            <img class="img-fluid" src="${auto.imagen}"/ width=800 height=450px>
            <div class="row info_padre">
                <div class="col">
                    <div ><a href="#" class="infolink">Más Info</a></div>
                    <div class="resultado_info">Kilometraje: ${auto.kilometros}</div>
                    <a href="contacto.html"><button type="button" id="boton" class="btn btn-danger">Me interesa</button></a>
                </div>
            </div>
            
        `;
        contenedor.appendChild(autoHTML);
    })
}
function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('Sin Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarAuto() {
   const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor).filter(filtrarKilometros);

//    console.log(resultado);
   if(resultado.length){
        mostrarAutos(resultado);
   } else {
       noResultado();
   }
}


// Aplica los filtros
function filtrarMarca(auto) {
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    } 
    return auto;
}
function filtrarYear(auto) {
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } 
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    } 
    return  auto;
}

function filtrarKilometros(auto){
    if(datosBusqueda.kilometros){
        return auto.kilometros === datosBusqueda.kilometros;
    } 
    return  auto;
}


boton.addEventListener('click', e => {
    console.log("se hizo click");
    
});

