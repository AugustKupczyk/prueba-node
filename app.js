const bicicletas = require("./datosBici");


const dhBici = {
    bicicletas,
    buscarBici: function (id) {
        let bicicletaADevolver = this.bicicletas.find(bicicleta =>{
            return bicicleta.id == id;
        });

        if(bicicletaADevolver){
            return bicicletaADevolver;
        }else{
            return {};
        }
    },
    venderBici: id => {
        const biciBuscada = this.buscarBici(id);
         if(biciBuscada){
            biciBuscada.vendida = "si";
            return biciBuscada;
        }else{
            return ("Bicicleta no encontrada");
        }
    },
    biciParaLaVenta: bicicletas.filter(bici => bici.vendida === "no"),
    totalDeVentas: bicicletas.reduce((acumulador, biciActual) =>{
        if(biciActual.vendida === "si"){
             acumulador += biciActual.precio;
        }
        return acumulador;
    },0)

    }
// dhBici.venderBici(2);
// dhBici.venderBici(0);
// console.log("BiciVendida",dhBici.venderBici(2));
// console.log("Bicis no veniddas",dhBici.biciParaLaVenta);
console.log("Total de la suma de las bicis vendidas",dhBici.totalDeVentas);
console.log("Todas las bicis",dhBici.bicicletas);