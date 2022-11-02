var lenghtFunctionSimple = function() {
document.write("<b>Lengt Modulü: </b>");
document.write("Degisken içeriğinin karakter sayısını gösterir. <br />");
var text = "Dünyada ve Türkiye'de en yaygın olarak kullanılan script dili JavaScript'tir.";
document.write(text + "<br />");
var process = text.lenght;
document.write("Karakter Sayısı: " + process);
};
var evalFunctionSimple = function() {
  document.write("<b>Eval Modulü: </b>");
  document.write("Kendisine parametre olarak verilen değerleri JavaScript kodlamasına çevirerek komut gibi çalıştırır. <br />");
  document.write("40*50=");
  var process = eval("40 * 50");
  document.write(process);
};
var trimFunctionSimple = function() {
  document.write("<b>Trim Metodu: </b>");
  document.write("Değişken içeriğinin varsa başındaki ve sonundaki tüm boşlukları temizler. <br />");
  var sample    =   "    JavaScript     ";
  var contents  =   "Eğitim Seti    <br>";
  var result    = sample+contents;
  var process   =   sample.trim();
  document.write(process+contents);
};
var sliceFunctionSimple = function() {
  document.write("<b>Slice Metodu: </b>");
  document.write("Kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur. <br />");
  var contents  = "Ümit Kaya JavaScript Eğitim Seti <br>";
  document.write(contents);
  var process   = contents.slice();
  document.write(process);
};
var subStringFunctionSimple = function() {
  document.write("<b>SubString Modülü: </b>");
  document.write("Kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur. <br />");
  var text    = "JavaScript Eğitim Seti";
  document.write(text);
  var process =  text.substring();
  document.write(process);
};
var subStrFunctionSimple = function() {
  document.write("<b>SubStr Metodu: </b>");
  document.write("Kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur. <br />");
  var text    = "JavaScript dünya üzerinde kullanılan en yaygın script dilidir.";
  document.write(text+"<br/>");
  var process =  text.substr(-25,25);
  document.write(process);
};
var concatFunctionSimple = function() {
  document.write("<b>Concat Metodu: </b>");
  document.write("Üzerinde çalışılan değişkene parametrik olarak verilen değişken veya değişkenlere dahil ederek yeni bir içerik oluşturur. <br />");
  var username    = "Ümit ";
  var surname     = "Kaya ";
  var city        = "Mersin "
  var country     = "Turkey"
  var write       = username.concat(surname,city,country);
  document.write(write);
};
var repeatFunctionSimple = function() {
  document.write("<b>Repeat Metodu: </b>");
  document.write("Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini tekrar edip kopyalayarak yeni bir içerik oluşturur. <br />");
  var text ="JavaScript ";
  var process =text.repeat(25);
  document.write(process);
};
var toStringFunctionSimple = function() {
  document.write("<b>toString Metodu: </b>");
  document.write("Değişken içeriğini string veri türünde düz bir metne dönüştürür. <br />");
  var value =2332;
  var result=value.toString();
  document.write(value);
  document.write(" Veri Türü:"+typeof(value)+"<br>");
  document.write(typeof(result)+" (düz metin) olarak değiştirildi.");
};
var stringFunctionSimple = function() {
  document.write("<b>String Metodu: </b>");
  document.write("Değişken içeriğini mutlak olarak string veri türünde düz bir metne dönüştürür. <br />");
  var one   = Boolean(0);
  var two   = Boolean(1);
  var three =74;
  var four  =3.14;
  var five;
  var six   =new Date();
  document.write(typeof one + ":" + one   +"<br>");
  document.write(typeof two + ":" + two   +"<br>");
  document.write(typeof three + ":" + three +"<br>");
  document.write(typeof four + ":" + four  +"<br>");
  document.write(typeof five + ":" + five  +"<br>");
  document.write(typeof six  + ":" + six   +"<br><br>");
  var newone   =String(one);
  var newtwo   =String(two);
  var newthree =String(three);
  var newfour  =String(four);
  var newfive  =String(five);
  var newsix   =String(six);
  document.write(typeof newone + ":" + newone   +"<br>");
  document.write(typeof newtwo + ":" + newtwo   +"<br>");
  document.write(typeof newthree + ":" + newthree +"<br>");
  document.write(typeof newfour + ":" + newfour  +"<br>");
  document.write(typeof newfive + ":" + newfive  +"<br>");
  document.write(typeof newsix  + ":" + newsix );
};
var numberFunctionSimple = function() {
document.write("<b>Number Metodu: </b>");
document.write("Değişken içeriğini mutlak olarak number veri türüne dönüştürür.<br />");
var one1   = true;
var two2   = false;
var three3 ="7";
var four4  ="3.14";
var five5  =new Date();
document.write(typeof (one1) + ":" + one   +"<br>");
document.write(typeof (two2) + ":" + two   +"<br>");
document.write(typeof (three3) + ":" + three +"<br>");
document.write(typeof (four4) + ":" + four  +"<br>");
document.write(typeof (five5) + ":" + five  +"<br><br>");
var valueone   =  Number(one1);
var valuetwo   =  Number(two2);
var valuethree =  Number(three3);
var valuefour  =  Number(four4);
var valuefive  =  Number(five5);
document.write(typeof valueone + ":" + valueone   +"<br>");
document.write(typeof valuetwo + ":" + valuetwo   +"<br>");
document.write(typeof valuethree + ":" + valuethree +"<br>");
document.write(typeof valuefour + ":" + valuefour  +"<br>");
document.write(typeof valuefive + ":" + valuefive);
};
var valueOfFunctionSimple = function() {
document.write("<b>ValueOf Metodu: </b>");
document.write("Üzerinde çalışılan değişken değerinin tam anlamıyla aktarımını sağlar. <br />");
var price1=5;
var price2="5";
document.write(typeof price1  + ":" +  price1  + "<br>");
document.write(typeof price2  + ":" + price2 + "<br>" );
var showresult1 = price1.valueOf();
var showresult2 = price2.valueOf();
document.write(typeof showresult1 + ":" +showresult1+ "<br>");
document.write(typeof showresult2 + ":" +showresult2+ "<br>");
};
var indexOfFunctionSimple = function() {
  document.write("<b>indexOf Metodu: </b>");
  document.write("Değişken içerisinde parametrik olarak verilen değeri arar ve ilk eşleşmeye çalışan değişken içeriğinin karakter sırasını ekrana yazdırır. <br />");
  var text ="Javascript dünya üzerinde kullanılan en yaygın script dilidir." ;
  document.write(text+"<br>");
  var showtext =text.indexOf("dünya");
  document.write(showtext);
};
var lastIndexOfFunctionSimple = function() {
  document.write("<b>lastIndexOf Metodu: </b>");
  document.write("Değişken içerisinde parametrik olarak verilen değeri arar ve son eşleşmeye çalışan değişken içeriğinin karakter sırasını ekrana yazdırır. <br />");
  var text ="Javascript dünya üzerinde kullanılan en yaygın script dilidir." ;
  document.write(text+"<br>");
  var showtext =text.lastIndexOf("script");
  document.write(showtext);
};
var searchFunctionSimple = function() {
  document.write("<b>search Metodu: </b>");
  document.write("Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini arayarak ilk eşleşmeyi sağlayan değişken içeriğinin karakter sırasını ekrana yazdırır. <br />");
  var text = "Javascript dünya üzerinde kullanılan en yaygın script dilidir."
  document.write(text+"<br>");
  var showtext =text.search("script");
  document.write(showtext);
};
var includesFunctionSimple = function() {
  document.write("<b>includes Metodu: </b>");
  document.write("Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini kontrol ederek Boolean veri türünde sonucu ekrana yazdırır. <br />");
  var text ="Javascript Eğitim Seti";
  document.write(text+"<br>")
  var process=text.includes("php");
  document.write(process);
};
var startsWithFunctionSimple = function() {
  document.write("<b>startsWith Metodu: </b>");
  document.write("Kendisine parametre olarak verilen değerler doğrultusunda değişken içeriğini kontrol ederek Boolean veri türünde sonucu ekrana yazdırır. <br />");
  var text ="Javascript Eğitim Seti";
  document.write(text+"<br>")
  var process=text.startsWith("Javasc");
  document.write(process);
};
var endsWithFunctionSimple = function() {
  document.write("<b>endsWith Metodu: </b>");
  document.write("Kendisine parametre olarak verilen değerler doğrultusunda değişken içeriğini bitiş değerini kontrol ederek Boolean veri türünde sonucu ekrana yazdırır.. <br />");
  var text ="Javascript Eğitim Seti";
  document.write(text+"<br>")
  var process=text.endsWith("Seti");
  document.write(process);
};
var matchFunctionSimple = function() {
  document.write("<b>match Metodu: </b>");
  document.write("Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini kontrol eder ve eşleşen değer varsa içeriğin eşleşen kısmından yeni bir içerik oluşturur ve ekrana yazdırır. <br />");
  var text =" Ümit Kaya Javascript Eğitim Seti";
  document.write(text+"<br>")
  var process=text.match(/üMiT kaYA/i); // "/i hatalı yazımı (büyük küçük harf) düzenli ifade haline getirir..
  document.write(process);
};
var replaceFunctionSimple = function() {
  document.write("<b>replace Metodu: </b>");
  document.write("Kendisine verilecek olan parametreler doğrultusunda değişken içeriğini kontrol eder ve eşleşen değerlerin değişimini sağlayarak yeni bir içerik oluşuturur ve ekrana yazdırır. <br /><br />");
  var text ="JavaScript (genellikle JS olarak kısaltılır), HTML ve CSS ile birlikte World Wide Web'in temel teknolojilerinden biri olan programlama dilidir . Web sitelerinin %97'sinden fazlası, web sayfası hareketleri için istemci tarafında JavaScript kullanırlar ve kullanılan kodlar genellikle üçüncü taraf kitaplıkları içerir. Tüm büyük web tarayıcılarında, kaynak kodunu kullanıcıların cihazlarında yürütebilmek için özel bir JavaScript motoru bulunur.";
  document.write(text+"<br><br>")
  var process=text.replace(/javAsCripT/gi,"PHP"); // "/gi hatalı yazımı (tüm içerik) (büyük küçük harf) düzenli ifade haline getirir..
  document.write(process);
};
var splitFunctionSimple = function() {
  document.write("<b>split Metodu: </b>");
  document.write("Kendisine parametre olarak tanımlanmış değer doğrultusunda değişken içeriğini bölümleyerek yeni bir dizi oluşturur . <br />");
  var text ="Ümit Kaya Javascript Eğitim Seti";
  document.write("<b>"+typeof text+"</b>"+":"+text+"<br>")
  var process=text.split(" ");
  document.write("<b>"+typeof process+"</b>"+":"+process);
};


export{
  lenghtFunctionSimple,
  evalFunctionSimple,
  trimFunctionSimple,
  sliceFunctionSimple,
  subStringFunctionSimple,
  subStrFunctionSimple,
  concatFunctionSimple,
  repeatFunctionSimple,
  toStringFunctionSimple,
  stringFunctionSimple,
  numberFunctionSimple,
  valueOfFunctionSimple,
  indexOfFunctionSimple,
  lastIndexOfFunctionSimple,
  searchFunctionSimple,
  includesFunctionSimple,
  startsWithFunctionSimple,
  endsWithFunctionSimple,
  matchFunctionSimple,
  replaceFunctionSimple,
  splitFunctionSimple
  };
