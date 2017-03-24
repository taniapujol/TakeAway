<?php 
// setear el post
if ($_SERVER['REQUEST_METHOD'] === 'GET') { // verificamos que existe envio POST

	$sql = "SELECT * FROM bebidas";
	$conexion = new mysqli('localhost', 'root', '', 'takeaway');
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
			"query" => $query,
			"error" => 1,
			"resultado" => "no se a cargado"
		]);
	}
}else{
	echo json_encode([
		"query" => "KO",
		"error" => 1,
		"resultado" => "no hay"
	]);
}

?>