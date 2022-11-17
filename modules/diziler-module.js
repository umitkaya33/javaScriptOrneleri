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
    document.write(persons + "<br>");
    document.write("Aranan karakter:" + newpersons + ".numarada");
};
//! reduce() Kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde soldan sağa tek tek olmak üzere çalıştırır ve tek bir değer oluşturarak ekrana yazdırır..
var reduceFunctionSimple = function () {
    function test(deger, eleman, sira, referans) {
        return deger + eleman;
    }
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var shownumbers = numbers.reduce(test);
    document.write(numbers + "<br>");
    document.write("Tüm sayıların toplamı:" + shownumbers);
};
//! reduceRight() Kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde sağdan sola tek tek olmak üzere çalıştırır ve tek bir değer oluşturarak ekrana yazdırır..
var reduceRightFunctionSimple = function () {
    function test(deger, eleman, sira, referans) {
        return deger + eleman;
    }
    var texts = ["a", "b", "c", "d", "e", "f"];
    var showtexts = texts.reduceRight(test);
    document.write(texts + "<br>");
    document.write(showtexts);
};
//! reverse() Dizi içerisindeki sıralamayı tersine çevirerek yeni bir dizi oluşturur..
var reverseFunctionSimple = function () {
    var texts = ["a", "b", "c", "d", "e", "f"];
    document.write(texts + "<br>");
    var showtexts = texts.reverse();
    document.write(showtexts);
};
//! sort() Dizi içeriğini(unicode olarak) sıralar..
var sortFunctionSimple = function () {
    var persons = ["Ümit", "Orkun", "Hakan", "Arif", "Ahmet", "Göknur", "Buse", "Hatice", "Elif", "Didem", "Zeynep", "Çiğdem", "Buket", "Banu", "Tugce", "Oguz", "Şinasi", "Ömer", "Şenay", "Çağla", "Çilem", "Ilgaz", "Özkan", "Ülker"];
    document.write("<b>Kullanıcılar</b>" + "<br>" + persons + "<br>");
    persons.sort();
    document.write("<b>Unicode Olarak Sıralaması</b>" + "<br>" + persons + "<br>");

    //! sort() Türkçe karakterler dahil sıralama..
    function arrangement(first, end) {
        var alphabet = "AaBbCcÇçDdEeFfGgĞğHhIıİiJjKkLlMmNnOoÖöPpQqRrSsŞşTtUuÜüVvWwXxYyZz";
        if (first.length === 0 || end.length === 0) {
            return first.length - end.length;
        } else {
            var first1 = alphabet.indexOf(first[0]);
            var end2 = alphabet.indexOf(end[0]);
            if (first1 !== end2) {
                return first1 - end2;
            } else {
                return arrangement(first.slice(1), end.slice(1));
            }
        }
    };
    persons.sort(arrangement);
    document.write("<b>Türkçe Karakter Dahil Olarak Sıralaması</b>" + "<br>" + persons + "<br>");
};
//! forEach() Kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde tek tek olmak üzere çalıştırır..
var forEachFunctionSimple = function () {
    function test(element, order, referance) {
        result += element;
    }
    var result = 0;
    var numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
    numbers.forEach(test);
    document.write(numbers + "<br>" + result);
};
//! some() Kendisine parametre olarak verilen fonksiyonu true değeri döndürene kadar dizi elemanları 
//üzerinde sıra ile gezinilmesini sağlar..
var someFunctionSimple = function () {
    function test(element, order, referance) {
        result = element;
        return element % 5 === 0;
    }
    var result = 0;
    var numbers = [2, 3, 5, 7, 34, 21, 45, 22];
    numbers.some(test);
    document.write(numbers + "<br>" + result);
};
//! every() Kendisine parametre olarak verilen fonksiyonu false değeri döndürene kadar dizi elemanları üzerinde sıra ile gezinilmesini sağlar..
var everyFunctionSimple = function () {
    function test(element, order, referance) {
        result = element;
        return element % 5 === 0;
    }
    var result = 0;
    var numbers = [20, 10, 50, 343, 247, 27, 97];
    numbers.every(test);
    document.write(numbers + "<br>" + result);
};
//! filter() Kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerine çalıştırır. Fonksiyonun geriye true değerini döndüren tüm elemanlırını kopyalayarak yeni bir dizi oluşturur. Oluşturduğu diziyi ekrana yazdırır..
var filterFunctionSimple = function () {
    function test(element, order, referance) {
        return element % 2 !== 0;
    }
    var numbers = [2, 1, 3, 7, 9, 6, 8, 20, 29, 31, 10, 50, 343, 247, 30, 27, 97];
    var oddnumbers = numbers.filter(test)
    numbers.filter(test);
    document.write("Tek Sayı Olanlar:" + oddnumbers + "<br>" + "Tüm Elemanlar:" + numbers);
};
//! map() Kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerine çalıştırır.Fonksiyonun her elemanı için geriye döndürdüğü değerlerden yeni bir dizi oluşturur ve yeni dizinin değerini ekrana yazdırır..
var mapFunctionSimple = function () {
    function test(elements, order, referance) {
        var process = elements * 3;
        return process;
    }
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    document.write(numbers + "<br>");
    var newnumbers = numbers.map(test);
    document.write(newnumbers);
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
    reduceFunctionSimple,
    reduceRightFunctionSimple,
    reverseFunctionSimple,
    sortFunctionSimple,
    forEachFunctionSimple,
    someFunctionSimple,
    everyFunctionSimple,
    filterFunctionSimple,
    mapFunctionSimple
}; 