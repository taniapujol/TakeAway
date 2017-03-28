$(document).ready(function(){
  // Obtenemos del localStorage su contenido del carrito
  var hayCarrito=localStorage.getItem('JsonCart');
  if (hayCarrito!=null){
    hayCarrito=JSON.parse(hayCarrito);
    $('#hayProductos').remove();
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
        console.log("Se guardó correctamente el pedido");
        console.log(result);
      },
      error: function(result){
        alert("errorrrrrr!!!");
      }
    });
  })
});
