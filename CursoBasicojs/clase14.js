//Condicionales: If, Else, else if


if(true){//Parte desde que todos verdad entonces si pasa el hola
    console.log("Hola")
}else{
    console.log("soy falso")
}

var edad=18;




if(edad === 18){//Parte desde que todos verdad entonces si pasa el hola
    console.log("vota 1ra vez")
}else if( edad > 18 ){//Puedo seguir validando
    console.log("votar pero no por primera vez")
}else{
    console.log("No vota")
}
//EN UNA SOLA LINEA EL IF

condition ? true: false;

var numero=1;

var resultado = numero === 1 ? "Soy 1":"Imnot";