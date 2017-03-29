function borrarLineaCarrito(id){
  // declaraciones de variables
  testeo = true;
  identificador = id;
  var lineaCarrito = localStorage.getItem('JsonCart');
  lineaCarrito = JSON.parse(lineaCarrito);
  if (testeo) console.log(lineaCarrito);
  if (testeo) console.log(identificador);
  for (i in lineaCarrito){
    if (lineaCarrito[i].id === identificador){
      if (testeo) console.log(i);
      lineaCarritoOld = lineaCarrito.splice(i,1);
      if (testeo) console.log (lineaCarrito);
    };
  };
  var JsonCart = JSON.stringify(lineaCarrito);
  addTotal();
  localStorage.setItem("JsonCart",JsonCart);
  pintaCarrito(JsonCart);
};
