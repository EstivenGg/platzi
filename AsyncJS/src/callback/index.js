function sum(num1, num2) {

    return num1+num2

}

function calc(num1, num2, callback){
    return callback(num1, num2);
};
 console.log(calc(2,2, sum));

setTimeout( function (){
    console.log('Hola JS')
}, 2000) //Funcion, tiempo y argunmentos que va a necesitar

function saludo(name){
    console.log(`${name}`);
}

setTimeout(saludo, 2000, 'Estiven')