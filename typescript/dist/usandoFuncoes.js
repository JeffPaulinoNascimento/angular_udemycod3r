var isEnoughToBeatMF = function (persecs) {
    return persecs < 12;
};
var distance = 14;
console.log("Is " + distance + " persecs enough to beat Millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'No'));
/*************************************************/
var call = function (name) { return console.log("foi copiado do " + name); };
call("R2");
/*************************************************************/
function inc(speedy, inc) {
    if (inc === void 0) { inc = 1; }
    return speedy + inc;
}
console.log(inc(5, 2));
console.log(inc(5));
