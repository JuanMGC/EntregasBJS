// var hoteles = {

//   Balmoral: {
//     name: "Balmoral",
//     location: "Cadiz",
//     img: "Imagenes/Hotel Balmoral.jpg",
//   },

//   Milton: {
//     name: "Milton",
//     location: "Fuengirola",
//     img: "Imagenes/Hotel Milton Paradise.jpg",
//   },
//   Senator: {
//   name: "Senator",
//   location: "Sevilla",
//   img: "Imagenes/Hotel Senator.jpg",
//   },
// };


// var selectedHotel = prompt("Introduce el nombre de uno de estos tres Hoteles: Balmoral, Milton o Senator");

// document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;
// document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
// document.getElementById("img-hotel").src =hoteles[selectedHotel].img;

var stars = {
  1:
  "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  2:
  "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  3:
  "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  4:
  "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  5:
  "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Puntuación: 1, 2, 3, 4 o 5 estrellas");

document.getElementById("rating").innerHTML = stars[rating];
