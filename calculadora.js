var num1;
var num2;
var signo;

function calculadora (x,y,z){
    if (z="+"){
        return x + y;
    } else if (z="-"){
        return x - y;
    } else if (z="*"){
        return x * y;
    } else if (signo="/"){
        return x / y;
    } else {
        console.log("No conozco ese signo");//Aqui colocar "return" en lugar de un "console.log"
    }
}
var resultado = calculadora (num1,num2,signo);
console.log("El resultado es " + resultado);