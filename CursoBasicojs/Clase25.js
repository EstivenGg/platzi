//Metodos de recorridos de array

var articulos = [
    {
        nombre:"Bici", costo:3000
    },
    {
        nombre:"Tv", costo:2500
    },
    {
        nombre:"Libro", costo:320
    },
    {
        nombre:"Bici", costo:10000
    },    {
        nombre:"audi", costo:1700
    }
]
 //FIND  ayuda  a encontrar algo dentro de un articulo generando una variable y generando un array en caso de que exista
 var encuentraArticulo = articulos.find(function(artiuclo){
    return articulos.nombre === "bici"
 })

 //Retorna cosas sin crear o modificar las variables
 articulos.forEach(function(articulos){
    console.log(articulos.nombre);
 })

 //some nos regresa una validacion booleana para articulos que completen esa validacion
 var articulosBaratos = articulos.some(function(articulos) {
    return(articulo.costo <=700)
 })

/* find() : Devuelve el primer elemento del array que cumpla con la condición dada
foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
filter() : Devuelve todos los elementos del array que cumplan con la condición dada */