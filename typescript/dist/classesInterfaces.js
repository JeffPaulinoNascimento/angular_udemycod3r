"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
//* importa tudo
// _ é uma variavel padrão do lodash, igual a variavel $ do jquery
var _ = require("lodash");
// coloca um titulo com tamanho 40 com o sinal de = antes e depois do texto
console.log(_.pad("Exemplos Typescrip", 40, "="));
var spacecraft = new base_ships_1.Spacecraft("hiperdrive");
spacecraft.saltarParaHiperEspaco();
var milleniumFalcon = new starfighters_1.MilleniumFalcon();
milleniumFalcon.saltarParaHiperEspaco();
var naveBoaParaCarga = function (nave) { return nave.cargoContainers > 2; };
console.log("Essa falcon \u00E9 boa para o trabalho? " + (naveBoaParaCarga(milleniumFalcon) ? 'YES' : 'NÃO'));
