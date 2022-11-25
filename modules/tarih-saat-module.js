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
    viewTime.setFullYear(1991, 2);
    document.write(viewTime);
};
//! setMonth() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin ay bilgisini depolar..( Çoklu ayarlama işlemi yapılabilir )
var setMonthFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setMonth(1, 2);
    document.write(viewTime);
};
//! setDate() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin gün bilgisini depolar..
var setDateFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setDate(25);
    document.write(viewTime);
};
//! setHours() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin saat bilgisini depolar..( Çoklu ayarlama işlemi yapılabilir )
var setHoursFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setHours(6, 59, 59);
    document.write(viewTime);
};
//! setMinutes() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin dakika bilgisini depolar..( Çoklu ayarlama işlemi yapılabilir )
var setMinutesFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setMinutes(59, 59);
    document.write(viewTime);
};
//! setSeconds() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin saniye bilgisini depolar..( Çoklu ayarlama işlemi yapılabilir )
var setSecondsFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setSeconds(59, 59);
    document.write(viewTime);
};
//! setMilliseconds() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin milisaniye bilgisini depolar..
var setMillisecondsFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setMilliseconds(999);
    document.write(viewTime);
};
//! setUTCFullYear() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin evrensel zaman dilimine ait yıl bilgisini depolar.. ( Çoklu ayarlama işlemi yapılabilir )
var setUTCFullYearFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setUTCFullYear(2023, 0, 1);
    document.write(viewTime);
};
//! setUTCMonth() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin evrensel zaman dilimine ait ay bilgisini depolar.. ( Çoklu ayarlama işlemi yapılabilir )
var setUTCMonthFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setUTCMonth(2, 29);
    document.write(viewTime);
};
//! setUTCDate() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin evrensel zaman dilimine ait gün bilgisini depolar.. 
var setUTCDateFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setUTCDate(25);
    document.write(viewTime);
};
//! setUTCHours() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin evrensel zaman dilimine saat bilgisini depolar.. ( Çoklu ayarlama işlemi yapılabilir )
var setUTCHoursFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setUTCHours(18, 59, 59);
    document.write(viewTime);
};
//! setUTCMinutes() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin evrensel zaman dilimine dakika bilgisini depolar.. ( Çoklu ayarlama işlemi yapılabilir )
var setUTCMinutesFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setUTCMinutes(59, 59);
    document.write(viewTime);
};
//! setUTCSeconds() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin evrensel zaman dilimine saniye bilgisini depolar.. ( Çoklu ayarlama işlemi yapılabilir )
var setUTCSecondsFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setUTCSeconds(59, 999);
    document.write(viewTime);
};
//! setUTCMilliseconds() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğinin evrensel zaman dilimine milisaniye bilgisini depolar.. 
var setUTCMillisecondsFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setUTCMilliseconds(999);
    document.write(viewTime);
};
//! getTime() | Kullanıldığı değişken içeriğine tarihin zaman damgası bilgisini depolar.. Zaman damgası başlangıç(01.01.1970)
var getTimeFunctionSimple = function () {
    var viewTime = new Date(),
        stampTime = viewTime.getTime();
    document.write(viewTime + "<br>" + stampTime);
};
//! setTime() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğine tarihin zaman damgası bilgisini depolar.. Zaman damgası başlangıç(01.01.1970)
var setTimeFunctionSimple = function () {
    var viewTime = new Date();
    viewTime.setTime(-499999999999);
    document.write(viewTime);
};
//! now() | Kullanıldığı değişken içeriğine evrensel zaman dilimine ait tarihin zaman damgası bilgisini depolar.. Zaman damgası başlangıç(01.01.1970)
var nowFunctionSimple = function () {
    var viewTime = Date.now();
    document.write(viewTime);
};
//! UTC() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğine evrensel zaman dilimine ait tarihin zaman damgası bilgisini depolar.. Zaman damgası başlangıç(01.01.1970) 
//! Sıralaması : Yıl - Ay - Gün >>> Opsiyonel : Saat - Dakika - Saniye - Milisaniye
var utcFunctionSimple = function () {
    var viewTime = Date.UTC(1991, 2, 2);
    document.write(viewTime);
};
//! parse() | Kendisine parametre olarak belirtilmiş değer doğrultusunda kullanıldığı değişken içeriğine tarihin zaman damgası başlangıcı ile arasındaki zaman farkı bilgisini depolar.. 01.01.1970 - girilen değer arasındaki fark
var parseFunctionSimple = function () {
    var difference = Date.parse("February 2, 1991");
    document.write(difference);
};
//! getTimezoneOffset() | Kullanıldığı değişken içeriğine yerel zaman ile 0(GMT) zaman arasındaki zaman fark bilgisini dakika olarak depolar..
var getTimezoneOffsetFunctionSimple = function () {
    var viewTime = new Date(),
        difference = viewTime.getTimezoneOffset();
    document.write(difference);
};
//! toString() | Kullanıldığı değişken içeriğine atanmış olan tarih ve zaman bilgilerini alarak düz bir metne çevirir...
var toStringFunctionSimple = function () {
    var viewTime = new Date(),
        dataTime = typeof viewTime,
        convertTime = viewTime.toString(),
        dataConvert = typeof convertTime;
    document.write(viewTime + "  " + dataTime + "<br>");
    document.write(convertTime + "  " + dataConvert);
};
//! toLocaleString() | Kullanıldığı değişken içeriğine atanmış olan tarih ve saat bilgilerini tarayıcı lokasyonuna göre düz bir metne çevirir...
var toLocaleStringFunctionSimple = function () {
    var viewTime = new Date(),
        dataTime = typeof viewTime,
        convertTime = viewTime.toLocaleString(),
        dataConvert = typeof convertTime;
    document.write(viewTime + "  " + dataTime + "<br>");
    document.write(convertTime + "  " + dataConvert);
};
//! toUCTString() | Kullanıldığı değişken içeriğine atanmış olan tarih ve saat bilgilerini evrensel zaman diliminde alarak düz bir metne çevirir...
var toUCTStringFunctionSimple = function () {
    var viewTime = new Date(),
        dataTime = typeof viewTime,
        convertTime = viewTime.toUTCString(),
        dataConvert = typeof convertTime;
    document.write(viewTime + "  " + dataTime + "<br>");
    document.write(convertTime + "  " + dataConvert);
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
    setMonthFunctionSimple,
    setDateFunctionSimple,
    setHoursFunctionSimple,
    setMinutesFunctionSimple,
    setSecondsFunctionSimple,
    setMillisecondsFunctionSimple,
    setUTCFullYearFunctionSimple,
    setUTCMonthFunctionSimple,
    setUTCDateFunctionSimple,
    setUTCHoursFunctionSimple,
    setUTCMinutesFunctionSimple,
    setUTCSecondsFunctionSimple,
    setUTCMillisecondsFunctionSimple,
    getTimeFunctionSimple,
    setTimeFunctionSimple,
    nowFunctionSimple,
    utcFunctionSimple,
    parseFunctionSimple,
    getTimezoneOffsetFunctionSimple,
    toStringFunctionSimple,
    toLocaleStringFunctionSimple,
    toUCTStringFunctionSimple
};
