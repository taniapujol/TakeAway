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
};
