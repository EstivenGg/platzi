//ARRAY
var frutas = ["Manzana","Platano","Cereza","Fresa"]; //Objeto es una lista de objetos que se guardan en uno
console.log(frutas.length);//4, la longitud o cantidad de datos que trae el array

var masfrutas= frutas.push("Uvas")// Entonces empujo una fruta al final de la matriz, siempre lo empuja a la ultima posicion

var eliminarUltimo= frutas.pop("Uvas"); //Elimina el elemento que se mencione

var nuevaLongitud = frutas.unshift("Tomate"); //Agrega al array el elemento pero lo agrega al principio 

var borrarFruta=frutas.shift("Uvas") //elimina el que esta en primera piosicion

var posicion=frutas.indexOf("Cereza") //Saber en que posicion esta un elemento

frutas[2]//Traer la posicion del elemento dentro del array