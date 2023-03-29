// let cursos = [
//     ["html5", 4000],
//     ["css3", 5000],
//     ["javascript", 10000],
//     ["react", 7000],
//     ["nodejs", 15000]
//   ];
  
//   let cursosElegidos = ["HTML5", "JAVASCRIPT", "REACT"];

//   function calcularMonto(catalogo, cursosAlumno) {
//     let monto = 0;
//     for (let i = 0; i < catalogo.length; i++) {
//       const nombreCursoMayus = catalogo[i][0].toUpperCase();
//       if(cursosAlumno.includes(nombreCursoMayus)){
//         monto = monto + catalogo [i][1];
//       }

//   }
//   return monto;

// }
// console.log(calcularMonto(cursos,cursosElegidos));
  
//   function facturar(nombre, apellido, catalogoCursos, cursosAlumno,callback) {
//     let montoTotal = callback(catalogoCursos, cursosAlumno);
//     console.log("Estimado" + " " +  nombre + " " + apellido + ", en funcion de los cursos seleccionados:");

//     for(let i = 0; i<cursosAlumno.length;i++){
//       console.log(i + 1 + ".-" + cursosAlumno[i]);
//     }

//     console.log("El monto total a pagar es de: $" + montoTotal);
//     console.log("Bienvenido a la gran aventura de Digital House.");

//     return [nombre + " " + apellido,montoTotal];

//   }

//   facturar("August","Kupczyk",cursos,cursosElegidos,calcularMonto);



// let gradudadosHtml = "30 45 25 34 18 23 16 50 72 70";
// let graduadosCss = "50 45 71 34 23 45 65 75 63 43 74 70";
// let graduadosJS = "70 65 58 45 23 57 34 17 72";
// let graduadosNS = "45 56 73 34 65 72 70 32";

// let graduadosHtmlArray = gradudadosHtml.split(" ");
// let graduadosCssArray = graduadosCss.split(" ");
// let graduadosJSArray = graduadosJS.split(" ");
// let graduadosNSArray = graduadosNS.split(" ");

// function calcularPromedio (arrayhtml,arraycss,arrayjs,arrayns,seleccion){
//     switch (seleccion){
//         case 1:
//             return "El promedio del curso HTML es de " + promedio(arrayhtml);
//         case 2:
//             return "El promedio del curso CSS es de " + promedio(arraycss);
//         case 3:
//             "El promedio del curso Javascript es de " + promedio(arrayjs);
//         case 4:
//             "El promedio del curso NodeJS es de " + promedio(arrayns);
//         default:
//             return "Los valores asignados a cada curso son:" + 
//             "\nHTML:" + arrayhtml +
//             "\nCSS:"  + arraycss + 
//             "\nJS:" + arrayjs + 
//             "\nNodeJS:" + arrayns;
//     }
// }

// function promedio (valores){
//     let suma = 0;
//     for(let i = 0; i < valores.length;i++){
//         suma+= Number(valores[i]); 
//     }
//     return suma / valores.length;
// }

// // console.log(promedio([40,50]));
// // console.log(promedio(graduadosHtmlArray));

// console.log(calcularPromedio(graduadosHtmlArray,graduadosCssArray,graduadosJSArray,graduadosNSArray,4));