// Creamos la funcion pintaCarrito
function pintaCarrito(hayCarrito){
  // Declaramos las variables
  var testeo = false;
	var TotalCantidad = 0;
	var TotalPrecio = 0;
  // obtener datos guardados en localStorage
	var hayCarrito = localStorage.getItem('JsonCarrito');


	// recoremos el json para obtener las variables
	if (hayCarrito != " "){
		hayCarrito = JSON.parse(hayCarrito);
		for (i in hayCarrito){
			var nombre = hayCarrito[i].nombre;
			var identificador = hayCarrito[i].id;
			var cantidad = hayCarrito[i].cantidad;
			var precio = hayCarrito[i].precio;
			console.log(nombre);
			console.log(cantidad);
			console.log(precio);
			TotalCantidad = TotalCantidad + cantidad;
			TotalPrecio = TotalPrecio + precio;
			// Mostramos en el modal lo guardado en localStorage
			var pintaJson =`
				<tr>
					<td>${nombre}</td>
					<td>${cantidad}</td>
					<td>${precio*cantidad}</td>
				</tr>
			`;
			$("#pintaJson").append(pintaJson);
		};
		
	} else {
		$("#modal2").html("No tienes compras");
	}
};
