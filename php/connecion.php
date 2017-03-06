<?php
/* es la etiqueta que nos marca que estamos creando un documento php.*/
/* para imprimir un documento en pantalla es la etiqueta echo*/
echo "
  <h1> hola, aqui llegará el form </h1>
  ";
/*este condicional nos dira si ha llegado el formulario una vadilación del formulario*/
if ($_POST) {
  echo "LLegan variables por post";
  echo "<br>";
  echo "<br>";
  /*para ver el valor de una variable despues de un post, la sintaxis es $_POST[nom_variable]*/
  echo "Nombre :". $_POST['nombre'];
  echo "<br>";
  echo "E-mail :". $_POST['email'];
  echo "<br>";
  echo "Mensaje :". $_POST['textarea'];
  echo "<br>";
}
/*conexion a la base de datos-> 1r declaramos las variables para la llamada de la data base */
$servername = "localhost";
$username = "root";
$password = "";
$basename = "takeaway";
/* 2n creando connecion y con el if verificamos que existe connecion*/
$connecion = new mysqli($servername, $username, $password, $basename);
mysqli_set_charset($connecion,"utf8");
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['textarea'];
if ($connecion) {
  echo "hay connecion";
  $datos = "INSERT INTO contacform (nombre, Email, mensaje) VALUES ('$nombre', '$email', '$mensaje');";
  $insertarDatos = $connecion->query($datos);
  if ($insertarDatos) {
    echo "Se ha guardado correctamente la informacion";
  }
  else {
    echo "Ha habido un problema con el registro de datos";
  }
  $connecion->close();
}
else {
  echo "No hay connecion";
}

?>
