//WHILE

var estudiantes= ["Maria", "Sergio" ,"Rosa", "Daniel"];

function saludar(estudiantes){
    console.log('Hola, '+estudiantes);
}


while(estudiantes.length > 0){ //mientras lo que este adentro sea verdad se va a generar el loop
var estudiante = estudiantes.shift();//Va borrando el primer elemento hasta que se acaba el array
saludar(estudiante)
}