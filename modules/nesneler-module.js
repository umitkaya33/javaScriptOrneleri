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
  objectsExample13
}