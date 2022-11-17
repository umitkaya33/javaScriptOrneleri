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
//! Çarpma işlemi
var carpFunctionSimple = function () {
    var value1 = 53;
    var value2 = 66;
    var process = value1 * value2;
    document.write(process);
};
//! Atamalı çarpma işlemi
var atamalicarpFunctionSimple = function () {
    var value1 = 11;
    var value2 = 345;
    value1 *= value2;
    document.write(value1);
};
//! Bölme işlemi
var bolFunctionSimple = function () {
    var value1 = 564;
    var value2 = 66;
    var process = value1 / value2;
    document.write(process);
};
//! Atamalı bölme işlemi
var atamalibolFunctionSimple = function () {
    var value1 = 5411;
    var value2 = 345;
    value1 /= value2;
    document.write(value1);
};
//! Mod Alma işlemi
var modFunctionSimple = function () {
    var value1 = 43;
    var value2 = 11;
    var process = value1 % value2;
    document.write(value1 + " Sayısının " + value2 + "'ile bölümünden Kalan:" + process);
};
//! Atamalı mod Alma işlemi
var atamalimodFunctionSimple = function () {
    var value1 = 43;
    var value2 = 5;
    value1 %= value2;
    document.write(value1);
};
//! Üs Alma işlemi
var usFunctionSimple = function () {
    var value1 = 5;
    var value2 = 4;
    var process = value1 ** value2;
    document.write(value1 + " üzeri " + value2 + "=" + process);
};
//! Atamalı üs Alma işlemi
var atamaliusFunctionSimple = function () {
    var value1 = 2;
    var value2 = 6;
    document.write(value1 + " üzeri " + value2 + "=")
    value1 **= value2;
    document.write(value1);
};
export {
    toplaFunctionSimple,
    atamalitoplaFunctionSimple,
    cikartFunctionSimple,
    atamalicikartFunctionSimple,
    carpFunctionSimple,
    atamalicarpFunctionSimple,
    bolFunctionSimple,
    atamalibolFunctionSimple,
    modFunctionSimple,
    atamalimodFunctionSimple,
    usFunctionSimple,
    atamaliusFunctionSimple
};