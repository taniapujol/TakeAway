// Creamos la funcion addCardito() para añadir productos al carrito de la compra.
function addCarrito(id,cantidad,precio,titulo){
  // Declaramos las variables
  var testeo = false;
	var existeProducto=false;
  // Obtenemos el contenido de localStorage
  var cartExist = localStorage.getItem("JsonCart");
  var cartCantidad = localStorage.getItem("Total");
	if (cartExist!=null){
		cartExist = JSON.parse(cartExist);
		if(testeo) console.log("Ya existen productos en el carrito");
		//buscamos si existe para añadir cantidad
		for (i in cartExist) {
      cartCantidad = cartCantidad + cartExist[i].cantidad;
			if (id==cartExist[i].id) {
			//se usa la variable existeProducto para saber si hay un id igual en nuestro json si lo encuentra se pone en true para después comprobar si se añade como nuevo producto al carrito.
			existeProducto = true;
			cartExist[i].cantidad = cartExist[i].cantidad + cantidad;
			}
		}
		if (!existeProduct){
			cartExist.push({id:id,cantidad:cantidad,precio:precio*cantidad,nombre:titulo});
      cartCantidad = cartCantidad + cantidad;
		}
		pintaCarrito(cartExist);
    addTotal(cartCantidad);
	} else {
	//aqui se controla si es la primera vez que se añaden productos al carrito
	cartExist=[];
	carExist.push({id:id,cantidad:cantidad,precio:precio*cantidad,titulo:titulo});
		$('#hayProductos').remove();
		pintaCarrito(cartExist);
    addTotal(cantidad);
	}
	if(testeo) console.log(cartExist);
	var JsonCart=JSON.stringify(cartExist);
	localStorage.setItem("JsonCart",JsonCart);
	localStorage.setItem("Total",cantidad);
};
