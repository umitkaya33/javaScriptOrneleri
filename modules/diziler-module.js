var arraydefinitonFunctionSimple = function () {
    var persons = ["Orkun", "Ümit", "Göknur"];
    document.write(persons + "<br>");
    document.write(persons[2] + "<br>");
    document.write(persons[1] + "<br>");
    document.write(persons[0] + "<br>");
};
var arrayExample1 = function () {
    var fruits = new Array("Elma", "Armut", "Kiraz", "Kavun", "Karpuz");
    var show = fruits;
    document.write(fruits + "<br>");
    document.write(show[4]);
};
var arrayExample2 = function () {
    var colors = new Array("Siyah", "Kırmızı", "Mavi", "Yeşil", "Turuncu"),
        persons = new Array("Orkun", "Ümit", "Göknur"),
        olds = new Array(15, 25, 35, 20);
    document.write(persons[2] + " " + colors[3] + " " + olds[3]);
};
var arrayExample3 = function () {
    var persons, olds, country;
    persons = ["Orkun", "Göknur", "Ümit"];
    olds = [30, 35, 25];
    country = ["Mersin", "Gaziantep", "Antalya"];
    document.write(olds[2] + " " + persons[2] + " " + country[0]);
};
var forFunctionSimple = function () {
    var textexample = "Javascript Eğitim Seti";
    var print;
    for (print in textexample) {
        document.write(textexample[print] + " ");
    }
};
var forInFunctionSimple = function () {
    var colorsname = ["Siyah", "Kırmızı", "Mavi", "Yeşil", "Turuncu"];
    var printcolor;
    for (printcolor in colorsname)
        if (printcolor == 0 || printcolor == 2) {
            document.write("<b>" + (colorsname[printcolor]) + "</b>" + " ");
        } else {
            document.write(colorsname[printcolor] + " ");
        }
};
var lengthFunctionSimple = function () {
    var persons = ["Orkun", "Ümit", "Göknur"];
    var process = persons.length;
    document.write("Dizinin karanker sayısı:" + process);
};
//! "delete değişkenadı[];" dizinin verilen parametre doğrultusunda elemanını siler..
var deleteFunctionSimple = function () {
    var colors = ["Kırmızı", "Mavi", "Yeşil", ["Siyah", "Beyaz", "Lila"], "Turuncu", "Sarı"];
    document.write("Orjinali:" + colors + "<br>");
    delete colors[3][1];
    document.write("Sonrası:" + colors);
};
//! pop() dizinin son elemanını siler..
var popFunctionSimple = function () {
    var persons = ["Ümit", "Göknur", "Orkun", "Yalçın"];
    document.write("Dizinin Orjinal Hali:" + persons + "<br>");
    var process = persons.pop();
    document.write("Dizinin Silineni:" + process + "<br>");
    document.write("Dizinin Son Hali:" + persons + "<br>");
};
//! shift() dizinin ilk elemanını siler..
var shiftFunctionSimple = function () {
    var persons = ["Ümit", "Göknur", "Orkun", "Yalçın"];
    document.write("Dizinin Orjinal Hali:" + persons + "<br>");
    var process = persons.shift();
    document.write("Dizinin Silineni:" + process + "<br>");
    document.write("Dizinin Son Hali:" + persons + "<br>");
};
//! push() dizinin sonuna elemanlar ekler..
var pushFunctionSimple = function () {
    var fruits = ["Elma", "Armut", "Kiraz"];
    document.write("Dizinin Orjinal Hali:" + fruits + "<br>");
    var process = fruits.push("Karpuz", "Kavun", "Portakal");
    document.write("Dizinin Son Hali:" + fruits + "<br>");
};
//! unshift() dizinin başına elemanlar ekler..
var unshiftFunctionSimple = function () {
    var fruits = ["Elma", "Armut", "Kiraz"];
    document.write("Dizinin Orjinal Hali:" + fruits + "<br>");
    var process = fruits.unshift("Karpuz", "Kavun", "Portakal");
    document.write("Dizinin Son Hali:" + fruits + "<br>");
};
//! splice() diziye elemanlar  ekler veya siler..
var spliceFunctionSimple = function () {
    var fruits = ["Elma", "Armut", "Kiraz", "Karpuz", "Kavun", "Portakal", "Mandalina", "Portakal"];
    document.write("Dizinin Orjinal Hali:" + fruits + "<br>");
    var process = fruits.splice(2, 3, "Gri", "Mavi", "Yeşil");
    document.write("Silinenler:" + process + "<br>");
    document.write("Dizinin Son Hali:" + fruits + "<br>");
};
//! slice() dizileri kopyalarak yeni bir dizi oluşturur..
var sliceFunctionSimple = function () {
    var fruits = ["Elma", "Armut", "Kiraz", "Gri", "Mavi", "Yeşil", "Karpuz", "Kavun", "Mandalina", "Portakal"];
    document.write("Dizinin Orjinal Hali:" + fruits + "<br>");
    var process = fruits.slice(2, 5);
    document.write("Kopyalanan:" + process + "<br>");
};
//! copyWithin() dizileri kopyalarak dizinin elemanlarını değiştirir..
var copyWithinFunctionSimple = function () {
    var fruits = ["Elma", "Armut", "Kiraz", "Gri", "Mavi", "Yeşil", "Karpuz", "Kavun", "Mandalina", "Portakal"];
    document.write("Dizinin Orjinal Hali:" + fruits + "<br>");
    fruits.copyWithin(4, 2, 5);
    document.write("Son Hali:" + fruits + "<br>");
};
//! fill() dizinin elemanlarını değiştirir..
var fillFunctionSimple = function () {
    var fruits = ["Elma", "Armut", "Kiraz", "Gri", "Mavi", "Yeşil", "Karpuz", "Kavun", "Mandalina", "Portakal"];
    document.write("Dizinin Orjinal Hali:" + fruits + "<br>");
    fruits.fill("<b>ümit</b>", 4, 7);
    document.write("Son Hali:" + fruits + "<br>");
};
//! concat() üzerinde çalışılan diziye parametrik olarak verilen elemanları dahil ederek yeni bir dizi oluşturur..
var concatFunctionSimple = function () {
    let mans = ["Ümit", "Orkun", "Ahmet", "Hakan", "Arif"];
    let womans = ["Ayse", "Fatma", "Hayriye", "Zeynep", "Göknur"];
    var persons = mans[1].concat("♥" + womans[4]);
    document.write(persons);
};
//! join() Dizileri string veri türüne çevirir..
var joinFunctionSimple = function () {
    var colorsname = ["Siyah", "Kırmızı", "Mavi", "Yeşil", "Turuncu"];
    var process = colorsname.join("---");
    document.write(process);
};
//! toString() Dizideki tüm elemanları içeren string türünde düz bir metin oluşturur..
var toStringFunctionSimple = function () {
    var colorsname = ["Siyah", "Kırmızı", "Mavi", "Yeşil", "Turuncu"];
    var control = typeof colorsname;
    var process = colorsname.toString();
    var control2 = typeof process;

    document.write(process + "<b>Veri Türü:</b>" + control + "<br>" + process + "<b>Veri Türü:</b>" + control2);
};
//! valueOf() Dizideki tüm elemanları tam anlamıyla aktarımını sağlar ve yeni bir dizi oluşturur..
var valueOfFunctionSimple = function () {
    var persons = ["Ümit", "Orkun", "Ahmet", "Hakan", "Arif"];
    var newpersons = persons.valueOf();
    document.write(newpersons + "<br>");
    persons.fill("Ümit");
    document.write(newpersons);
};
//! indexOf() Dizi içerisinde parametrik olarak verilen değeri arar ve ilk eşleşmeyi sağlayan index değerini ekrana yazdırır ..
var indexOfFunctionSimple = function () {
    var persons = ["Ümit", "Orkun", "Ahmet", "Hakan", "Arif"];
    var newpersons = persons.indexOf("Orkun");
    document.write(newpersons + "<br>");
};
//! lastIndexOf() Dizi içerisinde parametrik olarak verilen değeri arar ve son eşleşmeyi sağlayan index değerini ekrana yazdırır ..
var lastIndexOfFunctionSimple = function () {
    var persons = ["Ümit", "Orkun", "Ahmet", "Hakan", "Arif", "Orkun"];
    var newpersons = persons.lastIndexOf("Orkun");
    document.write("Aranan karakter:" + newpersons + " Numarada");
};
//! find() Dizi içerisinde parametrik olarak verilen değeri arar ve ilk eşleşmeyi sağlayan index değerini ekrana yazdırır ..
var findFunctionSimple = function () {
    function test(elemanlar, sira, referans) {
        return sira == 4;
    }
    var persons = ["Ümit", "Orkun", "Ahmet", "Hakan", "Arif", "Orkun"];
    var newpersons = persons.find(test);
    document.write("Aranan karakter:" + newpersons);
};
//! findIndex() Kendisine parametre olarak verilen fonksiyonu dizideki her elemana tek tek olmak üzerinde çalıştırır ve dizi içerisine parametrik olarak arar ilk eşleşmeyi sağlayan index değerini geriye döndürür..
var findIndexFunctionSimple = function () {
    function test(elemanlar, sira, referans) {
        return elemanlar == "Ahmet";
    }
    var persons = ["Ümit", "Orkun", "Ahmet", "Hakan", "Arif", "Orkun"];
    var newpersons = persons.findIndex(test);
    document.write(persons+"<br>")
    document.write("Aranan karakter:" + newpersons+".numarada");
};
//! reduce() Kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde soldan sağa tek tek olmak üzere çalıştırır ve tek bir değer oluşturarak ekrana yazdırır..
var reduceFunctionSimple = function () {
    function test(deger, eleman, sira,referans) {
        return deger+eleman;
    }
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    var shownumbers = numbers.reduce(test);
    document.write(numbers+"<br>")
    document.write("Tüm sayıların toplamı:" + shownumbers);
};

export {
    arraydefinitonFunctionSimple,
    arrayExample1,
    arrayExample2,
    arrayExample3,
    forFunctionSimple,
    forInFunctionSimple,
    lengthFunctionSimple,
    deleteFunctionSimple,
    popFunctionSimple,
    shiftFunctionSimple,
    pushFunctionSimple,
    unshiftFunctionSimple,
    spliceFunctionSimple,
    sliceFunctionSimple,
    copyWithinFunctionSimple,
    fillFunctionSimple,
    concatFunctionSimple,
    joinFunctionSimple,
    toStringFunctionSimple,
    valueOfFunctionSimple,
    indexOfFunctionSimple,
    lastIndexOfFunctionSimple,
    findFunctionSimple,
    findIndexFunctionSimple,
    reduceFunctionSimple
}; 