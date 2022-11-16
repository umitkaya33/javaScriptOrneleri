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
    document.write(fruits + "<br>")
    document.write(show[4]);
};

export {
    arraydefinitonFunctionSimple,
    arrayExample1
}; 