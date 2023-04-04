const Titulo= "FUNCIONES clase 5"; Titulo

//Declarativas con esto podemos hacer hoisting, es decir declarar la funcion y llamarla mas abajo

function nombreDeLaFuncion(){
    return 3;
}

//Expresion se hace con una variable
//Parametros dentro de los cochetes
let miFuncion = function (a,b){
    return a+b;
}
    
//Asi se llama una funcion
miFuncion();
//Ejemplo
function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`)
}

//Ejemplo 2 con return
function sumar (a,b){
    var resultado = a+b;
    return  resultado; 
   // return  a+b; 
}

var nom, lastname, nickname;
names(nom, lastname, nickname )
 function names(nom, lastname, nickname){
     let fullname= nom + lastname
     console.log("Mi nombre es " + fullname + ", pero prefiero que me digas " + nickname + ".");
 }
