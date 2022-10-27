//Pagos, dos metodos de pago.

var TD= "Tarjeta de debito";
var TC="Tarjeta de credito";
var metPos= "Metodo positivo"


var metodo = function (x) {
    if (x==TD){
        console.log("Ingresar datos de " + TD);
    } else if (x==TC){
        console.log("Ingresar datos de " + TC);
    } else {
        console.log("Metodo no encontrado");
    }
    }
metodo (TD);
