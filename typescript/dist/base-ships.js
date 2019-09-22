"use strict";
exports.__esModule = true;
var Spacecraft = (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.saltarParaHiperEspaco = function () {
        console.log("Entrando no hiper espaco com " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
