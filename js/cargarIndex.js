// Declaramos una variable global
	var carrito = [];
	var debug = false;
// Empieza el jquery de la página
$(document).ready(function() {
	// cargamos la funcion modal del materialize
    $('.modal').modal();
    $('#modal1').modal('open');
    $('modal2').modal('open');
        
    // Cargamos ajax para obterner las variables nombre, descripcion, precio y categoria llamando a la base de datos por php. 
    $.ajax({
        url: 'php/ajaxIndex.php',
        type: 'GET',
        dataType: 'json',
        success: function(result) {
            console.log(result);
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
    if (debug) console.log("El total del carrito es :" + carrito);
});
// creamos la funcion que pintara la cards de nuestro menus principal en la secciones indicadas.
function pintaCard(id,titulo, precio, descripcion, img, cat) {
	
    var titulo = titulo;
    var precio = precio;
    var descripcion = descripcion;
    var img = img;
	var card = `
		<div class="col s6 m4 l3">
			<div class="card">
				<div class="card-image waves-effect waves-block waves-light">
					<img class="activator" src="img/${img}">
				</div>
				<div class="card-content">
					<span class="card-title activator grey-text text-darken-4">${titulo}<i class="material-icons right">more_vert</i></span>
					<p><span class="price">${precio} €</span></p>
					<div class="fixed-action-btn horizontal posicion">
								<a class="btn-floating amber">
									<i class="material-icons">shopping_basket</i>
								</a>
								<ul>
									<li><a onclick="addCarrito(${id},1,${precio},'${titulo}')" class="btn-floating red">x1</a></li>
									<li><a onclick="addCarrito(${id},2,${precio},'${titulo}')" class="btn-floating yellow darken-1">x2</a></li>
									<li><a onclick="addCarrito(${id},3,${precio},'${titulo}')" class="btn-floating green">x3</a></li>
									<li><a onclick="addCarrito(${id},4,${precio},'${titulo}')" class="btn-floating blue">x4</a></li>
								</ul>
							</div>
				</div>
				<div class="card-reveal">
					<span class="card-title grey-text text-darken-4">${titulo}<i class="material-icons right">close</i></span>
					<p>${descripcion}</p>
				</div>
			</div>
		</div>
		`;
    switch (cat){
		case "2" :
			$("#ensaladasRow").append(card);
		break;
		case "3" : 
			$("#principalesRow").append(card);
		break;
		case "4"	:
			$("#postresRow").append(card);
		break;
		default : console.warn("existen platos sin categorias")
	};
};
// Creamos la funcion addCardito
function addCarrito(id,cantidad,precio,titulo){
	// añadimos a la variable carrito lo obtenido en nuestra funcion
	carrito.push({id:id, cantidad:cantidad, precio:precio*cantidad, nombre:titulo});
	console.log(carrito);
	// convertimos la variable carrito como json. El json lo transforma en un linea de texto
	var JsonCarrito = JSON.stringify(carrito);
	// la llamada del localStorage (guardamos los datos en una parte del navegador), su estructura es = localStorage.setItem("nombre_del_espacio",nombre_lo_que_queremos_guardar);
	localStorage.setItem("JsonCarrito",JsonCarrito);
	// añadimos a nuestro index en el nav el carrito

};
// Creamos la funcion pintaCarrito
function pintaCarrito(){
	$("#carrito").click(function (){
		// obtener datos guardados en localStorage
		var TotalCantidad = 0;
		var TotalPrecio = 0;
		var hayCarrito = localStorage.getItem('JsonCarrito');
		// recoremos el json para obtener las variables
   		hayCarrito = JSON.parse(hayCarrito);
   		for (i in hayCarrito){
   			var nombre = hayCarrito[i].nombre;
    		var identificador = hayCarrito[i].id;
    		var cantidad = hayCarrito[i].cantidad;
    		var precio = hayCarrito[i].precio;
    		TotalCantidad = TotalCantidad + cantidad;
    		TotalPrecio = TotalPrecio + precio;
    		// Mostramos en el modal lo guardado en localStorage
    		var pintaJson =`
				<ul>
					<li>
						<a>Cantidad</a>
						<span>${cantidad}</span>
					</li>
					<li>
						<a>Nombre del Plato </a>
						<span>${nombre}</span>
					</li>
					<li>
						<a>Precio por Racion</a>
						<span>${precio}</span>
					</li>
				</ul>	
    		`;
    	};
		var pintacart =`
			<div class="modal-content">
      			<h4>Tu Cesta de la Compra</h4>
      			<p>${pintaJson}</p>
    		</div>
	   		<div class="modal-footer">
	     		<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
	     		<a href="#" class=" modal-action modal-close waves-effect waves-green btn-flat">Finalizar</a>
	   		</div>
	   		<div>
	   			<span style="float:left">Total de platos : ${TotalCantidad}</span>
	   			<span style="float:right">Precio total : ${TotalPrecio}</span>

	   		</div>
	   		`;
	   	$("#modal2").append(pintacart);
	});
