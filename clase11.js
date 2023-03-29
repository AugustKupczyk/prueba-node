let cursos = ["Programacion","MKT","UX","Data Science","UX"];

//Destructuracion de arrays

let [programacion, mkt] = cursos;

console.log(cursos);
console.log(programacion);
console.log(mkt);

let persona = {
    nombre : "Carli",
    edad: 26,
    domicilio: "Calle falsa 123"
}


//Destructuracion de objetos literales

let {nombre, edad} = persona;
console.log(persona);
console.log(nombre);
console.log(edad);


//----------------- SPREAD OPERATOR ---------------


let peliculasAccion = ["End Game","Iron Man 3","Capitan America"];
let peliculasComedia = ["Mi pobre angelito","Que paso ayer?"];

let peliculas = [...peliculasAccion,...peliculasComedia];

console.log(peliculasAccion);
console.log(peliculasComedia);
console.log(peliculas);

let generoComedias = {
    nombreGenero: "Comedia",
    popularidad: 3,
}

let miPobreAngelito = {
    nombre: "Mi Pobre Angelito",
    duracion: 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre: "Que paso ayer?",
    duracion: 110,
    ...generoComedias
}   

console.log(generoComedias);
console.log(miPobreAngelito);
console.log(quePasoAyer);


function peliculasVistas(...nombrePelicula){
    for(let i = 0; i < nombrePelicula.length;i++){
        console.log("La persona ya vió " + nombrePelicula[i]);
    }
}

peliculasVistas("End Game","Iron Man 3","Mi pobre angelito");