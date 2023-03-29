//Ejer 1
// let operaciones = [100,50,-50,-100,200];
// function calculaSaldos (array){
// let depositos = 0;
// let retiros = 0;
// let saldoActual = 0;

// for(let i = 0; i < array.length; i++){
//     let monto = array[i];
//     saldoActual += monto;

//     if(monto >= 0){
//     depositos += monto;
//     }else{
//         retiros += monto * (-1);
//     }

   
//     }
// return [depositos,retiros,saldoActual];
// }

// const informeSaldos = (nombre,apellido,operaciones,cb) => {
//     const saldos = cb (operaciones);

//     console.log("Estimada" + nombre + " " + apellido);
//     console.log("El monto total de los depositos es de:" + " " + saldos[0]);
//     console.log("El monto total de los retiros es de:" + " " + saldos[1]);
//     console.log("Por lo tanto, su saldo actual es de:" + " " + saldos[2]);
// }

// console.log(informeSaldos("Yanina","Gutierrez",operaciones,calculaSaldos));

// Ejer 2
// function tablaDeMultiplicar() {
//     let primero = 1;
//     let ultimo = 10;
//     while(primero<=ultimo){
//         resultado=i*primero;
//         console.log(numero + " "  + "*" + " " + i + " " + "=" + " " + resultado);
//         i++;
//     }
// }
// tablaDeMultiplicar(5);

// function reporteDePasajeros(estacion){
// 	let pasajeros = 200;
// 	const respuesta = [];
// 	for (let i = 0; i <= estacion; i++) {
// 		if (i === 5) {
// 			pasajeros += 40;
// 		}else if (i !== 0) {
// 			pasajeros += 20;
// 		}
// 		 respuesta.push(`En la estación ${i} hay ${pasajeros} pasajeros arriba del tren`);
// 	}
// 	return respuesta;
// }
// console.log(reporteDePasajeros(5));


function laClaveSecreta(mensaje) { 
    return mensaje.reverse().join("").replace(/\*+/g, "");
   }
   console.log(laClaveSecreta([ "*","s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]));  