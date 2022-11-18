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
//! isNaN() | Kendisine parametre olarak verilen değişken içeriğinin NaN değerinde olup olmadığını kontrol ederek Boolean veri türünde sonucu gösterir...
var isnanFunctionSimple = function () {
    var value1 = "A",
        value2 = 5,
        value3 = 3.45,
        value4 = NaN;
    var process1 = Number.isNaN(value1),
        process2 = Number.isNaN(value2),
        process3 = Number.isNaN(value3),
        process4 = Number.isNaN(value4);
    document.write("Değer:" + value1 + " Sonuç:" + process1 + "<br>");
    document.write("Değer:" + value2 + " Sonuç:" + process2 + "<br>");
    document.write("Değer:" + value3 + " Sonuç:" + process3 + "<br>");
    document.write("Değer:" + value4 + " Sonuç:" + process4);
};
//! isFinite() | Kendisine parametre olarak verilen değişken içeriğinin en büyük pozitif sayı ile en küçük negatif sayı aralığında olup olmadığını kontrol ederek Boolean veri türünde sonucu gösterir...
var isFiniteFunctionSimple = function () {
    var value1 = 100,
        value2 = Number.MAX_VALUE * 2;

    var process1 = Number.isFinite(value1),
        process2 = Number.isFinite(value2);

    document.write("Değer:" + value1 + " Sonuç:" + process1 + "<br>");
    document.write("Değer:" + value2 + " Sonuç:" + process2);
};
//! isInteger() | Kendisine parametre olarak verilen değişken içeriğinin tam sayı olup olmadığını kontrol ederek Boolean veri türünde sonucu gösterir...
var isIntegerFunctionSimple = function () {
    var value1 = 100,
        value2 = "A";

    var process1 = Number.isInteger(value1),
        process2 = Number.isInteger(value2);

    document.write("Değer:" + value1 + " Sonuç:" + process1 + "<br>");
    document.write("Değer:" + value2 + " Sonuç:" + process2);
};
//! isSafeInteger() | Kendisine parametre olarak verilen değişken içeriğinin güvenli bir tam sayı olup olmadığını kontrol ederek Boolean veri türünde sonucu gösterir...
var isSafeIntegerFunctionSimple = function () {
    var value1 = 45 / 3,
        value2 = 45 / 2;

    var process1 = Number.isSafeInteger(value1),
        process2 = Number.isSafeInteger(value2);

    document.write("Değer:" + value1 + " Sonuç:" + process1 + "<br>");
    document.write("Değer:" + value2 + " Sonuç:" + process2);
};
//! toFixed() | Kendisine parametre olarak verilen değişken içeriğindeki sayının ondalık hanesine kaç basamak olacağını belirleyerek yeni bir içerik oluşturur...
var toFixedIntegerFunctionSimple = function () {
    var value1 = 3.589,
        value2 = 3.589;

    var process1 = value1.toFixed(2),
        process2 = value2.toFixed(1);

    document.write("Değer:" + value1 + " Sonuç:" + process1 + "<br>");
    document.write("Değer:" + value2 + " Sonuç:" + process2);
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
    sqrt2FunctionSimple,
    isnanFunctionSimple,
    isFiniteFunctionSimple,
    isIntegerFunctionSimple,
    isSafeIntegerFunctionSimple,
    toFixedIntegerFunctionSimple
};