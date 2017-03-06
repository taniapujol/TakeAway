$(document).ready(function(){
  $('.modal').modal();
  $('#modal1').modal('open');
  $('#cerrar').click(function(){
    alert('correco');
    $('#modal1').modal('close');
  })

});
