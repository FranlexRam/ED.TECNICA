//Pagos, dos metodos de pago.

var TD= "Tarjeta de debito";
var TC="Tarjeta de credito";
var metPos= "Metodo positivo";
var metNeg= "Metodo negativo";




var metodo = function (x,y) {
    if (x==TD){
        return("Ingresar datos de " + TD);
    } else if (x==TC){
        return("Ingresar datos de " + TC);
    } else {
        return("Metodo no encontrado");
    }
    }
metodo (TD);
