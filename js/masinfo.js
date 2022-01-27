// Muestro el kilometraje oculto con Jquery
$(document).ready(function(){
    $('.info_padre').on('click', '.infolink', function(e){
        e.preventDefault();
        $(this).closest('.info_padre').find('.resultado_info').toggle()
    })
})