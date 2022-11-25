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
export {
  objectsExample1,
  objectsExample2,
  objectsExample3,
  objectsExample4,
  objectsExample5,
  objectsExample6,
  objectsExample7,
  objectsExample8,
  objectsExample9
}