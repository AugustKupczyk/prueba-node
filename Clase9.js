// let curso = {
//     cantidadAlumnos : 50,
//     docentes: ["Nacho","Javier"],
//     horario : "de 19 a 21 hs.",
//     notificaciones : function(){
//         return "El horario de la cursada es " + this.horario;
//     } 

// }

// function Curso(cantidadAlumnos,docentes,horario){
//     this.cantidadAlumnos = cantidadAlumnos;
//     this.docentes = docentes;
//     this.horario = horario;
// }

// let cursoDeProgramacion = new Curso(60,["Javier","Gerardo"], "de 19 a 21 hs.");
// console.log(cursoDeProgramacion);

// let fs = require("fs");
// let moment = require("moment");
// console.log(fs);
// let datos = fs.readFileSync(__dirname + "/prueba.txt","utf-8");

// console.log(datos);
// console.log(moment().format("MM Do YYYY"));


let heroes = require("./superheroes/index");
console.log(heroes);