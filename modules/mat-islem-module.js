//! MAX_VALUE | Atanabilecek en büyük pozitif sayı değeri...
var maxValueFunctionSimple = function () {
    var largestNumber = Number.MAX_VALUE;
    document.write(largestNumber);
};
//! MIN_VALUE | Atanabilecek en küçük negatif sayı değeri...
var minValueFunctionSimple = function () {
    var smallestNumber = Number.MIN_VALUE;
    document.write(smallestNumber);
};
//! POZITIVE_INFINITY | Atanabilecek en büyük pozitif sayı değerinden büyük sayılarda sonsuzluk değeri...
var pozitiveInfinityFunctionSimple = function () {
    var largestNumber = Number.POSITIVE_INFINITY;
    document.write(largestNumber);
};
//! NEGATIVE_INFINITY | Atanabilecek en küçük negatif sayı değerinden küçük sayılarda sonsuzluk değeri...
var negativeInfinityFunctionSimple = function () {
    var smallestNumber = Number.NEGATIVE_INFINITY;
    document.write(smallestNumber);
};
//! NaN | Değerin sayı olmaması durumu...
var nanFunctionSimple = function () {
    document.write("a" * "b" + 9);
};
//! E | Evler sayı değerini gösterir...
var eFunctionSimple = function () {
    var test = Math.E;
    document.write(test);
};
//! LN2 | 2 Sayısının doğal logaritma değerini gösterir...
var ln2FunctionSimple = function () {
    document.write(Math.LN2);
};
//! LN10 | 10 Sayısının doğal logaritma değerini gösterir...
var ln10FunctionSimple = function () {
    document.write(Math.LN10);
};
//! LOG2E | Evler sayısının 2 tabanına göre logaritmik değerini gösterir...
var log2eFunctionSimple = function () {
    document.write(Math.LOG2E);
};
//! LOG10E | Evler sayısının 10 tabanına göre logaritmik değerini gösterir...
var log10eFunctionSimple = function () {
    document.write(Math.LOG10E);
};
//! PI | Pi sayısını gösterir...
var piFunctionSimple = function () {
    document.write(Math.PI);
};
//! SQRT1_2 | 1/2 Sayısının karekök değerini gösterir...
var sqrt1_2FunctionSimple = function () {
    document.write(Math.SQRT1_2);
};
//! SQRT2 | 2 Sayısının karekök değerini gösterir...
var sqrt2FunctionSimple = function () {
    document.write(Math.SQRT2);
};
export {
    maxValueFunctionSimple,
    minValueFunctionSimple,
    pozitiveInfinityFunctionSimple,
    negativeInfinityFunctionSimple,
    nanFunctionSimple,
    eFunctionSimple,
    ln2FunctionSimple,
    ln10FunctionSimple,
    log2eFunctionSimple,
    log10eFunctionSimple,
    piFunctionSimple,
    sqrt1_2FunctionSimple,
    sqrt2FunctionSimple
};