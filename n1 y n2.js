var n1 = 2;
var n2 = 3;
var In1 = 2;
var In2 = 4;
var n1c = n1;
var n2c = n2;

var resultado = function (n1,n2) {
    if (In1>=0 && In2>0 && n1!=n1c && n2!=n2c){
        if (In1>0 && In2>0){
            console.log('Ingresar n1 y n2');
            while (In1>0){
                console.log('Te quedan ' + In1 + ' intentos de n1');
                In1--  
            }
            while (In2>0){
                console.log('Te quedan ' + In2 + ' intentos de n2');
                In2--  
            }
          
        } else{
            console.log('Ingresar solo n2');
            while (In2>0){
                console.log('Te quedan ' + In2 + ' intentos de n2');
                In2--  
            }
            console.log('Te quedan ' + In2 + ' intentos de n2');
        }
    } else if (n1!=n1c && n2!=n2c){
        console.log('Perdiste!');
        console.log('Te quedan ' + In1 + ' intentos de n1');
        console.log('Te quedan ' + In2 + ' intentos de n2');
    } else {
        console.log('Ganaste!');
    }
}

resultado (2,3);