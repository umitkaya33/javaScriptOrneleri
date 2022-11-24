//! Date() | Kullanıldığı değişken içerisine tarih ve saat bilgilerini depolar.(Tarihe etki edilebilir)
var dateFunctionSimple = function () {
    var viewTime = new Date(),
        convert = String(viewTime),
        partition = convert.split(" ");
    document.write(partition + "<br>");
    document.write("YIL: " + partition[3]);
};
//! getFullYear() | Kullanıldığı değişken içerisine yıl bilgisini 4 haneli rakamsal olarak depolar.
var getFullYearFunctionSimple = function () {
    var viewTime = new Date(),
        viewYear = viewTime.getFullYear();
    document.write(viewYear);
};
export {
    dateFunctionSimple,
    getFullYearFunctionSimple
};
