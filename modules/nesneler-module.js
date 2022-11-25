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
export {
  objectsExample1
}