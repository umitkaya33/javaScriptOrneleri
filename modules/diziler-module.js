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
    var textexample="Javascript Eğitim Seti";
    var print;
    for (print in textexample){
        document.write(textexample[print]+" ");
    }
};
export {
    arraydefinitonFunctionSimple,
    arrayExample1,
    arrayExample2,
    arrayExample3,
    forFunctionSimple
}; 