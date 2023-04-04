//Ciclos for y for of 
var estudiantes= ["Maria", "Sergio" ,"Rosa", "Daniel"];
function saludar(estudiantes){
    console.log('Hola, '+estudiantes);
}

for (var i = 0; i<estudiantes.length; i++){
    saludar(estudiantes[i])//Traigo la funcion para que se ejecute cada vez con el for
}


//Con for of

for(var estudiante of estudiantes){
    saludar(estudiante)
}


