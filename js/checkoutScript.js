$(document).ready(function(){
  // declaraciones de variables
  var testeo = true;
  // Obtenemos del localStorage su contenido del carrito
  var hayCarrito=localStorage.getItem('JsonCart');
  if (hayCarrito!=null){
    hayCarrito=JSON.parse(hayCarrito);
    $('#hayProductos').remove();
    $("#btnPay").show();
    pintaCarrito(hayCarrito);
  }
  // Enviamos los datos al php al hacer clic en pagar compra
  $('#btnPay').click(function (){
    var hayCarrito=localStorage.getItem('JsonCart');
    console.log(hayCarrito);
    $.ajax({
      url: 'php/recibePedido.php',
      type: 'POST',
      dataType: 'json',
      data: hayCarrito,
      success : function(result){
        if(testeo) console.log("Se guardó correctamente el pedido");
        if(testeo) console.log(result);
        if (result.error == 0){
          localStorage.clear('JsonCart');
          $("#checkout").remove();
          $("#gracias").show();
        };
      },
      error: function(result){
        alert("errorrrrrr!!!");
      }
    });
  })
});
