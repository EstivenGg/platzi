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

//Filter valida si algo es verdadero o falso

var articulosFiltrados = articulos.filter(function(articulos){
    return articulos.costo < 500
})

//mapear ciertos artiuclos

var nombreArticulos = articulos.map(function(articulos){
    return articulos.nombre
})

nombreArticulos//Retorna un arreglo pero solo con el nombre de la variable artiuclos