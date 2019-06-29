function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log(inc(5, 5));
console.log(inc(5));
console.log("----------------------------------------");
function optionalParameter(speedy, inc) {
    var i = inc || 1;
    return speedy + 1;
}
console.log(optionalParameter(5, 5));
console.log(optionalParameter(5));
console.log("----------------------------------------");
var call;
call = function (name) { return console.log("Do you copy, " + name + "?"); };
call("R2");
console.log("----------------------------------------");
console.log("Parametros REST");
function countJedis(jedis) {
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
console.log(countJedis([2, 3, 4]));
console.log("Sem passar colchetes na chamada do metodo, basta adicionar ... antes do parametro de array ");
function countJedisREST() {
    var jedis = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        jedis[_i] = arguments[_i];
    }
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
console.log(countJedisREST(2, 3, 4)); //sem o colchetes
console.log(countJedisREST(2, 3, 4, 5, 6, 7)); //sem o colchetes
console.log(countJedisREST(10, 10, 10)); //sem o colchetes
