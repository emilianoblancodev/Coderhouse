// Muestro el kilometraje oculto con Jquery
$(document).ready(function(){
    $('.infolink').on('click', function(e){
        e.preventDefault();
        $(this).closest('.info_padre').find('.resultado_info').toggle(500);
    })
    
})