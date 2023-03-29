// Ejercicio 1 con if y else
// let perfil = "invitado";

// if(perfil == "") return console.log("Debe especificar el perfil del usuario.");
// if (perfil == "administrador" || "ADMINISTRADOR" || "Administrador") return console.log ("Usted sólo tiene permisos de registrar,modificar y consultar datos");  
// if (perfil == "asistente"|| "ASISTENTE" || "Asistente") return console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos.");
// if(perfil == "invitado" || "INVITADO" || "Invitado") return console.log("Usted sólo tiene permisos de consultar datos.");
// return console.log("Debe especificar un perfil válido");

//Ejercicio 2
//let pagoMes = 2880;
// let consumoKWH = 450;
// let mensaje  = consumoKWH > 300 ? pagoMes*(100/20) : pagoMes;
//console.log(`Valor: ${mensaje}`);
// console.log("Debido a que su hogar tuvo un consumo de " + consumoKWH + " " + "KWH" + " " +  "en base al ajuste tarifario(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),cumplimos con informarle que se ha ajustado el total a pagar, que será de " + ""  + mensaje);


//Ejercicio 3
// let palabra = "perro";

// switch (palabra){
//     case "perro":
//         console.log("dog");
//         break;
//     case "gato":
//         console.log("cat");
//         break;
//     case "puerta":
//         console.log("door");
//         break;
//     case "ventana":
//         console.log("window");
//         break;
//     case "mesa":
//         console.log("table");
//         break;
//     default:
//         console.log("La palabra ingresada es incorrecta");
// }


//Ejercicio 4

// let valor1 = 10; 
// let valor2 = 2;
// let resultado;
// let operacion = "sumar";

// switch(operacion){
//     case "sumar":
//          resultado = valor1+valor;
//         console.log("El resultado de sumar " + valor1 + " " + "+" + " " + valor2 + " " + "es" + " " + resultado);
//         break;
//     case "restar":
//          resultado = valor1-valor2;
//         console.log("El resultado de restar " + valor1 + " " + "-" + " " + valor2 + " " + "es" + " " + resultado);
//         break;
//     case "multiplicar":
//          resultado = valor1*valor2;
//         console.log("El resultado de multiplicar " + valor1 + " " + "*" + " " + valor2 + " " + "es" + " " + resultado);
//         break;
//     case "dividir":
//         resultado = valor1/valor2;
//         console.log("El resultado de dividir " + valor1 + " " + "/" + " " + valor2 + " " + "es" + " " + resultado);
//         break;
//     default:
//         console.log("Las operaciones aceptadas son: sumar - restar- multiplicar- dividir.");
// }

//Ejercicio Extra
let velocidad = 210;
let altura = 200;

if (velocidad >= 268 && velocidad <= 278 && altura >=150 && altura <=300){
    console.log("El avion esta listo");
} else {
    return console.log ("El avion no está listo");
}




