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
//! getDay() | Kullanıldığı değişken içerisine haftanın gün bilgisini 0 ile 6 arasında rakamsal olarak depolar. (Haftanın ilk günü pazar olarak değerlendirilir ve değeri 0'dır)
var getDayFunctionSimple = function () {
    var viewTime = new Date(),
        viewDay = viewTime.getDay();
    document.write(viewDay);
};
//! getHours() | Kullanıldığı değişken içerisine gün saat bilgisini 0 ile 23 arasında depolar.
var getHoursFunctionSimple = function () {
    var viewTime = new Date(),
        viewHours = viewTime.getHours();
    document.write(viewHours);
};
//! getMinutes() | Kullanıldığı değişken içerisine dakika bilgisini 0 ile 59 arasında depolar.
var getMinutesFunctionSimple = function () {
    var viewTime = new Date(),
        viewMinutes = viewTime.getMinutes();
    document.write(viewMinutes);
};
//! getSeconds() | Kullanıldığı değişken içerisine saniye bilgisini 0 ile 59 arasında depolar.
var getSecondsFunctionSimple = function () {
    var viewTime = new Date(),
        viewSeconds = viewTime.getSeconds();
    document.write(viewSeconds);
};
//! getMilliseconds() | Kullanıldığı değişken içerisine milisaniye bilgisini 0 ile 999 arasında depolar.
var getMillisecondsFunctionSimple = function () {
    var viewTime = new Date(),
        viewMilliSeconds = viewTime.getMilliseconds();
    document.write(viewMilliSeconds);
};
//! getUTCFullYear() | Kullanıldığı değişken içerisine evrensel zaman dilimine ait yıl bilgisini depolar.
var getUTCFullYearFunctionSimple = function () {
    var viewTime = new Date(),
        viewUTCYear = viewTime.getUTCFullYear();
    document.write(viewUTCYear);
};
//! getUTCMonth() | Kullanıldığı değişken içerisine evrensel zaman dilimine ait ay bilgisini depolar.
var getUTCMonthFunctionSimple = function () {
    var viewTime = new Date(),
        viewUTCMonth = viewTime.getUTCMonth();
    document.write(viewUTCMonth);
};
//! getUTCDate() | Kullanıldığı değişken içerisine evrensel zaman dilimine ait gün bilgisini depolar.
var getUTCDateFunctionSimple = function () {
    var viewTime = new Date(),
        viewUTCDate = viewTime.getUTCDate();
    document.write(viewUTCDate);
};
//! getUTCDay() | Kullanıldığı değişken içerisine evrensel zaman dilimine ait haftanın gün bilgisini depolar.
var getUTCDayFunctionSimple = function () {
    var viewTime = new Date(),
        viewUTCDay = viewTime.getUTCDay();
    document.write(viewUTCDay);
};
//! getUTCHours() | Kullanıldığı değişken içerisine evrensel zaman dilimine ait saat bilgisini depolar.
var getUTCHoursFunctionSimple = function () {
    var viewTime = new Date(),
        viewUTCHours = viewTime.getUTCHours();
    document.write(viewUTCHours);
};
//! getUTCMinutes() | Kullanıldığı değişken içerisine evrensel zaman dilimine ait dakika bilgisini depolar.
var getUTCMinutesFunctionSimple = function () {
    var viewTime = new Date(),
        viewUTCMinutes = viewTime.getUTCMinutes();
    document.write(viewUTCMinutes);
};
//! getUTCSeconds() | Kullanıldığı değişken içerisine evrensel zaman dilimine ait saniye bilgisini depolar.
var getUTCSecondsFunctionSimple = function () {
    var viewTime = new Date(),
        viewUTCSeconds = viewTime.getUTCSeconds();
    document.write(viewUTCSeconds);
};
//! getUTCMillisecond() | Kullanıldığı değişken içerisine evrensel zaman dilimine ait milisaniye bilgisini depolar.
var getUTCMillisecondsFunctionSimple = function () {
    var viewTime = new Date(),
        viewUTCMilliseconds = viewTime.getUTCMilliseconds();
    document.write(viewUTCMilliseconds);
};
//! setFullYear() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin yıl bilgisini depolar..( Çoklu ayarlama işlemi yapılabilir )
var setFullYearFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setFullYear(1991,2);
    document.write(viewTime);
};
//! setMonth() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin ay bilgisini depolar..( Çoklu ayarlama işlemi yapılabilir )
var setMonthFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setMonth(1,2);
    document.write(viewTime);
};
export {
    dateFunctionSimple,
    getFullYearFunctionSimple,
    getMonthFunctionSimple,
    getDateFunctionSimple,
    getDayFunctionSimple,
    getHoursFunctionSimple,
    getMinutesFunctionSimple,
    getSecondsFunctionSimple,
    getMillisecondsFunctionSimple,
    getUTCFullYearFunctionSimple,
    getUTCMonthFunctionSimple,
    getUTCDateFunctionSimple,
    getUTCDayFunctionSimple,
    getUTCHoursFunctionSimple,
    getUTCMinutesFunctionSimple,
    getUTCSecondsFunctionSimple,
    getUTCMillisecondsFunctionSimple,
    setFullYearFunctionSimple,
    setMonthFunctionSimple
};
