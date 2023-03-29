const fs = require ("fs");
const bicicletas = fs.readFileSync("./bicicletas.json","utf-8");
const bicicletasImportadas = JSON.parse (bicicletas);
// console.log(bicicletasImportadas);

module.exports = bicicletasImportadas;