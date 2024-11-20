const  tiposTorta = [
  { id: 1,
    imagen: "../images/infantil.png",
    categoria: "infantil",
    nombre: "TORTA INFANTIL",
    descripcion: "Bizcochuelo de vainilla y dulce de leche",
    precio: 1500 },

  { id: 2,
    imagen: "../images/adultos.png",
    nombre: "TORTA ADULTOS",
    categoria: "adultos",
    descripcion: "Bizcochuelo de vainilla y dulce de leche",
    precio: 1300 },

  { id:3,
    imagen: "../images/bautismo.png",
    categoria: "bautismo",
    nombre: "TORTA BAUTISMO",
    descripcion: "Bizcochuelo de vainilla y dulce de leche",
    precio: 1100 },

  { id: 4,
    imagen: "../images/comunion.png",
    categoria: "comunion",
    nombre: "TORTA COMUNIÓN",
    descripcion: "Bizcochuelo de vainilla y dulce de leche",
    precio: 1000 }
]
const getProducts = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(tiposTorta);
  }, 2000);
});


export default getProducts;