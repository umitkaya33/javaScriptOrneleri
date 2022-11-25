//! Nesne tanımlama ve nesneyi çağırma...
var objectsExample1 = function () {
  var info = { userName: "Ümit", userSurname: "Kaya", userDateOfBirth: 1991 },
    personName = info.userName,
    personSurname = info.userSurname,
    personDate = info.userDateOfBirth;
  document.write("Kişi Adı:" + personName + "<br>");
  document.write("Kişi Soyadı:" + personSurname + "<br>");
  document.write("Kişi Doğum Tarihi:" + personDate);
};
//! new operatörü kullanarak nesne tanımlama ve nesneyi çağırma...
var objectsExample2 = function () {
  var info = new Object();
  info.userName = "Ümit";
  info.userSurname = "Kaya";
  info.userDateOfBirth = 1991;
  var writeName = info.userName,
    writeSurname = info.userSurname,
    writeDateOfBirth = info.userDateOfBirth;
  document.write("Kişi Adı:" + writeName + "<br>");
  document.write("Kişi Soyadı:" + writeSurname + "<br>");
  document.write("Kişi Doğum Tarihi:" + writeDateOfBirth);
};
//! fonksiyon şeklinde nesne tanımlama ve nesneyi çağırma...
var objectsExample3 = function () {
  function objectsFunction() {
    this.username = "Ümit";
    this.usersurname = "Kaya";
  }
  var info = new objectsFunction();
  document.write("Kişi Adı:" + info.username + "<br>");
  document.write("Kişi Soyadı:" + info.usersurname + "<br>");
};
export {
  objectsExample1,
  objectsExample2,
  objectsExample3
}