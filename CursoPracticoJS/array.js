//Array es una lista de elementos.

const array = []

//Un objeto es una lista de elementos pero cada objeto tiene un nombre clave

const obj =  {

    nombre:'funalo', edad:18, comidas:['Pollo','Pan']

}

//Arrays cuando lo que haremos en un elemento es lo mismo que en todo lo demas.
//Un objeto cuando los nombres de cada elemento importen.

//imprimir primer elemento 

console.log(array[0])

// imprimir cada uno

array.forEach(function(resultadosArray){
    console.logs(resultadosArray);
})

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element)
}

//Object.values() crea un array con cada uno de los parametros
bject.values(obj)
/*(3) ['funalo', 18, Array(2)]
0
: 
"funalo"
1
: 
18
2
: 
(2) ['Pollo', 'Pan']
length
: 
3
[[Prototype]]
: 
Array(0)*/

 
