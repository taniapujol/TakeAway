// Declaramos una variable global
	var testeo = false;
// Empieza el jquery de la página
$(document).ready(function() {
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
		// Cargamos ajax para obterner las variables nombre, foto y fecha llamando a la base de datos por php.
		$.ajax({
        url: 'php/ajaxMenu.php', // Llama al php que controla la base de datos 'detalle_menu'
        type: 'GET',
        dataType: 'json',
        success: function(result) {
						if (testeo) console.log(result);
						var fechaActual = result.fecha;
            $.each(result.query, function(k, v) {
            	var id = v.id;
              var nombre = v.nombrePlato;
              var img = v.foto;
							var fecha = v.fecha;
							if (fecha === fechaActual){
								pintaMenu(nombre, img);
							} else {
								$("#menu").addClass(hidden);
							};
            });
        },
        error: function(result) {
            alert("errorrrrrr!!!");
        }
    });
});
// creamos la funcion que pintara el menu del dia en la seccion indicada
function pintaMenu(id,nombre,img) {
	var nombrePlato = nombre;
	var foto = img;
	var card = `
	<div class="col s12 m12 l12">
		<div class="card">
			<div class="card-image waves-effect waves-block waves-light">
				<img class="activator" src="img/menu.jpg">
			</div>
			<div class="card-content">
				<span class="card-title activator grey-text text-darken-4"><i class="material-icons left">more_vert</i></span>
				<div class="fixed-action-btn horizontal posicion">
							<a class="btn-floating amber">
								<i class="material-icons">shopping_basket</i>
							</a>
							<ul>
								<li><a onclick="addCarrito(${id},1,9,'MenuDiario')" class="btn-floating red">x1</a></li>
								<li><a onclick="addCarrito(${id},2,9,'MenuDiario')" class="btn-floating yellow darken-1">x2</a></li>
								<li><a onclick="addCarrito(${id},3,9,'MenuDiario')" class="btn-floating green">x3</a></li>
								<li><a onclick="addCarrito(${id},4,9,'MenuDiario')" class="btn-floating blue">x4</a></li>
							</ul>
						</div>
			</div>
			<div class="card-reveal">
				<span class="card-title grey-text text-darken-4">Menu del Dia<i class="material-icons right">close</i></span>
				<p>
					<p><img class="activator" src="img/${foto}">${nombrePlato}</p>
					<p>${nombrePlato}<img class="activator" src="img/${foto}"></p>
					<p><img class="activator" src="img/${foto}">${nombrePlato}</p>
				</p>
			</div>
		</div>
	</div>
	`;
	$("#menuRow").append(card);
}
// creamos la funcion que pintara las cards de nuestro menus principal en la secciones indicadas.
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
	var cartExist=localStorage.getItem("JsonCart");
	var existeProducto=false;
	if (cartExist!=null){
		cartExist = JSON.parse(cartExist);
		if(testeo) console.log("Ya existen productos en el carrito");
		//buscamos si existe para añadir cantidad
		for (i in cartExist) {
				if (id==cartExist[i].id) {
				//se usa la variable existeProducto para saber si hay un id igual en nuestro json si lo encuentra se pone en true para después comprobar si se añade como nuevo producto al carrito.
				existeProducto = true;
				cartExist[i].cantidad = cartExist[i].cantidad + cantidad;
				}
		}
		if (!existeProduct){
			cartExist.push({id:id,cantidad:cantidad,precio:precio*cantidad,nombre:titulo});
		}
	} else {
	//aqui se controla si es la primera vez que se añaden productos al carrito
	cartExist=[];
	carExist.push({id:id,cantidad:cantidad,precio:precio*cantidad,titulo:titulo});
	}
	if(testeo) console.log(cartExist);
	var JsonCart=JSON.stringify(cartExist);
	localStorage.setItem("JsonCart",JsonCart);
};
// Creamos la funcion pintaCarrito
function pintaCarrito(){
	// obtener datos guardados en localStorage
	var TotalCantidad = 0;
	var TotalPrecio = 0;
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
				<span style="margin:50px;">${cantidad}</span>
				<span style="margin:50px;">${nombre}</span>
				<span style="margin:40px;">${precio}</span><br>
			`;
			$("#pintaJson").append(pintaJson);
		};
		$("#totalCantidad").append(TotalCantidad);
		$("#totalPrecio").append(TotalPrecio);
	} else {
		$("#modal2").html("No tienes compras");
	}
};
