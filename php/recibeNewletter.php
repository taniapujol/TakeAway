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
  echo "E-mail :". $_POST['email'];
  echo "<br>";
}
  /*conexion a la base de datos-> 1r declaramos las variables para la llamada de la data base */
$servername = "localhost";
$username = "root";
$password = "";
$basename = "takeaway";
$connecion = new mysqli($servername, $username, $password, $basename);
/* creamos la variable de recogida del formulario*/
$email = $_POST['email'];
if ($connecion) {
  echo "hay connecion";
  echo "<br>";
  $datos = "INSERT INTO newletter (email) VALUES ('$email');";
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
