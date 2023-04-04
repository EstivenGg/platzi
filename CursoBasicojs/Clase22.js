//OBJETOS

var objeto = {}; //Esto es un objeto

var miAuto= { //Todo el objeto
    marca: "Toyota",
    modelo:"Corolla",
    annio:2020,
    detalleDelAuto: function(){
        console.log('Auto '+this.modelo+ this.annio)//this ahce referencia al objeto global, es decir al auito
    }
}


miAuto.marca //La forma de traer algo especifico de un objeto
miAuto.annio