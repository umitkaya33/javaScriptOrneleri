
var space="<br/>"

// Document Write Kullanımı
document.write('Hello World');
document.write(space);

// Alert Kullanımı
alert('Hello Alert');

//Degisken Kullanımı
var x=5,y=15,z=x*y;
document.write(z);
document.write(space);

var count=20;
document.write(count+5);
document.write(space);

var name="Umit";
var old=30;
document.write("Username:"+name+"<br/>");
document.write("Age:"+old+"<br/>");

var number=25;
number*=48;
document.write("Girilen sayi*48:"+number);
document.write(space);

// Mod Alma
var mod="25";
mod %=3;
document.write("Girilen sayının 3 ile bölümünden kalan:"+mod);
document.write(space);
var mod="25";
mod %=5;
document.write("Girilen sayının 5 ile bölümünden kalan:"+mod);
document.write(space);
var mod="25";
mod %=8;
document.write("Girilen sayının 8 ile bölümünden kalan:"+mod);
document.write(space);

//IF Else Kullanımı
var name="Umit";
if ( name == "Orkun" )
{ document.write("Kullanıcı Adı Dogru" + name); }
else { document.write("Kullanıcı Adı Yanlış"); }
document.write(space);

// Switch Case Kullanımı
var car="x";
switch (car) {
case "BMW":document.write("Secilen Araba:"+car);
  break;
default:document.write("Yanlış Seçim:"+car);}
document.write(space);

// While Dongusu Kullanımı
var x ="While Dongusu";
var count=1;
while(count<=5){document.write(count+"."+x+"<br>");count++;}
