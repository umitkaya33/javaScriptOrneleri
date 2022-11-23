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
//! ignoreCase |  Düzenli ifade içerisinde i ayarının kullanılıp kullanılmadığını kontrol ederek Boolean veri türünde sonucu gösterir...
var ignoreCaseFunctionSimple = function () {
    var contents = "Javascript JAVASCRIPT",
        expression = /Javascript/gi,
        result = contents.match(expression),
        control = expression.ignoreCase;
    document.write(result + "=" + control);
};
//! m |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriğinin birden fazla satırı varsa tüm satırların kontrol edilmesini sağlar...
var mFunctionSimple = function () {
    var contents = "\nJavascript\nJAVASCRIPT",
        expression = /^Javascript/mgi,
        result = contents.match(expression);
    document.write(result);
};
//! multiline |  Düzenli ifade içerisinde m ayarının kullanılıp kullanılmadığını kontrol ederek Boolean veri türünde sonucu gösterir...
var multilineFunctionSimple = function () {
    var contents = "Javascript JAVASCRIPT",
        expression = new RegExp("test", "m"),
        result = contents.match(expression),
        control = expression.multiline;
    document.write(result + " M Ayarı Kullanımı:" + control);
};
//! test() |  Kendisine parametre olarak verilen değişken içeriğinde düzenli ifade ile aranan değer eşleşmesinin olup olmadığını kontrol ederek Boolean veri türünde sonucu gösterir...
var testFunctionSimple = function () {
    var contents = "Javascript JAVASCRIPT",
        expression = new RegExp("java", "mgi"),
        result = contents.match(expression),
        control = expression.test(contents);
    document.write(result + " Eşleşme var mı ? : " + control);
};
//! input |  Değişken içeriğinde düzenli ifade ile aranan değerin eşleşmesi durumunda eşleşmeyi sağlayan değişken içeriğinin tüm değerini gösterir...
var inputFunctionSimple = function () {
    var contents = "Javascript JAVASCRIPT",
        expression = /javax/mgi,
        control = expression.test(contents);
    if (control == true) {
        var result = RegExp.input;
        document.write(result);
    } else {
        document.write("Herhangi bir eşleşme bulunamadı!");
    }
};
//! source |  Düzenli ifade içerisinde kullanılan desen değerini gösterir...
var sourceFunctionSimple = function () {
    var contents = /Javascript/,
        result = contents.source;
    document.write(result);
};
//! search() |  Kendisine parametre olarak verilen düzenli ifadeli değer doğrultusunda değişken içeriğini kontrol eder ve ilk eşleşmeyi sağlayan değişken içeriğinin index değerini gösterir...
var searchFunctionSimple = function () {
    var contents = "Ümit Kaya Javascript Eğitim Seti",
        process = /Java/gmi,
        result = contents.search(process);
    document.write(contents + ":" + result);
};
//! lastindex |  Değişken içeriğinde düzenli ifade ile aranan değerin eşleşmesi durumunda ilk eşleşmeyi sağlayan değişken içeriğinin bir sonraki index değerini gösterir...
var lastIndexFunctionSimple = function () {
    var contents = "Dünyada ve Türkiye'de en yaygın olarak kullanılan script dili Javascript'tir.",
        process = /script/gi;
    while (process.test(contents) == true) {
        var result = process.lastIndex;
        document.write(result + "<br>");
    }
};
//! lastMatch |  Değişken içeriğinde düzenli ifade ile aranan değerin eşleşmesi durumunda son eşleşmeyi sağlayan değişken içeriğinin değerini gösterir...
var lastMatchFunctionSimple = function () {
    var contents = "Dünyada ve Türkiye'de en yaygın olarak kullanılan script dili Javascript'tir.",
        process = /script/gi;
    process.test(contents);
    var result = RegExp.lastMatch;
    document.write(result);
};
//! leftContext |  Değişken içeriğinde düzenli ifade ile aranan değerin eşleşmesi durumunda eşleşmeyi sağlayan değişken içeriğinin solunda kalan tüm değerleri gösterir...
var leftContextFunctionSimple = function () {
    var contents = "Dünyada ve Türkiye'de en yaygın olarak kullanılan script dili Javascript'tir.",
        process = /script/gi;
    process.test(contents);
    var result = RegExp.leftContext;
    document.write(result);
};
//! rightContext |  Değişken içeriğinde düzenli ifade ile aranan değerin eşleşmesi durumunda eşleşmeyi sağlayan değişken içeriğinin sağında kalan tüm değerleri gösterir...
var rightContextFunctionSimple = function () {
    var contents = "Dünyada ve Türkiye'de en yaygın olarak kullanılan script dili Javascript'tir.",
        process = /Dünya/gi;
    process.test(contents);
    var result = RegExp.rightContext;
    document.write(result);
};
//! replace() |  Kendisine verilecek olan düzenli ifadeyle parametreler doğrultusunda değişken içeriğini kontrol eder ve aranan değerin eşleşmesi durumunda eşleşmeyi sağlayan değerlerin değişimini sağlayarak yeri bir içerik oluşturur...
var replaceFunctionSimple = function () {
    var contents = "Dünyada ve Türkiye'de en yaygın olarak kullanılan script dili Javascript'tir.",
        process = /(Javascript|script)/gi,
        change = contents.replace(process, "php");
    document.write(contents + "<br>");
    document.write(change);
};
//! split() |  Kendisine parametre olarak verilen düzenli ifadeli değer doğrultusunda değişken içeriğini kontrol eder ve aranan değerin eşleşmesi durumunda eşleşmeyi sağlayan değişken içeriği değerlerin bölümleyerek yeri bir içerik oluşturur...
var splitFunctionSimple = function () {
    var contents = "Javascript Php Css Xml Html Phyton",
        process = /\W/g,
        result = contents.split(process);
    document.write(result[0] + "<br>");
    document.write(result[1] + "<br>");
    document.write(result[2] + "<br>");
    document.write(result[3] + "<br>");
    document.write(result[4] + "<br>");
    document.write(result[5]);
};
//! exec() |  Kendisine parametre olarak verilen değişken içeriğinde düzenli ifade ile aranan değerin eşleşmesi durumunda eşleşmeyi sağlayan değişken içeriği değerinden yeni bir dizi oluşturularak oluşturduğu dizi değerini gösterir...
var execFunctionSimple = function () {
    var contents = "ümit Ümit", //? lastIndex[0]
        process = /ümit/gi,
        result = process.exec(contents);
    document.write(result + "<br>");
    var result2 = process.exec(contents); //? lastIndex[5]
    document.write(result2);
};
//! toString() |  Düzenli ifade içeriğini string veri türünde düz bir metne dönüştürür...
var toStringFunctionSimple = function () {
    var contents = /ümit/gi,
        process = contents.toString();
    document.write(process);
};
//! compile() |  Önceden oluşturulmuş düzenli ifade içerisindeki deseni değiştirilmesini sağlar...
var compileFunctionSimple = function () {
    var contents = "javascript php css html",
        process = /javascript/gi,
        result = contents.match(process);
    document.write(result + "<br>");
    process.compile("PHP", "gi");
    var result2 = contents.match(process);
    document.write(result2);
};
//! ^ |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter dizilimi başlangıcı ile düzenli ifade arasında eşleşme aramak için kullanılır...
var example1FunctionSimple = function () {
    var contents = "Javascript eğitim seti",
        process = /^javascript/i,
        result = process.test(contents);
    document.write(result);
};
//! $ |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter dizilimi sonu ile düzenli ifade arasında eşleşme aramak için kullanılır...
var example2FunctionSimple = function () {
    var contents = "Javascript eğitim seti",
        process = /seti$/,
        result = process.test(contents);
    document.write(result);
};
//! \b |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriğini düzenli ifadeye uygun olabilecek metin parçalarını karakter dizilimi içerisindeki kelimelerin başında ya da sonunda aramak için kullanılır...
var example3FunctionSimple = function () {
    var contents = "xJavascriptx JAVASCRIPTx",
        process = /\bJavascript/i,
        result = contents.search(process);
    document.write(result);
};
//! \B |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriğini düzenli ifadeye uygun olabilecek metin parçalarını karakter dizilimi içerisindeki kelimelerin içerisinde aramak için kullanılır...
var example4FunctionSimple = function () {
    var contents = "xxxJavascriptxxx xxxJAVASCRIPTxxx",
        process = /\BJavascript/,
        result = contents.search(process);
    document.write(result);
};
//! ?= |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter dizilimi içerisindeki belirtilen bir refarans değerinde düzenli ifade ile eşleşebilecek değerleri aramak için kullanılır...
var example5FunctionSimple = function () {
    var contents = "Javascript dünya üzerinde kullanılan en yaygın script dilidir",
        process = /script(?= di)/,
        result = contents.search(process);
    document.write(result);
};
//! ?! |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter dizilimi içerisindeki belirtilen bir refarans değer ile takip edilmeyen değerleri düzenli ifade ile eşleşebilecek değerleri aramak için kullanılır...
var example6FunctionSimple = function () {
    var contents = "Javascript Türkiye üzerinde kullanılan en yaygın script dilidir",
        process = /script(?! T)/,
        result = contents.search(process);
    document.write(result);
};
//! {x} |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter dizilimi bulunan değerleri x defa tekrarlanmış olması gerektiğini belirtmek için kullanılır...
var example7FunctionSimple = function () {
    var contents = "Javaaascript Türkiye üzerinde kullanılan en yaygın script dilidir",
        process = /a{2}/,
        result = process.test(contents);
    document.write(result);
};
//! {x,} |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerleri x defa ya da daha fazla tekrarlanmış olması gerektiğini belirtmek için kullanılır...
var example8FunctionSimple = function () {
    var contents = "Javascriptttttt Eğitim Seti",
        process = /t{3,}/,
        result = contents.match(process);
    document.write(result);
};
//! {x,y} |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerlerin en az x defa ya da en fazla y defa tekrarlanmış olması gerektiğini belirtmek için kullanılır...
var example9FunctionSimple = function () {
    var contents = "Javaaaaaaascript",
        process = /a{2,4}/,
        result = contents.match(process);
    document.write(result);
};
//! + |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerlerin bir defa ya da daha fazla tekrarlanmış olması gerektiğini belirtmek için kullanılır...
var example10FunctionSimple = function () {
    var contents = "Javascriptin dosya uzantısı js jss jsss jssss şekline tanımlanmaktadır.",
        process = /js+/g,
        result = contents.match(process);
    document.write(result);
};
export {
    matchFunctionSimple,
    gFunctionSimple,
    globalFunctionSimple,
    iFunctionSimple,
    ignoreCaseFunctionSimple,
    mFunctionSimple,
    multilineFunctionSimple,
    testFunctionSimple,
    inputFunctionSimple,
    sourceFunctionSimple,
    searchFunctionSimple,
    lastIndexFunctionSimple,
    lastMatchFunctionSimple,
    leftContextFunctionSimple,
    rightContextFunctionSimple,
    replaceFunctionSimple,
    splitFunctionSimple,
    execFunctionSimple,
    toStringFunctionSimple,
    compileFunctionSimple,
    example1FunctionSimple,
    example2FunctionSimple,
    example3FunctionSimple,
    example4FunctionSimple,
    example5FunctionSimple,
    example6FunctionSimple,
    example7FunctionSimple,
    example8FunctionSimple,
    example9FunctionSimple,
    example10FunctionSimple
};
