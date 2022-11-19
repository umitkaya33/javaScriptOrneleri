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
var toFixedFunctionSimple = function () {
    var value1 = 3.589,
        value2 = 3.589;

    var process1 = value1.toFixed(2),
        process2 = value2.toFixed(1);

    document.write("Değer:" + value1 + " Sonuç:" + process1 + "<br>");
    document.write("Değer:" + value2 + " Sonuç:" + process2);
};
//! toPrecision() | Kendisine parametre olarak verilen değişken içeriğindeki sayının kaç basamak olacağını belirleyerek yeni bir içerik oluşturur...
var toPrecisionFunctionSimple = function () {
    var value1 = 33.499,
        value2 = 33.499;

    var process1 = value1.toPrecision(3),
        process2 = value2.toPrecision(6);

    document.write("Değer:" + value1 + " Sonuç:" + process1 + "<br>");
    document.write("Değer:" + value2 + " Sonuç:" + process2);
};
//! toExponential() | Kendisine parametre olarak verilen değişken içeriğindeki sayının ondalık hanesinde kaç basamak olacağını belirleyerek kalan değeri üstel hale getirerek yeni bir içerik oluşturur...
var toExponentialFunctionSimple = function () {
    var value1 = 5.499,
        value2 = 5.54599;

    var process1 = value1.toExponential(2),
        process2 = value2.toExponential(3);

    document.write("Değer:" + value1 + " Sonuç:" + process1 + "<br>");
    document.write("Değer:" + value2 + " Sonuç:" + process2);
};
//! parseInt() | Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini tam sayı haline dönüştürerek yeni bir içerik oluşturur...
var parseIntFunctionSimple = function () {
    var data1 = "34 Lira",
        data2 = "52 Lira";

    var price1 = parseInt(data1),
        price2 = parseInt(data2),
        total = price1 + price2;
    document.write("1.Ürün:" + data1 + "<br>");
    document.write("2.Ürün:" + data2 + "<br>");
    document.write("Toplam:" + total + " Lira");
};
//! parseFloat() | Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini ondalıklı sayılar haline dönüştürerek yeni bir içerik oluşturur...
var parseFloatFunctionSimple = function () {
    var lira = "1862 Türk Lirası",
        dolarkuru = "18.62";
    document.write(`${lira} = `);
    var price1 = parseFloat(lira),
        price2 = parseFloat(dolarkuru);
    document.write(price1 / price2 + "$");
};
//! toString() | Değiken içeriğini düz bir metne dönüştürür...
var toStringFunctionSimple = function () {
    var test1 = 5,
        test2 = 3.14,
        test1Data = typeof test1,
        test2Data = typeof test2;
    document.write(test1 + test1Data + "<br>");
    document.write(test2 + test2Data + "<br>");

    var convert1 = test1.toString(),
        convert2 = test2.toString(),
        convert1Data = typeof convert1,
        convert2Data = typeof convert2;
    document.write(convert1 + convert1Data + "<br>");
    document.write(convert2 + convert2Data + "<br>");
};
//! String() | Değiken içeriğini mutlak olarak string veri türüne dönüştürür...
var stringFunctionSimple = function () {
    var one = 10,
        two = 3.14,
        three = Boolean(0),
        four = Boolean(1),
        five = ["Javascript", "PHP"],
        six = new Date();
    var oneData = typeof one,
        twoData = typeof two,
        threeData = typeof three,
        fourData = typeof four,
        fiveData = typeof five,
        sixData = typeof six;
    document.write("Veri Türü: " + oneData + " Değer: " + one + "<br>");
    document.write("Veri Türü: " + twoData + " Değer: " + two + "<br>");
    document.write("Veri Türü: " + threeData + " Değer: " + three + "<br>");
    document.write("Veri Türü: " + fourData + " Değer: " + four + "<br>");
    document.write("Veri Türü: " + fiveData + " Değer: " + five + "<br>");
    document.write("Veri Türü: " + sixData + " Değer: " + six + "<br><br>");
    var oneConvert = String(one),
        twoConvert = String(two),
        threeConvert = String(three),
        fourConvert = String(four),
        fiveConvert = String(five),
        sixConvert = String(six);
    var oneConvertData = typeof oneConvert,
        twoConvertData = typeof twoConvert,
        threeConvertData = typeof threeConvert,
        fourConvertData = typeof fourConvert,
        fiveConvertData = typeof fiveConvert,
        sixConvertData = typeof sixConvert;
    document.write("Veri Türü: " + oneConvertData + " Değer: " + oneConvert + "<br>");
    document.write("Veri Türü: " + twoConvertData + " Değer: " + twoConvert + "<br>");
    document.write("Veri Türü: " + threeConvertData + " Değer: " + threeConvert + "<br>");
    document.write("Veri Türü: " + fourConvertData + " Değer: " + fourConvert + "<br>");
    document.write("Veri Türü: " + fiveConvertData + " Değer: " + fiveConvert + "<br>");
    document.write("Veri Türü: " + sixConvertData + " Değer: " + sixConvert);
};
//! Number() | Değiken içeriğini mutlak olarak number veri türüne dönüştürür...
var numberFunctionSimple = function () {
    var one = true,
        two = false,
        three = new Date,
        four = "25";
    var oneData = typeof one,
        twoData = typeof two,
        threeData = typeof three,
        fourData = typeof four;

    document.write("Veri Türü: " + oneData + " Değer: " + one + "<br>");
    document.write("Veri Türü: " + twoData + " Değer: " + two + "<br>");
    document.write("Veri Türü: " + threeData + " Değer: " + three + "<br>");
    document.write("Veri Türü: " + fourData + " Değer: " + four + "<br><br>");

    var oneConvert = Number(one),
        twoConvert = Number(two),
        threeConvert = Number(three),
        fourConvert = Number(four);

    var oneConvertData = typeof oneConvert,
        twoConvertData = typeof twoConvert,
        threeConvertData = typeof threeConvert,
        fourConvertData = typeof fourConvert;

    document.write("Veri Türü: " + oneConvertData + " Değer: " + oneConvert + "<br>");
    document.write("Veri Türü: " + twoConvertData + " Değer: " + twoConvert + "<br>");
    document.write("Veri Türü: " + threeConvertData + " Değer: " + threeConvert + "<br>");
    document.write("Veri Türü: " + fourConvertData + " Değer: " + fourConvert);

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
    toFixedFunctionSimple,
    toPrecisionFunctionSimple,
    toExponentialFunctionSimple,
    parseIntFunctionSimple,
    parseFloatFunctionSimple,
    toStringFunctionSimple,
    stringFunctionSimple,
    numberFunctionSimple
};