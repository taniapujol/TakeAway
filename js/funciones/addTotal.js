function addTotal(cantidad){
	var plus = localStorage.getItem("Total");
	if(testeo) console.log(cantidad);
	if (plus != null){
		plus = plus + cantidad;
		$("#tCantidad").empty();
		$("#tCantidad").html(plus);
	} else {
		plus = cantidad;
		$("#tCantidad").empty();
		$("#tCantidad").html(plus);
	}
// fin de funcion
};
