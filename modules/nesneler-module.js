//! Nesne tanımlama ve nesneyi çağırma...
function objectsExample1() {
  var info = { userName: "Ümit", userSurname: "Kaya", userDateOfBirth: 1991 };
  let personName = info.userName;
  let personSurname = info.userSurname;
  let personDate = info.userDateOfBirth;
  document.write("Kişi Adı:" + personName + "<br>");
  document.write("Kişi Soyadı:" + personSurname + "<br>");
  document.write("Kişi Doğum Tarihi:" + personDate);
};
//! new operatörü kullanarak nesne tanımlama ve nesneyi çağırma...
function objectsExample2() {
  var info = new Object();
  info.userName = "Ümit";
  info.userSurname = "Kaya";
  info.userDateOfBirth = 1991;
  let writeName = info.userName;
  let writeSurname = info.userSurname;
  let writeDateOfBirth = info.userDateOfBirth;
  document.write("Kişi Adı:" + writeName + "<br>");
  document.write("Kişi Soyadı:" + writeSurname + "<br>");
  document.write("Kişi Doğum Tarihi:" + writeDateOfBirth);
};
//! fonksiyon şeklinde nesne tanımlama ve nesneyi çağırma...
function objectsExample3() {
  function objectsFunction() {
    this.username = "Ümit";
    this.usersurname = "Kaya";
  }
  var info = new objectsFunction();
  document.write("Kişi Adı:" + info.username + "<br>");
  document.write("Kişi Soyadı:" + info.usersurname);
};
//! nesnelerde özellik ve değer atamalarında tırnak işaretlerinin kullanımı...
function objectsExample4() {
  let info = { 'username': "Ümit", "usersurname": 'Kaya' };
  document.write(info.username + " " + info.usersurname);
};
//! tek bir ifadeyle birden fazla nesne tanımlama...
function objectsExample5() {
  var userInfo = { username: "Ümit", usersurname: 'Kaya' }, userColor = { color1: "Black", color2: "Red" };
  document.write(userInfo.username + " " + userInfo.usersurname + "<br>");
  document.write(userColor.color1 + " ♥ " + userColor.color2);
};
//! bir nesneyi başka bir değişkene aktarma...
function objectsExample6() {
  var userInfo = { username: "Ümit", usersurname: 'Kaya' };
  var transferInfo = userInfo;
  document.write(transferInfo.username + " " + transferInfo.usersurname + "<br>");
};
//! nesneyi önceden tanımlayarak özellik ve değerleri sonradan belirlemek...
function objectsExample7() {
  var userInfo = {};
  userInfo.username = "Ümit";
  userInfo.usersurname = "Kaya";
  document.write(userInfo.username + " " + userInfo.usersurname);
};
//! nesneleri dizi gibi görerek herhangi bir özelliğin değerine ulaşma...
function objectsExample8() {
  let info = { username: "ümit", surname: "kaya" };
  let usernameView = info["username"];
  let usersurnameView = info["surname"];
  document.write(usernameView + " " + usersurnameView);
};
//! nesne içerisindeki bir özelliğe ait değer verisinin değiştirilmesi...
function objectsExample9() {
  let info = { username: "Ümit Kaya", lessons: "Javascript Eğitim Seti" };
  document.write(info.username + " " + info.lessons + "<br>");
  info.lessons = "PHP Eğitim Seti";
  document.write(info.username + " " + info.lessons);
};
//! nesne içerisinde fonksiyon tanımlama ve fonksiyonu çağırma...
function objectsExample10() {
  let info = {
    username: "Ümit Kaya",
    lessons: "Javascript Eğitim Seti",
    result: function () {
      document.write("Nesne içi fonksiyon" + "<br>");
      document.write(this.username.fontcolor("red") + " " + this.lessons.bold());
    }
  };
  info.result();
};
//! nesne içerisinde fonksiyon nesnenin özellik değerlerine fonksiyon içerisinden ulaşma...
function objectsExample11() {
  let info = {
    username: "UMIT",
    result: function () {
      document.write(this.username.split("").reverse().join(""));
    }
  };
  info.result();
};
//! nesne içerisinde fonksiyon, fonksiyon içerisinde de özellik ve değer tanımlama ve çağırma...
function objectsExample12() {
  let info = {
    username: "Ümit",
    result: function () {
      this.surname = "Kaya";
    }
  };
  info.result();
  document.write(info.username + " " + info.surname);
};
//! nesne içerisindeki fonksiyonda return ifadesinin kullanımı...
function objectsExample13() {
  let infoNumbers = {
    process: function () {
      let number1 = 5;
      let number2 = 15;
      let total = number1 + number2;
      return total;
    }
  };
  document.write(infoNumbers.process());
};
//! nesnelerin kapsama alanları...
function objectsExample14() {
  let persons1 = {
    username: "Ümit", surname: "Kaya",
    personsview: function () {
      let writepersons = this.username + " " + this.surname;
      return writepersons
    }
  };
  let persons2 = {
    username: "Orkun", surname: "Kozan",
    personsview: function () {
      let writepersons = this.username + " " + this.surname;
      return writepersons
    }
  };
  document.write(persons1.personsview() + "<br>");
  document.write(persons2.personsview());
};
//! Özellik ve değerleri tanımlanmış bir nesneye daha sonradan ek özellik ve değer tanımlama...
function objectsExample15() {
  var persons1 = {
    username: " Ümit ",
    surname: " Kaya "
  };
  var writeUsername = persons1.username;
  var writeSurname = persons1.surname;
  persons1.colorname = " Red ";
  var writeColor = persons1.colorname;
  document.write(writeUsername + writeSurname + writeColor + "<br>");
  persons1.detail = function () {
    document.write("Javascript Eğitimleri");
  }
  persons1.detail();
};
//! Nesne içerisindeki fonksiyona parametre tanımlama ve fonksiyonu çağırma...
function objectsExample16() {
  var info = {
    persons: function (username, surname, old) {
      var contentUsername = username;
      var contentSurname = surname;
      var contentOld = old;
      var content = " Merhaba ben " + contentUsername + " " + contentSurname + " " + contentOld + " yaşındayım ";
      return content;
    }
  };
  var result = info.persons("Ümit", "Kaya", "30");
  document.write(result);
};
//! Nesne içerisindeki fonksiyonda bulunan parametrelere varsayılan değer ataması yapma...
function objectsExample17() {
  var info = {
    value: function (username, surname, series = "Javascript") {
      var usernameValue = username;
      var surnameValue = surname;
      var seriesValue = series;
      var showValue = usernameValue + " " + surnameValue + " " + seriesValue + " " + "Eğitim Seti";
      return showValue;
    }
  }
  var result = info.value("Ümit", "Kaya");
  document.write(result);
};
//! Fonksiyon şeklindeki nesne tanımlamalarında fonksiyona parametre tanımlama ve fonksiyonu çağırma...
function objectsExample18() {
  function persons(usernameValue, surnameValue) {
    this.username = usernameValue;
    this.surname = surnameValue;
  }
  var result = new persons("Ümit", "Kaya");
  var incomingName = result.username;
  var incomingSurname = result.surname;
  document.write(incomingName + " " + incomingSurname);
};
//! Fonksiyon şeklindeki nesne tanımlamalarında fonksiyonda bulunan parametrelere varsayılan değer ataması yapma...
function objectsExample19() {
  function persons(username = "Ümit", surname = "Kaya") {
    this.usernameValue = username;
    this.surnameValue = surname;
  }
  var result = new persons();
  var writeUsername = result.usernameValue;
  var writeSurname = result.surnameValue;
  var textWrite = writeUsername + " " + writeSurname;
  document.write(textWrite);
};
//! Fonksiyon şeklindeki nesne tanımlamalarında gönderilen parametrelerin sonradan değiştirilmesi...
function objectsExample20() {
  function persons(username, surname, old, city) {
    this.usernameFeature = username;
    this.surnameFeature = surname;
    this.oldFeature = old;
    this.cityFeature = city;
    this.process = function (cityValue) {
      this.cityFeature = cityValue;
    }
  }
  var result = new persons("Ümit", "Kaya", "30", "Gaziantep");
  result.process("Mersin");
  document.write(result.usernameFeature + "<br>");
  document.write(result.surnameFeature + "<br>");
  document.write(result.oldFeature + "<br>");
  document.write(result.cityFeature);
};
//! Nesnelerde for in döngüsünün kullanımı...
function forInExample() {
  var persons = {
    username: "Ümit",
    surname: "Kaya",
    old: 30,
    city: "Mersin"
  }
  var result;
  for (result in persons) {
    var content = result;
    var personsValue = persons[result];
    document.write(content + ":" + personsValue + "<br>");
  }
};
//! İç İçe Çok boyutlu nesneler ile çalışma...
function largeObjectsExample() {
  var info = {
    username: "Ümit",
    surname: "Kaya",
    detail: {
      old: 30,
      city: "Mersin",
      languages: {
        languagesOne: "PHP",
        languagesTwo: "Javascript"
      }
    }
  }
  document.write(info.username + "<br>");
  document.write(info.surname + "<br>");
  document.write(info.detail.old + "<br>");
  document.write(info.detail.city + "<br>");
  document.write(info.detail.languages.languagesOne + "<br>");
  document.write(info.detail.languages.languagesTwo);
};
//! Nesnelerde delete metodu kullanımı...
function deleteExample() {
  var info = {
    username: "Ümit",
    surname: "Kaya",
    detail: {
      old: 30,
      city: "Mersin",
      languages: {
        languagesOne: "PHP",
        languagesTwo: "Javascript"
      }
    }
  }
  delete info.detail.languages.languagesOne
  info.detail.languages.languagesOne = "Css";
  document.write(info.username + "<br>");
  document.write(info.surname + "<br>");
  document.write(info.detail.old + "<br>");
  document.write(info.detail.city + "<br>");
  document.write(info.detail.languages.languagesOne + "<br>");
  document.write(info.detail.languages.languagesTwo);
};
//! Nesnelerde prototype özelliğinin kullanımı...
function prototypeExample() {
  function persons(username, surname, city) {
    this.usernameFeatures = username;
    this.surnameFeatures = surname;
    this.cityFeatures = city;
  }
  persons.prototype.process = function () {
    return this.usernameFeatures + " " + this.surnameFeatures + " " + this.cityFeatures;
  }
  var result = new persons("Ümit", "Kaya", "Mersin");
  document.write(result.process());
};
//! Nesnelerde __proto__ özelliğinin kullanımı...
function protoExample() {
  function info() {
    this.username = "Ümit";
    this.surname = "Kaya";
  }
  info.prototype.process = function () {
    this.content = "Merhaba";
  }
  var process = new info();
  process.__proto__.process();
  var writeUsername = process.username;
  var writeSurname = process.surname;
  var writeContent = process.content;
  document.write(writeUsername + " " + writeSurname + " " + writeContent);
};
//! hasOwnProperty() | Bir nesnenin parametrik olarak girilen özelliğinin kullanılıp kullanılmadığını kontrol ederek Boolean veri türünde sonucu gösterir.
function hasOwnPropertyExample() {
  var info = {
    username: "Ümit",
    surname: "Kaya",
    old: 30
  };
  var usernameControl = info.hasOwnProperty("username");
  document.write("username_features:" + usernameControl + "<br>");
  var surnameControl = info.hasOwnProperty("username");
  document.write("surname_features:" + surnameControl + "<br>");
  var oldControl = info.hasOwnProperty("old");
  document.write("surname_features:" + oldControl + "<br>");
  var cityControl = info.hasOwnProperty("city");
  document.write("city_features:" + cityControl);
};
//! propertyIsEnumerable | Bir nesnenin parametrik olarak girilen özelliğinin kullanılıp kullanılmadığını ve numaralandırılabilir olup olmadığını kontrol ederek Bollean veri türünde sonuuu gösterir.
function propertyIsEnumerableExample() {
  var info = {
    username: "Ümit",
    surname: "Kaya",
    old: 30
  };
  var writeUsername = info.username;
  var writeSurname = info.surname;
  var writeOld = info.old;
  var writeCity = info.city
  var usernameControl = info.propertyIsEnumerable("username");
  document.write(writeUsername + ":" + usernameControl + "<br>");
  var surnameControl = info.propertyIsEnumerable("username");
  document.write(writeSurname + ":" + surnameControl + "<br>");
  var oldControl = info.propertyIsEnumerable("old");
  document.write(writeOld + ":" + oldControl + "<br>");
  var cityControl = info.propertyIsEnumerable("city");
  document.write(writeCity + ":" + cityControl);
};
//! isPrototypeOf() | Parametrik olarak girilen nesne prototip zincirinde bir constructor(yapıcı metod) bulunup bulunmadığını kontrol ederek Boolean veri türünde sonucu gösterir.
function isPrototypeOfExample() {
  function info() {
  }
  var process = new info();
  var control = info.prototype.isPrototypeOf(process);
  document.write(control)
};
//! instanceof | Bir nesnenin constructor'nın doğruluğunu kontrol ederek Boolean veri türünde sonucu gösterir.
function instanceOfExample() {
  function demo1() {
  }
  function demo2() {
  }
  var result1 = new demo1();
  var process1 = result1 instanceof demo1;
  document.write(process1 + "<br>");
  var result2 = new demo1();
  var process2 = result1 instanceof demo2;
  document.write(process2);
};
//! constructor | Nesnenin yapıcı metodunu elde etmek için kullanılır ve yapıcı metodun değerini gösterir. Aynı zamanda kontrol işlemleri içinde kullanılabilir.
function constructorExample() {
  function info() {
    username: "Ümit";
  }
  var result = new info();
  var process = result.constructor
  document.write(process);
};
//! toString() | Nesnenin karakter dizisi olarak temsil edilen halinin değerini gösterir.
function toStringExample() {
  function process() {
    this.username = "Ümit Kaya";
  }
  process.prototype.toString = function () {
    document.write(this.username);
  }
  var info = new process();
  var result = info.toString();
};
//! toLocaleString() | Nesnenin tarayıcı lokasyonuna göre karakter dizisi olarak temsil edilen halinin değerini gösterir.
function toLocaleStringExample() {
  var price = 2578;
  var result = price.toLocaleString("tr-TR", { style: "currency", currency: "TRY" });
  document.write(result);
};
export {
  objectsExample1,
  objectsExample2,
  objectsExample3,
  objectsExample4,
  objectsExample5,
  objectsExample6,
  objectsExample7,
  objectsExample8,
  objectsExample9,
  objectsExample10,
  objectsExample11,
  objectsExample12,
  objectsExample13,
  objectsExample14,
  objectsExample15,
  objectsExample16,
  objectsExample17,
  objectsExample18,
  objectsExample19,
  objectsExample20,
  forInExample,
  largeObjectsExample,
  deleteExample,
  prototypeExample,
  protoExample,
  hasOwnPropertyExample,
  propertyIsEnumerableExample,
  isPrototypeOfExample,
  instanceOfExample,
  constructorExample,
  toStringExample,
  toLocaleStringExample
}