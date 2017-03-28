// Creamos la funcion pintaCarrito
function pintaCarrito(hayCarrito){
  // Declaramos las variables
  var testeo = false;
	var TotalPrecio = 0;
  // obtener datos guardados en localStorage
	var hayCarrito = localStorage.getItem('JsonCarrito');
  $('#resProducts').empty();
  $('#resProducts').append('<tr><th>Cantidad</th><th>Platos</th><th>Precio</th>');
	// recoremos el json para obtener las variables
	for (i in hayCarrito){
		var nombre = hayCarrito[i].nombre;
		var id = hayCarrito[i].id;
		var cantidad = hayCarrito[i].cantidad;
		var precio = hayCarrito[i].precio;
		if(testeo) console.log(nombre);
		if(testeo) console.log(cantidad);
		if(testeo) console.log(precio);
		TotalPrecio = TotalPrecio + precio;
		// Mostramos en el modal lo guardado en localStorage
		var rowProduct =`
				<tr>
					<td>${cantidad}</td>
					<td>${nombre}</td>
					<td>${precio*cantidad}</td>
				</tr>
			`;
    var rowPrecio =`
      <tr>
        <td colspan="3">Precio Total = ${TotalPrecio}</td>
      </tr>
      `;
		$("#resProducts").append(rowProduct);
		};

	}
// fin de funcion
};
