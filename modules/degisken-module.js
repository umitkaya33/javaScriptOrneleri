var space= "<br><br>"

document.write("<b>Lengt Modulü: </b>");
document.write("Degisken içeriğinin karakter sayısını gösterir. <br />");
        var text = "Dünyada ve Türkiye'de en yaygın olarak kullanılan script dili JavaScript'tir.";
        document.write(text + "<br />");
        var process = text.lenght;
        document.write("Karakter Sayısı: " + process);
document.write(space);

document.write("<b>Eval Modulü: </b>");
document.write("Kendisine parametre olarak verilen değerleri JavaScript kodlamasına çevirerek komut gibi çalıştırır. <br />");
document.write("40*50=");
        var process = eval("40 * 50");
        document.write(process);
document.write(space);

document.write("<b>Trim Metodu: </b>");
document.write("Değişken içeriğinin varsa başındaki ve sonundaki tüm boşlukları temizler. <br />");
        var sample    =   "    JavaScript     ";
        var contents  =   "Eğitim Seti    <br>";
        var result    = sample+contents;
        var process   =   sample.trim();
        document.write(process+contents);
document.write(space);

document.write("<b>Slice Metodu: </b>");
document.write("Kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur. <br />");
        var contents  = "Ümit Kaya JavaScript Eğitim Seti <br>";
        document.write(contents);
        var process   = contents.slice();
        document.write(process);
document.write(space);

document.write("<b>SubString Modülü: </b>");
document.write("Kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur. <br />");
        var text    = "JavaScript Eğitim Seti";
        document.write(text+"<br/>");
        var process =  text.substring();
        document.write(process);
document.write(space);

document.write("<b>SubStr Metodu: </b>");
document.write("Kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur. <br />");
        var text    = "JavaScript dünya üzerinde kullanılan en yaygın script dilidir.";
        document.write(text+"<br/>");
        var process =  text.substr(-25,25);
        document.write(process);
document.write(space);

document.write("<b>Concat Metodu: </b>");
document.write("Üzerinde çalışılan değişkene parametrik olarak verilen değişken veya değişkenlere dahil ederek yeni bir içerik oluşturur. <br />");
        var username    = "Ümit ";
        var surname     = "Kaya ";
        var city        = "Mersin "
        var country     = "Turkey"
        var write       = username.concat(surname,city,country);
        document.write(write+"<br/>");
document.write(space);

document.write("<b>Repeat Metodu: </b>");
document.write("Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini tekrar edip kopyalayarak yeni bir içerik oluşturur. <br />");
        var text ="JavaScript ";
        var process =text.repeat(25);
        document.write(process);
document.write(space);
