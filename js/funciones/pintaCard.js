// creamos la funcion que pintara las cards de nuestro menus principal en la secciones indicadas.
function pintaCard(id,titulo, precio, descripcion, img, cat) {

    var titulo = titulo;
    var precio = precio;
    var descripcion = descripcion;
    var img = img;
    var cat = cat;
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
									<li><a onclick="addCarrito(${id},1,${precio},'${titulo}','${cat}')" class="btn-floating red">x1</a></li>
									<li><a onclick="addCarrito(${id},2,${precio},'${titulo}','${cat}')" class="btn-floating yellow darken-1">x2</a></li>
									<li><a onclick="addCarrito(${id},3,${precio},'${titulo}','${cat}')" class="btn-floating green">x3</a></li>
									<li><a onclick="addCarrito(${id},4,${precio},'${titulo}','${cat}')" class="btn-floating blue">x4</a></li>
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
    case "5" :
      $("#bebidasRow").append(card);
    break;
		default : console.warn("existen platos sin categorias")
	};
};
