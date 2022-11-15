var whileFunctionSimple = function () {
  var number = 1;
  while (number <= 10) {
    document.write(number + "<br>");
    number++;
  }
};
var dowhileFunctionSimple = function () {
  var number = 1;
  do {
    document.write(number + "<br>");
    number++;
  } while (number <= 10);

};

var icIceWhileDongusuOrnegi = function () {

  let space = "<br></br>";
  document.write("İç İçe while");
  document.write(space);
  var count1 = 1;
  var count2 = 1;
  while (count1 <= 5) {
    while (count2 <= 5) {
      document.write("*");
      count2++;
    }
    document.write("<br>");
    count1++;
    count2 = 1;
  }
};
var forFunctionSimple = function () {
  for (var number = 10; number >= 0; number--) {
    document.write(number + "<br>");
  }
};

var icIceForDongusuOrnegi = function () {

  document.write("İç İçe For_Döngüsü <br>");
  for (var x = 1; x <= 5; x++) {
    for (var y = 1; y <= 5; y++) {
      document.write("*");
    }
    document.write("<br>");
  }
};

var forInDongusuOrnegi = function () {

  document.write("For In Döngüsü <br>");
  var car = { brand: "Volkwagen", model: "Golf", old: 15, price: 235000, city: "Mersin" };
  var view = " ";
  var x;
  for (x in car) {
    view += car[x] + " ";
  }
  document.write(view + "<br>");
};



export {
  whileFunctionSimple,
  dowhileFunctionSimple,
  icIceWhileDongusuOrnegi,
  forFunctionSimple,
  icIceForDongusuOrnegi,
  forInDongusuOrnegi
};
