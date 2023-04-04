//HOISTING

//Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.
console.log(miNombre)

var miNombre;
miNombre="Diego"
//Lo de arriba es hoisting

hey()

function hey(){
    console.log("Hola " + miNombre);
}
var miNombre = "Diego"
 //Las funciones se declaran primero que las variables por ende la funcion no sabe que variable sale
 