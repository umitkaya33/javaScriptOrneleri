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
//! ? |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerlerin 0 veya 1 defa tekrarlanmış olması gerektiğini belirtmek için kullanılır...
var example11FunctionSimple = function () {
    var contents = "Javascriptin dosya uzantısı j J j js jss jsss jssss şekline tanımlanmaktadır.",
        process = /js?/gi,
        result = contents.match(process);
    document.write(result);
};
//! * |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerlerin 0 veya daha fazla tekrarlanmış olması gerektiğini belirtmek için kullanılır...
var example12FunctionSimple = function () {
    var contents = "Javascriptin dosya uzantısı j J js jss jsss jssss şekline tanımlanmaktadır.",
        process = /js*/gi,
        result = contents.match(process);
    document.write(result);
};
//! () |  Düzenli ifadelerde grup tanımlamak için kullanılır...
var example13FunctionSimple = function () {
    var contents = "Ümit Kaya Css ve Javascript eğitimleri",
        process = /(css|javascript)/gi,
        result = contents.match(process);
    document.write(result);
};
//! \ |  Düzenli ifadelerde ardından gelecek olan karakterin özel bir karakter olup olmadığını kontrol etmek için kullanılır...
var example14FunctionSimple = function () {
    var contents = "Javascript eğitim seti",
        process = /\S/g,
        result = contents.match(process);
    document.write(result);
};
//! (?:) |  Düzenli ifadelerde alt grup oluşturmak için kullanılır...
var example15FunctionSimple = function () {
    var contents = "Javascript",
        process = /(?:sc)/g,
        result = contents.match(process);
    document.write(result);
};
//! [abc] |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin belirtilen karakterlerden herhangi birisiyle eşleşmesi gerektiğini belirmek için kullanılır...
var example16FunctionSimple = function () {
    var contents = "Ümit Kaya Javascript eğitim",
        process = new RegExp("[Je]", "g"),
        result = contents.match(process);
    document.write(result);
};
//! [a-z] |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin belirtilen karakterler aralığında herhangi birisiyle eşleşmesi gerektiğini belirmek için kullanılır...
var example17FunctionSimple = function () {
    var contents = "Ümit Kaya 1991 Doüumludur.",
        process = new RegExp("[0-9]", "g"),
        result = contents.match(process);
    document.write(result);
};
//! [^abc] |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin belirtilen karakterler dışındaki karakterlerin herhangi birisiyle eşleşmesi gerektiğini belirmek için kullanılır...
var example18FunctionSimple = function () {
    var contents = "Ümit Kaya Javascript.",
        process = new RegExp("[^ÜKJ]", "g"),
        result = contents.match(process);
    document.write(result);
};
//! [^a-z] |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin belirtilen karakterler aralığın dışındaki karakterlerin herhangi birisiyle eşleşmesi gerektiğini belirmek için kullanılır...
var example19FunctionSimple = function () {
    var contents = "Javascript Umit Kaya 2022",
        process = new RegExp("[^a-b]", "gi"),
        result = contents.match(process);
    document.write(result);
};
//! (x|y) |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin belirtilen x ya da y karakterlerin herhangi birisiyle eşleşmesi gerektiğini belirmek için kullanılır...
var example20FunctionSimple = function () {
    var contents = "1922 2022",
        process = new RegExp("(19|20)22", "g"),
        result = contents.match(process);
    document.write(result);
};
//! . |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin yeni satır hariç herhangi birisiyle eşleşmesi gerektiğini belirmek için kullanılır...
var example21FunctionSimple = function () {
    var contents = "Javascript javascript",
        process = new RegExp("j.+t", "gi"),
        result = contents.match(process);
    document.write(result);
};
//! \w |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin harf rakam veya _ karakterlerinden herhangi birisiyle eşleşmesi gerektiğini belirmek için kullanılır...
var example22FunctionSimple = function () {
    var contents = "*u*m*i*t",
        process = /\w/g,
        result = contents.match(process);
    document.write(result);
};
//! \W |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin harf rakam veya _ karakterleri dışındaki herhangi birisiyle eşleşmesi gerektiğini belirmek için kullanılır...
var example23FunctionSimple = function () {
    var contents = "*_*u*_*m*_*i*_*t*_*",
        process = /\W/g,
        result = contents.match(process);
    document.write(result);
};
//! \d |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin sadece rakam karakterleriyle eşleşmesi gerektiğini belirmek için kullanılır...
var example24FunctionSimple = function () {
    var contents = "Ümit Kaya 2022",
        process = /\d/g,
        result = contents.match(process);
    document.write(result);
};
//! \D |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin rakam karakteri dışındaki herhangi birisiyle eşleşmesi gerektiğini belirmek için kullanılır...
var example25FunctionSimple = function () {
    var contents = "Ümit Kaya 2022",
        process = /\D/g,
        result = contents.match(process);
    document.write(result);
};
//! \s |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin sadece boşluk karakteri ile eşleşmesi gerektiğini belirmek için kullanılır...
var example26FunctionSimple = function () {
    var contents = "Ümit Kaya 2022 Javascript Eğitim Seti",
        process = /\s/g,
        result = contents.match(process);
    document.write(result);
};
//! \S |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin boşluk karakteri dışındakilerden herhangi birisiyle eşleşmesi gerektiğini belirmek için kullanılır...
var example27FunctionSimple = function () {
    var contents = "Ümit Kaya 2022 Javascript Eğitim Seti",
        process = /\S/g,
        result = contents.match(process);
    document.write(result);
};
//! \0 |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin sadece null değeriyle eşleşmesi gerektiğini belirmek için kullanılır...
var example28FunctionSimple = function () {
    var contents = "Ümit Kaya \u0000 2022 Javascript Eğitim Seti",
        process = /\0/g,
        result = process.test(contents);
    document.write(result);
};
//! \f |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin sadece form besleme karakteriyle eşleşmesi gerektiğini belirmek için kullanılır...
var example29FunctionSimple = function () {
    var contents = "ABC \u000C ABC",
        process = /\f/g,
        result = process.test(contents);
    document.write(result);
};
//! \n |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin sadece yeni satır karakteriyle eşleşmesi gerektiğini belirmek için kullanılır...
var example30FunctionSimple = function () {
    var contents = "abc\n123\nxyz",
        process = /\n/g,
        result = process.test(contents);
    alert(contents);
    document.write(result);
};
//! \r |  Düzenli ifade dahilinde kontrol edilecek olan değişken içeriği karakter diziliminde bulunan değerin sadece paragraf sonu karakteriyle eşleşmesi gerektiğini belirmek için kullanılır...
var example31FunctionSimple = function () {
    var contents = "Ümit Kaya \rJavascript Eğitim",
        process = /\r/g,
        result = process.test(contents);
    alert(contents);
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
    example10FunctionSimple,
    example11FunctionSimple,
    example12FunctionSimple,
    example13FunctionSimple,
    example14FunctionSimple,
    example15FunctionSimple,
    example16FunctionSimple,
    example17FunctionSimple,
    example18FunctionSimple,
    example19FunctionSimple,
    example20FunctionSimple,
    example21FunctionSimple,
    example22FunctionSimple,
    example23FunctionSimple,
    example24FunctionSimple,
    example25FunctionSimple,
    example26FunctionSimple,
    example27FunctionSimple,
    example28FunctionSimple,
    example29FunctionSimple,
    example30FunctionSimple,
    example31FunctionSimple
};
