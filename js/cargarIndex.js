// Empieza el jquery de la página
$(document).ready(function() {
	// Declaramos una variable
		var testeo = false;
	// cargamos la funcion modal del materialize
    $('.modal').modal();
    $('#modal1').modal('open');
    $('modal2').modal('open');

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
        },
        error: function(result) {
            alert("errorrrrrr!!!");
        }
    });
// fin del jquery
});
