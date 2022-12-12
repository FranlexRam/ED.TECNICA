// //SOLUCION #1:
// // function arbol (numPisos) {
// //     for (let i = 0; i < numPisos; i++) {
// //       let asterisco = '*';
// //       console.log('.'.repeat(numPisos - i - 1), asterisco.repeat(i), asterisco, asterisco.repeat(i));
      
// //     }
// //   }
// //   arbol(15);


// //SOLUCION #2:
// function arbol(numPisos) {
//     let i = 0;
//     while (i < numPisos) {
//         let asterisco = '*';
//         console.log('.'.repeat(numPisos - i), asterisco.repeat(i), asterisco, asterisco.repeat(i));
//         i++;  
//     }
// }
// arbol(6);



// PRACTICANDO:

function arbol(num) {
    for (let i = 0; i < num; i++) {
        let asterisco = '*';
        console.log(' '.repeat(10 + num - i), asterisco.repeat(i), asterisco, asterisco.repeat(i));
        
    }
}
arbol(31);