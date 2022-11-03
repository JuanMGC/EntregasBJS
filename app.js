//creamos un obejeto que contenga las propiedades, nombre, sitio e imagen
var hotel = {
    name: "Balmoral",
    location: "Cadiz",
    img:"Imagenes/Hotel Balmoral.jpg",
  };
  
  document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;

  document.getElementById("location-hotel").innerHTML ="Ubicado en " + hotel.location;

  document.getElementById("img-hotel").src = hotel.img;

//Asignamos puntuación del usuario al Hotel
  var puntuacion = prompt("Puntuación: del 1 al 5");

document.getElementById("rating").innerHTML = puntuacion + " estrellas";

//Damos opción de hacer la reseña de forma anónima
var anonimo = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("anonymous").checked = anonimo;

