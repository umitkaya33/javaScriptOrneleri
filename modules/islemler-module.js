//! Toplama işlemi
var toplaFunctionSimple = function () {
    var value1 = 5;
    var value2 = 15;
    var process = value1 + value2;
    document.write(process);
};
//! Atamalı toplama işlemi
var atamalitoplaFunctionSimple = function () {
    var value1 = 22;
    var value2 = 15;
    value1 += value2;
    document.write(value1);
};
//! Çıkartma işlemi
var cikartFunctionSimple = function () {
    var value1 = 22;
    var value2 = 44;
    var process = value1 - value2;
    document.write(process);
};
//! Atamalı çıkartma işlemi
var atamalicikartFunctionSimple = function () {
    var value1 = 11;
    var value2 = 15;
    value1 -= value2;
    document.write(value1);
};
export {
    toplaFunctionSimple,
    atamalitoplaFunctionSimple,
    cikartFunctionSimple,
    atamalicikartFunctionSimple
};