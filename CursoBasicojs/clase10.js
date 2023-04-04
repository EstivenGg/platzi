//COERCION

//LA MANERA EN QUE PODEMOS CAMBIAR UN TIPO DE VALOR A OTRO TIPO DE VALOR

var a = 4 + "7";
typeof a //=string, js esta concatenando los numeros y creyendo que lo que quiero es un string

var b = 4 * "7";
typeof a // NUMBER  js cree que es una operacion por el *

//Convertir variable en string OBLIGADO

var a= 20; //NUMBER
var b= a+ ""; //STRING
var c= String(a)//STRING
var d= Number(c)//NUMBER

//PARSEINT?

