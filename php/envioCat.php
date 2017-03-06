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
	if ($campos === 'foto'){
		// Recibo los datos de la imagen
		$nombre_img = $_FILES['imagen']['foto'];
		$tipo = $_FILES['imagen']['type'];
		$tamano = $_FILES['imagen']['size'];
	 
		//Si existe imagen y tiene un tamaño correcto
		if (($nombre_img == !NULL) && ($_FILES['foto']['size'] <= 200000)) 
			{
		   		//indicamos los formatos que permitimos subir a nuestro servidor
		   		if (($_FILES["foto"]["type"] == "foto/gif")
		   		|| ($_FILES["foto"]["type"] == "foto/jpeg")
		   		|| ($_FILES["foto"]["type"] == "foto/jpg")
		   		|| ($_FILES["foto"]["type"] == "foto/png"))
		   	{
		      // Ruta donde se guardarán las imágenes que subamos
		      $directorio = $_SERVER['DOCUMENT_ROOT'].'/xampp/htdocs/tania/TakeAway/img/categorias';
		      // Muevo la imagen desde el directorio temporal a nuestra ruta indicada anteriormente
		      move_uploaded_file($_FILES['imagen']['tmp_name'],$directorio.$nombre_img);
		    } else {
		       //si no cumple con el formato
		       echo "No se puede subir una imagen con ese formato ";
		    }
		} else {
		   //si existe la variable pero se pasa del tamaño permitido
		   if($nombre_img == !NULL) echo "La imagen es demasiado grande "; 
		}
	}
	$campos = substr($campos,0,-1);
	$valores = substr($valores,0,-2);
	$sql = "INSERT INTO categoria ($campos) VALUES ($valores)";
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
			"error"		=>	"No hay un problema en el testeo",
			"sql"		=>	$insertarDatos,
			"datos"		=>	true,
		]);
	} else {
		echo json_encode([
			"error"		=> 	"hay un problema en el testeo",
			"sql"		=>	$insertarDatos,
			"datos"		=> 	false,
		]);
	}
}
/*fin de php*/
?>