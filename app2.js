let importar = require ("./collectibles");

/* 2 */
let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

/* 3 */
let unifiedCollectibles = [...hotToys,...bandai,...starWars];

/* 4 */

let collectibles = {
    figuras:unifiedCollectibles,

    /* 5 - a */
    listFiguras: function(){
        this.figuras.forEach (figura =>{
            console.log ( "------");
            console.log("Marca " + figura.marca);
            console.log("Marca " + figura.nombre);
            console.log("Marca " + figura.precio);
            console.log("Marca " + figura.stock);
        });

    
    },
    /* 5 - b */
    figurasbyBrand:function(marca){
        let figurasADevolver = this.figuras.filter ( figura =>{
            return figura.marca == marca;
        });
        return figurasADevolver;
    }


}


collectibles.listFiguras();
console.log(collectibles.figurasbyBrand("Hot Toys"));