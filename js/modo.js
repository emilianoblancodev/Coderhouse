const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //LocalStorage para guardar el modo
    if(document.body.classList.contains('dark')){
        localStorage.setItem('modo-oscuro','true');
    }else{
        localStorage.setItem('modo-oscuro','false');
    }
})

//Me fijo en que modo se encuentra actualmente

if(localStorage.getItem('modo-oscuro') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}