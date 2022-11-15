var ifFunctionSimple = function () {
  var time = 24;
  if (time >= 0 && time <= 5) {
    document.write("iyi geceler");
  } else if (time > 5 && time <= 9) {
    document.write("Günaydın");
  } else if (time > 9 && time <= 16) {
    document.write("İyi Günler");
  } else if (time > 16 && time <= 23) {
    document.write("İyi Akşamlar");
  }
  else if (time > 23) {
    document.write("Çok Büyük Değer");
  }
  else {
    document.write("Hata");
  }
};
var switchCaseFunctionSimple = function () {
  var text = "Ümit ";
  var count = text.length;
  switch (count) {
    case 1:
      document.write("Metnin karakter Sayisi:" + count);
      break;
    case 2:
      document.write("Metnin karakter Sayisi:" + count);
      break;
    case 3:
      document.write("Metnin karakter Sayisi:" + count);
      break;
    case 4:
      document.write("Metnin karakter Sayisi:" + count);
      break;
    default:
      document.write("Metnin karakter Sayisi 4'ten fazladır");
  }
};
var ternaryFunctionSimple = function () {
  var control = (4 < 5) ? "Doğru" : "Yanlış";
  document.write(control);
};
var errorFunctionSimple = function () {
  try {
    var name = "Ümit";
    document.write(name + "</br>")
    document.write(surname);
  }
  catch(err){
    document.write("Hata Oluştu <br>");
    document.write(err);
  }
};
export {
  ifFunctionSimple,
  switchCaseFunctionSimple,
  ternaryFunctionSimple,
  errorFunctionSimple
};