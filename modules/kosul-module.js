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

export {
  ifFunctionSimple
};