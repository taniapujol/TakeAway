$(document).ready(function() {
  //Evita el refresh automático que se produce al enviar el form
  $("#addCat").submit(function(event){
    event.preventDefault();
    var testeo = true;
    if (testeo) console.log("se va enviar el form");

    var jsonData = JSON.stringify($("#addCat").serializeArray());
    if (testeo) console.log("Datos del json");
    if (testeo) console.log(jsonData);
    $.ajax({
      url: '../php/envioCat.php',
      type: 'POST',
      dataType: 'json',
      data: jsonData,
      success : function(result) {
        if (testeo) console.log(result.sql);
        if (testeo) console.log(result.datos);
        if (result.sql == true) {
          Materialize.toast('Categoria Creada', 3000, 'rounded')
        }
      },
      error : function(result) {
        if (result.sql == false){
          Materialize.toast('Error a Categoria Creada', 3000, 'rounded')
        }
      }
    });
  });

    //Fin del script
    });
