let autosImportados = require('./autos')

let persona={
    nombre:"Juan",
    capacidadDePagoEnCuotas:20000,
    capacidadDePagoTotal: 100000,
 }

let concesionaria = {

   autos: autosImportados,

   buscarAuto: function (patente) {
      let autoBuscado = this.autos.find(auto => auto.patente == patente);
      if (autoBuscado == undefined) {
         return null
      } else {
         return autoBuscado
      }
   },

   venderAuto: function (patente) {
      let autoVendido = this.buscarAuto(patente)

      if (autoVendido != null) {
         autoVendido.vendido = true;
      }
   },

   autosParaLaVenta: function() {
     let autosParaVender = this.autos.filter(function(auto) {
      return auto.vendido == false  
   }) 
      return autosParaVender;
   },

   autosNuevos: function(){
      let autosNuevos = this.autosParaLaVenta();
      return autosNuevos.filter(auto => auto.km <= 100)

   },

   listaDeVentas: function () {
      let autosVendidos = this.autos.filter((auto)=>auto.vendido);
      return autosVendidos.map(auto => auto.precio)
   },

   totalDeVentas: function () {
      let totalDeVentas = this.listaDeVentas();
      return totalDeVentas.reduce((total,auto)=> total += auto,0);
    },
    puedeComprar:function (auto, persona) {
        let montoMaximo = persona.capacidadDePagoTotal;
        console.log(persona.capacidadDePagoTotal);
           if (auto.precio <= montoMaximo && auto.cuotas <= persona.capacidadDePagoEnCuotas) {
         return true;
        } else {
         return false;
           }
    },
}

console.log(concesionaria.puedeComprar(autosImportados[1],persona));
