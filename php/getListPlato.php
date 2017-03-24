<?php 
// setear el post
if ($_SERVER['REQUEST_METHOD'] === 'GET') { // verificamos que existe envio POST

	$sql = "SELECT a.id, a.nombrePlato, a.descripcion, a.precioRacion, b.nombre as nombreCat, a.foto, a.activado FROM platos a, categoria b where a.id_categoria=b.id";
	$sql_cats = "SELECT * FROM categoria";
	$conexion = new mysqli('localhost', 'root', '', 'takeaway');
	if ($conexion) {
		$query = $conexion->query($sql);
		$query_cats = $conexion->query($sql_cats);
		$res = $query->fetch_all(MYSQLI_ASSOC);
		$resCats = $query_cats->fetch_all(MYSQLI_ASSOC);
		$conexion->close();
	}
		if ($query) {
			echo json_encode([
				"query" => $res,
				"cats"  => $resCats,
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