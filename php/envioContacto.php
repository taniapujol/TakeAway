<?php
if ($_SERVER['REQUEST_METHOD']==='POST'){
  $request = file_get_contents('php://input');
  $datos = json_decode($request,true);
  $valores = "'";
  $campos="";
  foreach ($datos as $key => $value) {
    $campos .= $value['name'] . ',';
    $valores .= $value['value'] . "','";
  }
  $campos = substr($campos,0,-1);
  $valores = substr($valores,0,-2);
  $sql = "INSERT INTO contac_form ($campos) VALUES ($valores)";
  /*preparamos la conexion con la base de datos*/
  $servername = "localhost";
  $username = "root";
  $password = "";
  $basename = "takeaway";
  $conexion = new mysqli($servername,$username,$password,$basename);
  if ($conexion){
    $insertarDatos = $conexion->query($sql);
    $conexion->close();
  }
  if($insertarDatos){
    echo json_encode([
      "error"   =>  "No hay un problema en el testeo",
      "sql"   =>  $insertarDatos,
      "datos"   =>  true,
    ]);
  } else {
    echo json_encode([
      "error"   =>  "hay un problema en el testeo",
      "sql"   =>  $insertarDatos,
      "datos"   =>  false,
    ]);
  }
}
/*fin de php*/
?>
