const nombres = ["Nacho","Jose","Lucas"];
const numeros = [1,2,3,4,5];

// ----------- FOR EACH --------

// nombres.forEach(function(nombreActual){
//     console.log(nombreActual);
// });

// numeros.forEach(function(numeroActual){
//    const doble = numeroActual * 2;
//    console.log(doble);
// });



//  ----------- MAP -----------

// const dobles = numeros.map(function(numeroActual){
//     return numeroActual * 2;
// });

// console.log(dobles);

// const nombresMayusc = nombres.map(function(nombreActual){
//     return nombreActual.toUpperCase();
// });

// console.log(nombresMayusc);


// -------------- FILTER -----------
const numerosPares = numeros.filter(function(numeroActual){
    return numeroActual%2 === 0;
});

console.log(numerosPares);