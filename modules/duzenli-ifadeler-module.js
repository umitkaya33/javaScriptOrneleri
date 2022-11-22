//! match() Kendisine parametre olarak verilen düzenli ifadeli değer doğrultusunda değişken içeriğini kontrol eder ve aranan değerlerin eşleşmesi durumunda eşleşmeyi sağlayan değişken içeriği değerlerinden yeni bir dizi oluşturarak oluşturduğu dizi değerini gösterir...
var matchFunctionSimple = function () {
    var example = "Merhaba Ümit nasılsın?",
        expression = new RegExp("Merhaba"), //? expression = /Ümit/
        result = example.match(expression);
    document.write(result);
};
//! g |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriğinin tamamını kontrol edilmesini sağlar...
var gFunctionSimple = function () {
    var contents = "Merhaba Ümit nasılsın? Senin adın Ümit miydi?",
        expression = /Ümit/g,
        result = contents.match(expression);
    document.write(result);
};
//! global |  Düzenli ifade içerisinde g ayarının kullanılıp kullanılmadığını kontrol ederek Boolean veri türünde sonucu gösterir...
var globalFunctionSimple = function () {
    var contents = "Ümit Ümit miydi?",
        expression = /Ümit/g,
        result = contents.match(expression),
        control = expression.global;
    document.write(result + "=" + control);
};
//! i |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriğinin büyük-küçük harf ayrımı olmaksızın kontrol edilmesini sağlar...
var iFunctionSimple = function () {
    var contents = "Javascript JAVASCRIPT",
        expression = /javascript/gi,
        result = contents.match(expression);
    document.write(result);
};
export {
    matchFunctionSimple,
    gFunctionSimple,
    globalFunctionSimple,
    iFunctionSimple
};