const url = "https://api64.ipify.org?format=json"

$(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        $("#ip").prepend("Tu direccion IP es: ", json.ip);
        //console.log("My IP publica es: ", json.ip);
      }
    );
  });