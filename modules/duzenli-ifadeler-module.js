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
export {
    matchFunctionSimple,
    gFunctionSimple
};