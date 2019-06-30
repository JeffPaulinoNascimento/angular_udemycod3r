"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_ships_1 = require("./base-ships"); //caminho relativo a partir de onde esse arquivo esta
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = _super.call(this, "hiperdrive") || this;
        _this.cargoContainers = 3;
        return _this;
    }
    //SOBRESCRITA DO METODO
    MilleniumFalcon.prototype.saltarParaHiperEspaco = function () {
        var math = Math.random();
        if (math >= 0.5) {
            console.log("math = " + math);
            _super.prototype.saltarParaHiperEspaco.call(this);
        }
        else {
            console.log("math =  " + math);
            console.log("Falha ao entrar no hiper espaço");
        }
    };
    return MilleniumFalcon;
}(base_ships_1.Spacecraft));
exports.MilleniumFalcon = MilleniumFalcon;
