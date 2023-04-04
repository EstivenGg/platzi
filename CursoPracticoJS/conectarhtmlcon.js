let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let classparrafo = document.querySelector('.parrafito');
let idparrafo = document.querySelector('#parrafito');
let calculo1 = document.querySelector('#calculo1');
let calculo2 = document.querySelector('#calculo2');
let btn = document.querySelector('#btnCalcular');
let resultado= document.getElementById('result')
let formu = document.querySelector('#form')

h1.innerHTML='patito' ;//Escribir html por js
h1.innerText='patito' ;//Escribir html por js pero lo hace todo texto literal
h1.classList.add('Pato');//anadir class
h1.classList.remove('Pato');//remover class


//input.value = "4.5"//cambiar el valor por defecto



let img = document.createElement('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Atardecer_M%C3%A1laga_2.jpg')
//idparrafo.innerHTML=''Se crea un elemento vacio
//idparrafo.append(img); //Pone la imagen despues de lo que habia

console.log(
    h1.getAttribute('pantalla')//Traer lo que tiene un atributo en elemento html
);


function calcular(event) {
    event.preventDefault();
    let total= Number(calculo1.value) + Number(calculo2.value);

    resultado.innerHTML=total
}
//ERnviar con el boton
//btn.addEventListener('click', calcular)
//Si tiene un form puede ejecutar el siguiente codigo
formu.addEventListener('submit', calcular)