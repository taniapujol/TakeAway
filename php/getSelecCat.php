<?php 
// setear el post
if ($_SERVER['REQUEST_METHOD'] === 'GET') { // verificamos que existe envio POST

	$sql = "SELECT id,nombre FROM categoria";
	$servername = "localhost";
	$username = "root";
	$password = "";
	$basename = "takeaway";
	$conexion = new mysqli($servername, $username, $password, $basename);
	if ($conexion) {
		$query = $conexion->query($sql);
		$res = $query->fetch_all(MYSQLI_ASSOC);
		$conexion->close();
	}
		if ($query) {
			echo json_encode([
				"query" => $res,
				"error" => 0,
				"resultado" => "se a cargado"
			]);
	}else{
		echo json_encode([
			"query" => $res,
			"error" => 1,
			"resultado" => "no se a cargado"
		]);
	}
}else{
	echo json_encode([
		"query" => $query,
		"error" => 0,
		"resultado" => "no hay"
	]);
}

?>