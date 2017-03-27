$(document).ready(function() {
	// Declaracion de variables
	var testeo = true;
	$(".button-collapse").sideNav();
   
    // Animacion de la pagina
    $(".row").hide();
    $("#contactForm").hide();
    $("#gracias").hide();

    $(".row").fadeIn(1200);  	
    $("#contactForm").slideDown(1200);    
    $("#contactForm").submit(function(event) {
    	// El preventDefault evita que se haga un submit por defecto, asi no se ejecuta el atributo action.
    	event.preventDefault();
    	var jsonData = JSON.stringify($("#contactForm").serializeArray());
    	$.ajax({
	    	url: 'php/envioContacto.php',
	    	type: 'POST',
	    	dataType: 'json', // tipo de archivo que recivira el php
	    	data: jsonData, // tipo de archivo que enviamos el php
	    	success: function(resul) {
	    		if(testeo) console.log(resul.sql);
	    		if(testeo) console.log(resul.datos);
	    		if (resul.sql == true) { 
	    			$("#contactForm").hide(400);
	    			$("#gracias").slideDown(400);
	    		};
	    	},
	    	error:function(resul) {
	    		if (testeo) console.log("problemas con el php");
	    		if (resul.sql != true) { Materialize.toast('Verifica los datos, no se ha podido enviar', 3000, 'rounded')};
	    	}
	    // Fin del ajax
    	});
    // Fin del submint
    });
// Fin del jquery
});