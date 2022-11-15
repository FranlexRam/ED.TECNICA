const operacion =prompt('Operacion:');
location.reload;

const calculo = () => {
if (operacion.includes('+')) {
    const [num1, num2] = operacion.split('+');
    alert( Number(num1) + Number(num2));
       
} else if (operacion.includes('-')) {
    const [num1,num2] = operacion.split('-');
    alert( Number(num1) - Number(num2));
       
} else if (operacion.includes('*')) {
    const [num1,num2]=operacion.split('*');
    alert( Number(num1) * Number(num2));
        
} else if (operacion.includes('/')) {
    const [num1,num2]=operacion.split('/');
    alert( Number(num1) / Number(num2) );
      
} else {
    alert ('Datos invalidos, ingresa solo valores numericos');
}

}


console.log(`El resultado es: ${calculo()}`);
