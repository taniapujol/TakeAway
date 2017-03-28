// Creamos la funcion pintaCarrito
function pintaCarrito(hayCarrito){
	// Declaramos las variables
  	var testeo = true;
	var TotalPrecio = 0;
  	// obtener datos guardados en localStorage
	var hayCarrito = localStorage.getItem('JsonCart');
	if(testeo) console.log(hayCarrito);
  	$('#resProducts').empty();
  	$('#resProducts').append('<tr><th>Cantidad</th><th>Platos</th><th>PrecioRacion</th><th>Precio</th>');
	// recoremos el json para obtener las variables
	hayCarrito=JSON.parse(hayCarrito);
	for (i in hayCarrito){
		var nombre = hayCarrito[i].nombre;
		var id = hayCarrito[i].id;
		var cantidad = hayCarrito[i].cantidad;
		var precio = hayCarrito[i].precio;
		TotalPrecio = TotalPrecio + (precio*cantidad);
		// Mostramos en el modal lo guardado en localStorage
		var rowProduct =`
				<tr>
					<td>${cantidad}</td>
					<td>${nombre}</td>
					<td>${precio}</td>
					<td>${precio*cantidad}</td>
				</tr>
			`;
   
		$("#resProducts").append(rowProduct);
	};//Fin del for
	if (hayCarrito != null){
		var rowPrecio =`
    	<tr>
        	<td colspan="3">Precio Total = ${TotalPrecio}</td>
      	</tr>
      	`;
    $("#resProducts").append(rowPrecio);	
	}
// fin de funcion
};
