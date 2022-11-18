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
export {
    maxValueFunctionSimple,
    minValueFunctionSimple,
    pozitiveInfinityFunctionSimple,
    negativeInfinityFunctionSimple,
    nanFunctionSimple,
    eFunctionSimple
};