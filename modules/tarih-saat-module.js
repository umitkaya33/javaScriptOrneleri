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
//! getMonth() | Kullanıldığı değişken içerisine ay bilgisini 0 ile 11 arasında rakamsal olarak depolar.
var getMonthFunctionSimple = function () {
    var viewTime = new Date(),
        month = viewTime.getMonth();
    if (month == 0) {
        var viewMonth = "Ocak";
    } else if (month == 1) {
        var viewMonth = "Şubat";
    } else if (month == 2) {
        var viewMonth = "Mart";
    } else if (month == 3) {
        var viewMonth = "Nisan";
    } else if (month == 4) {
        var viewMonth = "Mayıs";
    } else if (month == 5) {
        var viewMonth = "Haziran";
    } else if (month == 6) {
        var viewMonth = "Temmuz";
    } else if (month == 7) {
        var viewMonth = "Ağustos";
    } else if (month == 8) {
        var viewMonth = "Eylül";
    } else if (month == 9) {
        var viewMonth = "Ekim";
    } else if (month == 10) {
        var viewMonth = "Kasım";
    } else if (month == 11) {
        var viewMonth = "Aralık";
    }
    document.write(viewMonth);
};
//! getDate() | Kullanıldığı değişken içerisine gün bilgisini 1 ile 31 arasında rakamsal olarak depolar.
var getDateFunctionSimple = function () {
    var viewTime = new Date(),
        viewDay = viewTime.getDate();
    document.write(viewDay);
};
export {
    dateFunctionSimple,
    getFullYearFunctionSimple,
    getMonthFunctionSimple,
    getDateFunctionSimple
};
