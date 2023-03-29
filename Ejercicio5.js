// let multiplicar = (valor1,valor2) => valor1*valor2;
// let sumar = (valor1,valor2) => valor1+valor2;

const { text } = require("stream/consumers");

// function alquilerDeUnVehiculo(tipoVehiculo,diasAlquiler,sillaBebe){
// let valorConSilla = 0;
//  if(sillaBebe == true){
//     valorConSilla = multiplicar(1200,diasAlquiler);
// }
//  if (tipoVehiculo == "Compacto"){
//     return  multiplicar(14000,diasAlquiler) + valorConSilla;
//  }  
// if(tipoVehiculo == "Mediano"){
//     return multiplicar(17000,diasAlquiler) + valorConSilla;
// }
// if(tipoVehiculo == "Camioneta"){
//     return multiplicar(28000,diasAlquiler) + valorConSilla;
// }else{
//     return "No es válido el tipo";
// }

// }


// console.log(alquilerDeUnVehiculo("Mediano",4,true));



// function callBack (tipoHamburguesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla){
//     let valorEntero = 0;
//     if (jamon === true) valorEntero += 30;
//     if (queso === true) valorEntero += 25;
//     if (salsaTomate === true) valorEntero += 5;
//     if (mayonesa === true) valorEntero += 5;
//     if (mostaza === true) valorEntero += 5;
//     if (tomate === true) valorEntero += 15;
//     if (lechuga === true) valorEntero += 10;
//     if (cebolla === true) valorEntero += 10;
//     if(tipoHamburguesa === "Carne a la parrilla"){
//         return valorEntero + 1800;
//     }
//     if(tipoHamburguesa === "Pollo"){
//         return valorEntero + 1500;
//     }
//     if (tipoHamburguesa === "Veggie"){
//         return valorEntero + 1200;
//     }
    
// }

// function devolverMensaje (nombre,apellido,tipoHamburguesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla){
// return console.log("Estimado" + " " +  nombre + " " + apellido + " " + "el total es" + " " + callBack(tipoHamburguesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla));

// }

// devolverMensaje("august","kupczk","Pollo",true,true,true,true,true,true,true,false);




// let arrayFrase = [
//     "No",
//     "he",
//     "fracasado,",
//     "simplemente",
//     "me",
//     "he",
//     "topado",
//     "con",
//     "diez",
//     "mil",
//     "soluciones",
//     "equivocadas"
//   ];
  
//   let fraseNueva = arrayFrase.join(" ");
  
//   console.log(fraseNueva);



// let estudiantes = [
//     {
//       nombre: 'Alvaro',
//       promedio : 9,
//       curso : 'Android',
//     },
//     {
//       nombre: 'Daniel',
//       promedio : 6,
//       curso : 'Full Stack',
//     },
//     {
//       nombre: 'Alexis',
//       promedio : 3,
//       curso : 'iOS',
//     },
//   ]

  
//   estudiantes.push({nombre:"Juan",promedio:5,curso:"iOS"});
//   estudiantes.push ({nombre:"Miguel",promedio:2,curso:"Android"});
  
//   console.log(estudiantes);

// let estudiantes = [
 
// ]

// estudiantes.unshift({nombre:"Francisco",promedio:2,curso:"Android"});
// estudiantes.unshift({nombre:"Mariana",promedio:9,curso:"Full stack"});
// console.log(estudiantes);


function menciona (texto,palabra){
if (texto.indexOf(palabra) >-1){
    return true;
}
else{
    return false;
}
  
}

// let texto1 = "hola mundo";
// console.log(texto1.indexOf("hola"));


console.log(menciona("Hola Mundo","Mundo"));
