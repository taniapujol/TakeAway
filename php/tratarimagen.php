<?php
// Recibo los datos de la imagen
$nombre_img = $_FILES['foto']['foto'];
$tipo = $_FILES['foto']['type'];
$tamano = $_FILES['foto']['size'];
 
//Si existe imagen y tiene un tamaño correcto
if (($nombre_img == !NULL) && ($_FILES['foto']['size'] <= 200000)) 
{
   //indicamos los formatos que permitimos subir a nuestro servidor
   if (($_FILES["foto"]["type"] == "foto/gif")
   || ($_FILES["foto"]["type"] == "foto/jpeg")
   || ($_FILES["foto"]["type"] == "foto/jpg")
   || ($_FILES["foto"]["type"] == "foto/png"))
   {
      // Ruta donde se guardarán las imágenes que subamos
      $directorio = $_SERVER['DOCUMENT_ROOT'].'/xampp/htdocs/tania/TakeAway/img/categorias';
      // Muevo la imagen desde el directorio temporal a nuestra ruta indicada anteriormente
      move_uploaded_file($_FILES['imagen']['tmp_name'],$directorio.$nombre_img);
    } 
    else 
    {
       //si no cumple con el formato
       echo "No se puede subir una imagen con ese formato ";
    }
} 
else 
{
   //si existe la variable pero se pasa del tamaño permitido
   if($nombre_img == !NULL) echo "La imagen es demasiado grande "; 
}


?>