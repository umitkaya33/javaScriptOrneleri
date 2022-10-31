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
  };
