var num1;
var num2;
var intentosNum1 = 2;//2 intentos.
var intentosNum2 = 4;//4 intentos.
var random = Math.ceil(Math.random() * 10);



alert('Ingresar dos numeros hasta adivinar (del 1 al 10).\nNum1: tienes 2 intentos para adivinarlo.\nNum2: tienes 4 intentos para adivinarlo.' + random);

for (intentosNum1 = 0; intentosNum1 < 2; intentosNum1++) {
    var num1 = prompt('Ingrese el num1:');
    var num2 = prompt('Ahora, ingresa num2:');


    if (intentosNum1 >= 0 && intentosNum2 > 0 && num1 != random && num2 != random) {

        alert('Incorrecto.\nTe quedan '+(1-intentosNum1)+' intentos de num1.\nTe quedan '+(intentosNum2-1)+' intentos de num2.');
        intentosNum2--;

    } else if (intentosNum1 >= 0 && intentosNum2 > 0 && (num1 == random || num2 == random)) {

        // if (num1 == random || num2 == random) {
            alert('Correcto, adivinaste el numero!!');
            break;
        // }
    }

}


if (num1 != random && num2 != random) {
    for (intentosNum2 = 0; intentosNum2 < 1; intentosNum2++) {
        var num2 = prompt('Ingresa solo num2:');


        if (intentosNum2 < 2 && num2 != random) {
            alert('incorrecto, te queda solo un intento.');


            if (intentosNum2 < 1) {
                for (intentosNum2 = 0; intentosNum2 < 1; intentosNum2++) {
                    var num2 = prompt('Ultimo chance, ingresa num2:');

                    if (num2 == random) {
                        alert('Felicidades, ganaste en el ultimo intento.');
                        break;
                    } else {
                        alert('Perdiste, ya no te quedan intentos.\nEl numero correcto era: ' + random);
                    }
                }
            }

        } else {
            alert('Ganaste en el 3er intento de num2!');
        }
    }

    
}
