// Muestro la IP del usuario desde una API publica

$(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        $("#ip").prepend("Tu dirección IP es: ", json.ip);
        //console.log("Mi IP publica es: ", json.ip);
      }
    );
  });