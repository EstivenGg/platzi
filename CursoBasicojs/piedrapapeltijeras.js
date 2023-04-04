var jugador;
var maquina;

function Juego(juador, maquina){
    if (jugador == "Papel" && maquina == "Tijeras"){
        console.log("Perdiste")
        return
    }else if (jugador == "Tijeras" && maquina == "Piedra"){
        console.log("Perdiste")
        return
    }else if (jugador == "Piedra" && maquina == "Papel"){
        console.log("Perdiste")
        return
    }else if  (jugador==maquina){
        console.log("Empate")
        return
    }else{
        console.log("Ganaste")
        return
    }
}

function JuegoS(juador, maquina){
    switch(juador+maquina){
        case "PapelTijeras":
        case "TijerasPiedra":
        case "PiedraPapel":
            console.log("Perdiste")
        break;
        case "TijerasPapel":
        case "PiedraTijeras":
        case "PapelPiedra":
            console.log("Ganaste")
        break;
        case "TijerasTijeras":
        case "PiedraPiedra":
        case "PapelPapel":
                console.log("Empate")
            break;
        default:
            console.log("NaN")
    }
}


