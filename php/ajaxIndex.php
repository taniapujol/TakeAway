<?php 
// setear el post
if ($_SERVER['REQUEST_METHOD'] === 'GET') { // verificamos que existe envio POST

	$sql = "SELECT * FROM platos";
	$sql_bebidas = "SELECT * FROM bebidas";
	$conexion = new mysqli('localhost', 'root', '', 'takeaway');
	if ($conexion) {
		$query = $conexion->query($sql);
		$query_bebi = $conexion->query($sql_bebidas);
		$res = $query->fetch_all(MYSQLI_ASSOC);
		$res_bebi = $query_bebi->fetch_all(MYSQLI_ASSOC);
		$conexion->close();
	}
		if ($query) {
			echo json_encode([
				"query" => $res,
				"query_bebi" => $res_bebi,
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