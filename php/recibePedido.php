<?php
//Para comprobar si se recibe un post desde un ajax
if ($_SERVER['REQUEST_METHOD']==='POST'){
	//Para almacenar los datos JSON recibidos en una variable
	$request= file_get_contents('php://input');
	//Para convertir un Json en un array de php
	$datos = json_decode($request, true);
	$ids='';
	$cantidades="";
	$importe=0;
	
	foreach ($datos as $value){	
	$importe=$importe+$value['precio']*$value['cantidad'];
	}
	$ids = substr($ids,0, -1);
	$cantidades = substr($cantidades,0, -1);
	$sqlPedido = "INSERT INTO pedidos (id_cliente,importe) VALUES (1,$importe);";
	
	
	$mysqli = new mysqli('127.0.0.1', 'root', '', 'takeaway');
	mysqli_set_charset($mysqli,"utf8");
	if ($mysqli) {
		$query=$mysqli->query($sqlPedido);
		$lastID=$mysqli->insert_id;
		$sqlDetalle="INSERT INTO detalle_pedido (id_pedido, id_plato, id_bebida, cantidad, importe) VALUES ";
		foreach ($datos as $value){	
			if ($value['cat']== 5){
				$id_bebida=$value["id"];
				$id_plato=0;
			} else {
				$id_plato=$value['id'];
				$id_bebida=0;
			};		
		$cantidad=$value['cantidad'];
		$importe=$value['precio'];
		$sqlDetalle.="($lastID,$id_plato,$id_bebida,$cantidad,$importe),";
	}
	$sqlDetalle = substr($sqlDetalle,0, -1);
	$queryDetalle=$mysqli->query($sqlDetalle);
	}
	if (($query) && ($queryDetalle)) {		
	echo json_encode([
		"sqlDetalle" 	=> $sqlDetalle,
		"error"		=> 0,
		"sqlpedido"	=> $sqlPedido,
		"lastid"		=> $lastID,
		"resultado" => "se ha grabado"
		]);	
	}
	else {
		$lastID="No se encuentra último id";
		echo json_encode([
		"ids" 	=> $ids,
		"error"		=> 1,
		"sqlpedido"	=> $sqlPedido,
		"sql"		=> $lastID,
		"resultado" => "NO se ha grabado!!"
		]);	
	}
}
else {
echo json_encode([
		"campos" => "KO",
		"error"		=> 1,
		"valores"	=> "no hay"
	]);
}
$mysqli->close();
?>