const fs = require ("fs");

// Importar el JSON
const jsonProductos = fs.readFileSync("./productos.json","utf-8");

// Convertir de json a js
const productosImportados = JSON.parse (jsonProductos);

// productosImportados.forEach(productoActual => console.log(productoActual.name));

//Creamos un nuevo producto en js
const productoNuevo = {
    id: productosImportados.length + 1,
    name : "Licuadora",
    vendido : false,
    categorias :[
        "Electrodomesticos",
        "Hogar"
    ]
};

//PUshear el nuevo elemento al array de productos ya existentes
productosImportados.push(productoNuevo);

// Convertimos el array de js a json
const nuevosProductosJSON = JSON.stringify (productosImportados);

//Guardamos el array JSON al archivo correspondiente 
fs.writeFileSync("./productos.json",nuevosProductosJSON,"utf-8")

 console.log(productosJSON);