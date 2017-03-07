$(document).ready(function() {
  var attempt = 3; // Variable que cuenta el numero de intentos.
  // Debajo de la función Ejecuta al hacer clic en el botón de inicio de sesión.
  $("#enviar").submit(function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Jefe01" && password == "jefe"){
      alert ("Login successfully");
      window.location = "../lacueva/home.html"; // Redirecting to other page.
      return false;
    } else{
      attempt --;// Decrementa la varialbe attempt en 1.
      alert("Te quedan "+attempt+" intentos;");
      // desavileta las filas a los 3 intentos.
      if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
      }
    }
  });
});
