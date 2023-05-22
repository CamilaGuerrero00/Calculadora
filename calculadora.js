console.clear();
//requerimientos
const argv =require('process').argv;
const sumar = require('./sumar');
const restar = require('./restar');
const dividir = require('./dividir');
const multiplicar = require('./multiplicar');

//ingreso por consola
const operacion = argv[2];
const num1 = argv[3];
const num2 = argv[4];
let res = 0;
//en caso de que no haga nada 
if(operacion === "nada" || operacion === "ninguna" || operacion === undefined){
     console.log('No queres nada, chau')}
else{
    // en caso de que no ingrese algun numero 
    if(typeof num1 === 'undefined' || typeof num2 === 'undefined'){
        console.log("ingrese dos numeros por favor")}
    else{ 
        // en caso de ingresar una operacion como pimer parametro y dos numeros
        switch (operacion) {
            case "suma":
            case "sumar":
            case "+":
                res = sumar.sumar(+num1, +num2);
                console.log ('el resultado de la suma es ', res)
                break;
            case "resta":
            case "restar":
            case "-":
                res = restar.restar(num1, num2);
                console.log ('el resultado de la resta es ', res)
                break;
            case "divicion":
            case "dividir":
            case "/":
                res = dividir.dividir(num1, num2);
                console.log ('el resultado de la divicion es ', res)
                break;
            case "multiplicacion":
            case "multiplicar":
            case "*":
                res = multiplicar.multiplicar(num1, num2);
                console.log ('el resultado de la multiplicacion es ', res)
                break;
            default:
                console.log("no es una operacion valida")
                break;
        }
    }
} 
