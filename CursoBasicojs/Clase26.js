/* El método .push() nos permite agregar uno o más elementos al final de un array. A continuación veremos un ejemplo aplicado con un array que contiene números: */


function newNum(){
    numArray.push(6,7)
  }
  
  newNum()

/* Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0. */

// --- SHIFT ---

//Creamos el array
let array1 = [1,2,3,4,5]
console.log(array)

// Aplicamos .shift()
let shiftArray1 = array1.shift()

//Revisamos. El output debe de ser [2,3,4,5]
console.log(array1)

// --- POP ---

//Creamos el array
let array2 = [1,2,3,4,5]
console.log(array)

// Aplicamos .shift()
let shiftArray2 = array2.pop()

//Revisamos. El output debe de ser [1,2,3,4]
console.log(array2)