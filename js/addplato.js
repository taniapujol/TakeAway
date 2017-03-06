$(document).ready(function() {
  var debug = true;
  //creamos la parte del get del formulario de obtencion de categorias
  if(debug) console.log ("se cargan las categorias")
  $.ajax({
      url: '../php/getSelecCat.php',
      type: 'GET',
      dataType: 'json',
      success: function(result){
        var etiquetas = "";
        var values = "";
        var options = "";
        if (debug) console.log(result.query);
        $.each(result.query, function() {
          $.each(this, function(campo, valor) {
             if (campo == 'id') values=valor;
             else etiquetas=valor;
          });
          options += "<option value='" + values + "'>" + etiquetas + "</option>";
        }); 
        if (debug) console.log(options)        
        $("#listado").append(options);
        $('select').material_select();
      },
      error: function(result){
        alert('errorororor');
      }
  });
  if (debug) console.log("inicio de submit");
  // Creaamos la parte del post del formulario (enviar platos de base de datos)
  // Evita el refresh automático que se produce al enviar el form
  $("#addPlato").submit(function(event){
    event.preventDefault();
    if (debug) console.log("se va enviar el form");
    
    var jsonData = JSON.stringify($("#addPlato").serializeArray());
    if (debug) console.log("Datos del json");
    if (debug) console.log(jsonData);
    $.ajax({
      url: '../php/envioPlato.php',
      type: 'POST',
      dataType: 'json',
      data: jsonData,
      success : function(result) {
        if (debug) console.log(result.sql);
        if (debug) console.log(result.datos);
        if (result.sql == true) {
          Materialize.toast('Plato Creado', 3000, 'rounded') 
        }
      },
      error : function(result) {
        if (result.sql == false){
          Materialize.toast('Error al crear plato', 3000, 'rounded') 
        }
      }
    });
  });

//Fin del script    
});
