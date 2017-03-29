$(document).ready(function() {
  var testeo = true;
  //creamos la parte del get del formulario de obtencion de categorias
  if(testeo) console.log ("se cargan las categorias")
  $.ajax({
      url: '../php/getSelecPlato.php',
      type: 'GET',
      dataType: 'json',
      success: function(result){
        var etiquetas_listado1, etiquetas_listado2, etiquetas_listado3 = "";
        var values_listado1, values_listado2, values_listado3 = "";
        var options_listado1, options_listado2, options_listado3 = "";
        if (testeo) console.log(result.query);
        $.each(result.query, function() {
          $.each(this, function(campo, valor) {
            switch (campo == 'id_categoria') {
              case (id_categoria == '2'):
                if (campo == 'id') values_listado1=valor;
                else etiquetas_listado1=valor;
              break;
              case (id_categoria == '3'):
                if (campo == 'id') values_listado2=valor;
                else etiquetas_listado2=valor;
              break;
              case (id_categoria == '4'):
                if (campo == 'id') values_listado3=valor;
                else etiquetas_listado3=valor;
              break;
            }
          });
          options_listado1 += "<option value='" + values_listado1 + "'>" + etiquetas_listado1 + "</option>";
          options_listado2 += "<option value='" + values_listado2 + "'>" + etiquetas_listado2 + "</option>";
          options_listado3 += "<option value='" + values_listado3 + "'>" + etiquetas_listado3 + "</option>";
        });
        if (testeo) console.log(options_listado1,options_listado2,options_listado3);
        $("#listado1").append(options);
        $("#listado2").append(options);
        $("#listado3").append(options);
        $('select').material_select();
      },
      error: function(result){
        alert('errorororor');
      }
  });
  if (testeo) console.log("inicio de submit");
  // Creaamos la parte del post del formulario (enviar platos de base de datos)
  // Evita el refresh automático que se produce al enviar el form
  $("#addPlato").submit(function(event){
    event.preventDefault();
    if (testeo) console.log("se va enviar el form");

    var jsonData = JSON.stringify($("#addPlato").serializeArray());
    if (testeo) console.log("Datos del json");
    if (testeo) console.log(jsonData);
    $.ajax({
      url: '../php/envioPlato.php',
      type: 'POST',
      dataType: 'json',
      data: jsonData,
      success : function(result) {
        if (testeo) console.log(result.sql);
        if (testeo) console.log(result.datos);
        if (result.sql == true) {
          Materialize.toast('Plato Creado', 3000, 'rounded');
          $("#addPlato")[0].reset();
          $("#addPlato").trigger("reset");
        }
      },
      error : function(result) {
        if (result.sql == false){
          Materialize.toast('Error al crear plato', 3000, 'rounded');
          $("#addPlato")[0].reset();
        }
      }
    });
  });

//Fin del script
});
