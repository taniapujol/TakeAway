// Empieza el jquery de la página
$(document).ready(function() {
	// Declaramos una variable
		var testeo = true;
		var hayCarrito =localStorage.getItem('JsonCart');
	// cargamos la funcion modal del materialize
    $('.modal').modal();
		$('#modalNewslleter')
    $(".button-collapse").sideNav({
      menuWidth: 100, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
		// actualizamos si el carrito si exite alguno en localStorage
		if (hayCarrito!=null){
			hayCarrito =JSON.parse(hayCarrito);
			$('#hayProductos').remove();
			pintaCarrito(hayCarrito);
		}
    // Cargamos ajax para obterner las variables nombre, descripcion, precio y categoria llamando a la base de datos por php.
    $.ajax({
        url: 'php/ajaxIndex.php', // llama al php que controlo la base de datos 'platos'.
        type: 'GET',
        dataType: 'json',
        success: function(result) {
            if (testeo) console.log(result);
            $.each(result.query, function(k, v) {
            	var id = v.id;
              var nombre = v.nombrePlato;
              var precio = v.precioRacion;
              var descripcion = v.descripcion;
              var foto = v.foto;
              var activado = v.activado;
              var categoria = v.id_categoria;
              pintaCard(id,nombre, precio, descripcion, foto, categoria);
            });
            $.each(result.query_bebi, function(k, v) {
              var id = v.id;
              var nombre = v.nombreBebida;
              var precio = v.precio;
              var foto = v.foto;
              var categoria = v.id_categoria;
              if (testeo) console.log(id,nombre,precio,foto,categoria);
              pintaCard(id,nombre, precio, "Lata o Botella de bebida", foto, categoria);
            });
        },
        error: function(result) {
            alert("errorrrrrr!!!");
        }
    });

// fin del jquery
});
