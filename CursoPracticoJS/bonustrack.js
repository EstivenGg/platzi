let tipoDeSuscripciones = {
    free: 'Solo puedes tomar un curso',
    basic: 'msj',
    expert: 'msj',
    expertduo: 'msj',
}



function conseguirTiposSuscripcion(suscripcion) {
    if(tipoDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripciones[suscripcion]);
        return
    }
    console.warn('No existe la sub')
}