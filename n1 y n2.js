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
            In1=In1-1;
            In2=In2-1;
            console.log(In1);
        } else{
            console.log('Ingresar solo n2');
            In2=In2-1;
            console.log(In2);
        }
    } else if (n1 != n1c && n2 != n2c){
        console.log('Perdiste');
    } else {
        console.log('Ganaste!');
        console.log('aquiii');
    }
}

resultado (2,3);