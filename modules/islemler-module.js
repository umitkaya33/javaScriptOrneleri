//! Javascript'te toplama işlemi
var toplaFunctionSimple = function () {
    var value1 = 5;
    var value2 = 15;
    var process = value1 + value2;
    document.write(process);
};
//! Javascript'te atamalı toplama işlemi
var atamalitoplaFunctionSimple = function () {
    var value1 = 22;
    var value2 = 15;
    value1 += value2;
    document.write(value1);
};
export {
    toplaFunctionSimple,
    atamalitoplaFunctionSimple
};