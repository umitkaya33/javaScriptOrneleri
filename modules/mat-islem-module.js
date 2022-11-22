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
//! String() | Değişken içeriğini mutlak olarak string veri türüne dönüştürür...
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
//! Number() | Değişken içeriğini mutlak olarak number veri türüne dönüştürür...
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
//! valueOf() | Değişken içeriğini tam anlamıyla aktarımını sağlayarak yeni bir içerik oluşturur...
var valueOfFunctionSimple = function () {
    var one = 15,
        two = "44.33";
    var oneData = typeof one,
        twoData = typeof two;

    document.write("Değer: " + one + " Veri Türü: " + oneData + "<br>");
    document.write("Değer: " + two + " Veri Türü: " + twoData + "<br>");

    var oneConvert = one.valueOf(),
        twoConvert = two.valueOf();

    var oneConvertData = typeof oneConvert,
        twoConvertData = typeof twoConvert;

    document.write("Değer: " + oneConvert + " Veri Türü: " + oneConvertData + "<br>");
    document.write("Değer: " + twoConvert + " Veri Türü: " + twoConvertData + "<br>");
};
//! ceil() | Kendisine parametre olarak verilen ondalıklı sayıyı yukarı yuvarlar...
var ceilFunctionSimple = function () {
    var one = 3.12,
        two = 56278.1234532;
    var process1 = Math.ceil(one),
        process2 = Math.ceil(two);

    document.write(one + " = " + process1 + "<br>");
    document.write(two + " = " + process2);
};
//! floor() | Kendisine parametre olarak verilen ondalıklı sayıyı aşağı yuvarlar...
var floorFunctionSimple = function () {
    var one = 4.13,
        two = 56.1234532;
    var process1 = Math.floor(one),
        process2 = Math.floor(two);

    document.write(one + " = " + process1 + "<br>");
    document.write(two + " = " + process2);
};
//! round() | Kendisine parametre olarak verilen ondalıklı sayıyı kendisine en yakın tam sayıyı kontrol ederek yukarı veya aşağı yuvarlar...
var roundFunctionSimple = function () {
    var one = 2.49,
        two = 2.50,
        three = 2.51;
    var process1 = Math.round(one),
        process2 = Math.round(two),
        process3 = Math.round(three);

    document.write(one + " = " + process1 + " Aşağı Yuvarlandı" + "<br>");
    document.write(two + " = " + process2 + " Yukarı Yuvarlandı" + "<br>");
    document.write(three + " = " + process3 + " Yukarı Yuvarlandı");
};
//! trunc() | Kendisine parametre olarak verilen ondalıklı sayının ondalık kısmını kaldırarak tam sayı değerini oluşturur...
var truncFunctionSimple = function () {
    var one = 3.49,
        two = 1.23456789987;

    var process1 = Math.trunc(one),
        process2 = Math.trunc(two);

    document.write(one + " = " + process1 + "<br>");
    document.write(two + " = " + process2);
};
//! random() | 0 ile 1 arasında rastgele sayı üretir...
var randomFunctionSimple = function () {
    var process1 = Math.random(),
        process2 = Math.random();

    document.write(process1 + "<br>");
    document.write(process2);
};
//! sign() | Kendisine parametre olarak verilen değerin işaretini bulur...
var signFunctionSimple = function () {
    var one = 54,
        two = -23,
        three = 0,
        four = "44 Değeri";
    var process1 = Math.sign(one),
        process2 = Math.sign(two),
        process3 = Math.sign(three),
        process4 = Math.sign(four);

    document.write(one + " = " + process1 + "<br>");
    document.write(two + " = " + process2 + "<br>");
    document.write(three + " = " + process3 + "<br>");
    document.write(four + " = " + process4);

};
//! min() | Kendisine parametre olarak verilen sayı değerlerinin en küçüğünü bulur...
var minFunctionSimple = function () {
    var one = 54333,
        two = -23353,
        three = 0,
        four = -7913;
    var calculate = Math.min(one, two, three, four);
    document.write(one + " " + two + " " + three + " " + four + " Sayılarının en küçüğü " + calculate);
};
//! max() | Kendisine parametre olarak verilen sayı değerlerinin en büyüğünü bulur...
var maxFunctionSimple = function () {
    var one = 67787,
        two = 67886,
        three = 67889,
        four = 67877;
    var calculate = Math.max(one, two, three, four);
    document.write(one + " " + two + " " + three + " " + four + " Sayılarının en büyüğü " + calculate);
};
//! pow() | Kendisine parametre olarak verilen iki sayının üssünü bulur...
var powFunctionSimple = function () {
    var one = 5,
        two = 4;
    var calculate = Math.pow(one, two);
    document.write(one + " üs " + two + " = " + calculate);
};
//! abs() | Kendisine parametre olarak verilen herhangi bir sayı değerini mutlak değerini bulur...
var absFunctionSimple = function () {
    var one = 155,
        two = -144;
    var calculate1 = Math.abs(one),
        calculate2 = Math.abs(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! sqrt() | Kendisine parametre olarak verilen herhangi bir sayı değerininin karekökünü bulur...
var sqrtFunctionSimple = function () {
    var one = 25,
        two = 13*13;
    var calculate1 = Math.sqrt(one),
        calculate2 = Math.sqrt(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! cbrt() | Kendisine parametre olarak verilen herhangi bir sayı değerininin küpkökünü bulur...
var cbrtFunctionSimple = function () {
    var one = 27,
        two = 7*7*7;
    var calculate1 = Math.cbrt(one),
        calculate2 = Math.cbrt(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! sin() | Kendisine parametre olarak verilen herhangi bir sayı değerininin sinus değerini bulur...
var sinFunctionSimple = function () {
    var one = 27,
        two = 23;
    var calculate1 = Math.sin(one),
        calculate2 = Math.sin(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! sinh() | Kendisine parametre olarak verilen herhangi bir sayı değerininin hiperbolik sinus değerini bulur...
var sinhFunctionSimple = function () {
    var one = 1,
        two = 2;
    var calculate1 = Math.sinh(one),
        calculate2 = Math.sinh(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! asin() | Kendisine parametre olarak -1 ile +1 sayı değerleri arasındaki ark sinüs değerini radial cinsinden bulur...
var asinFunctionSimple = function () {
    var one = 0.5,
        two = -0.9;
    var calculate1 = Math.asin(one),
        calculate2 = Math.asin(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! asinh() | Kendisine parametre olarak verilen herhangi bir sayı değerinin hiperbolik ark sinüs değerini bulur...
var asinhFunctionSimple = function () {
    var one = 1,
        two = 14;
    var calculate1 = Math.asinh(one),
        calculate2 = Math.asinh(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! cos() | Kendisine parametre olarak verilen herhangi bir sayı değerinin cosinüs değerini bulur...
var cosFunctionSimple = function () {
    var one = 12,
        two = 14;
    var calculate1 = Math.cos(one),
        calculate2 = Math.cos(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! cosh() | Kendisine parametre olarak verilen herhangi bir sayı değerinin hiperbolik cosinüs değerini bulur...
var coshFunctionSimple = function () {
    var one = 1,
        two = 2;
    var calculate1 = Math.cosh(one),
        calculate2 = Math.cosh(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! acos() | Kendisine parametre olarak verilen -1 ile +1 arasındaki sayı değerlerinin ark cosinüs değerini bulur...
var acosFunctionSimple = function () {
    var one = 0.99,
        two = -0.5;
    var calculate1 = Math.acos(one),
        calculate2 = Math.acos(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! acosh() | Kendisine parametre olarak verilen herhangi bir sayı değerinin hiperbolik ark cosinüs değerini bulur...
var acoshFunctionSimple = function () {
    var one = 2,
        two = 3;
    var calculate1 = Math.acosh(one),
        calculate2 = Math.acosh(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! tan() | Kendisine parametre olarak verilen herhangi bir sayı değerinin tanjant değerini bulur...
var tanFunctionSimple = function () {
    var one = 2,
        two = 1;
    var calculate1 = Math.tan(one),
        calculate2 = Math.tan(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! tanh() | Kendisine parametre olarak verilen herhangi bir sayı değerinin hiperbolik tanjant değerini bulur...
var tanhFunctionSimple = function () {
    var one = 2,
        two = 1;
    var calculate1 = Math.tanh(one),
        calculate2 = Math.tanh(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
};
//! atan() | Kendisine parametre olarak verilen herhangi bir sayı değerinin ark tanjant değerini bulur...
var atanFunctionSimple = function () {
    var one = 25,
        two = 15;
    var calculate1 = Math.atan(one),
        calculate2 = Math.atan(two);
    document.write(one + " = " + calculate1 + "<br>");
    document.write(two + " = " + calculate2);
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
    numberFunctionSimple,
    valueOfFunctionSimple,
    ceilFunctionSimple,
    floorFunctionSimple,
    roundFunctionSimple,
    truncFunctionSimple,
    randomFunctionSimple,
    signFunctionSimple,
    minFunctionSimple,
    maxFunctionSimple,
    powFunctionSimple,
    absFunctionSimple,
    sqrtFunctionSimple,
    cbrtFunctionSimple,
    sinFunctionSimple,
    sinhFunctionSimple,
    asinFunctionSimple,
    asinhFunctionSimple,
    cosFunctionSimple,
    coshFunctionSimple,
    acosFunctionSimple,
    acoshFunctionSimple,
    tanFunctionSimple,
    tanhFunctionSimple,
    atanFunctionSimple
};