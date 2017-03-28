function addTotal(){
	// declacracion de variables
	var haycarrito = localStorage.getItem('JsonCart');
	var tCantidad = 0;
	var testeo = true;
	// Miramos si exite en localStorage un carrito guardado. Si se encuentra bacio obtentra el valor de tcantidad sino se le sumara la cantidad total del carrito.
	if ( haycarrito != null){
		haycarrito=JSON.parse(haycarrito);
		for (i in haycarrito) {
      		tCantidad = tCantidad + haycarrito[i].cantidad;
      		if (testeo) console.log(i,tCantidad);
		}
		$("#tCantidad").text(' ');
		$("#tCantidad").text(tCantidad);
	} else{
		$("#tCantidad").text(' ');
		$("#tCantidad").text(tCantidad);
	}
	
// fin de funcion
};
