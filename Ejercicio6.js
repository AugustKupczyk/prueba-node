
//Ejercicio 1
// let array = ["microondas","heladera","licuadora","plancha","lavarropas","television"];
// console.log(array.indexOf("microondas"));
// console.log(array.indexOf("licuadora"));
// console.log(array.indexOf("television"));
// let primerVariable = array.shift();
// console.log(primerVariable);
//  array.push(primerVariable);
// array.push("freezer","batidora");
// console.log(array);
// console.log(array.length);
// if(array.includes("caca")){
//     console.log ("Producto encontrado");
// }else{
//     console.log( "No existe producto");
// }
// let cadenaTexto = array.join(" ");
// console.log(cadenaTexto);
// console.log(cadenaTexto.length);
// console.log(cadenaTexto.replace("heladera","nepe"));
// let variableSplit = cadenaTexto.split(" ");
// console.log(variableSplit);
// console.log(variableSplit.length);

//Ejercicio 2
let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick","Elvis","Thor: amor y trueno."];
let peliculaMasVendida = peliculas.pop();
function ponerPeliEnMayus(pelicula){
    return pelicula.toUpperCase();
}
let peliMayusculas=ponerPeliEnMayus(peliculaMasVendida);
peliculas.unshift(peliMayusculas);
console.log(peliculas);

let proxPelis = "Counter-Strike, NOP, Vértig○,Nick○,Avatar."
let proxPelis2 = ["Counter-Strike","NOP", "Vértig○","Nick○","Avatar."];
let cadenaTexto=proxPelis2.join().slice(15);
console.log(proxPelis);
console.log(proxPelis.slice(15));
//let cadenaTextoSinCounter = cadenaTexto.slice(15);

function unirPelis(array1,array2){
    let arrayNuevo = array1.concat(array2);
     return arrayNuevo;
}

console.log(unirPelis(peliculas,cadenaTexto));
