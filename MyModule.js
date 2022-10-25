
var MyModule = (function(){

var MesajGoster = function(mesaj){
  alert(mesaj);
};

var HataGoster = function(){
  alert('Hata yaptınız. işlem iptal ediliyor !');
};

var DocumentWriteOrnegi = function(){
  document.write('Hello World');
};

var MatislemOrnegi = function(){
  var x=5,y=15,z=x*y;
  document.write(z);
};

var DegiskenOrnegi = function(){
  var name="Umit";
  var old=30;
  document.write("Username:"+name+"<br/>");
  document.write("Age:"+old+"<br/>");
};

var ModOrnegi = function(){
  var mod="25";
  mod %=3;
  document.write("Girilen sayının 3 ile bölümünden kalan:"+mod);
};

var IfElseOrnegi = function(){
  var name="Umit";
  if ( name == "Orkun" )
  {
    document.write("Kullanıcı Adı Dogru" + name);
  }
  else {
    document.write("Kullanıcı Adı Yanlış");
  }
  };

  var SwitchCaseOrnegi = function(){
    var car="x";
  switch (car)
  {
  case "BMW":document.write("Secilen Araba:"+car);
    break;
  default:document.write("Yanlış Seçim:"+car);
}
};

var ForDongusuOrnegi = function(){

  document.write("For Of Döngüsü <br>");
  var person  = [ "Ümit","Kaya",30,"Mersin","Siyah"];
  var z;
  for (z of person)
  {
    document.write(z+"<br>");
  }
};

var WhileDongusuOrnegi = function(){

  document.write("While Döngüsü <br>");
  var x ="While Dongusu";
  var count=1;
  while(count<=5){document.write(count+"."+x+"<br>");count++;}
};

var IcIceWhileDongusuOrnegi = function(){

  document.write("İç İçe while");
  document.write(space);
  var count1  = 1;
  var count2  = 1;
  while(count1  <=  5)
  {
    while(count2  <= 5)
                          {
      document.write("*");
      count2++;
                          }
    document.write("<br>");
    count1++;
    count2  = 1;
    }
};

var IcIceForDongusuOrnegi = function(){

  document.write("İç İçe For_Döngüsü <br>");
  for(  var x=1;  x<=5; x++ ){
    for(  var y=1; y<=5;  y++){
      document.write("*");
    }
    document.write("<br>");
  }
};

var ForInDongusuOrnegi = function(){

  document.write("For In Döngüsü <br>");
  var car   = { brand:  "Volkwagen",  model:  "Golf" , old:15, price:235000, city:"Mersin"};
  var view  = " ";
  var x;
  for (x in car){
    view += car[x] +  " ";
  }
  document.write(view + "<br>");
};

var ForOfDongusuOrnegi = function(){

  document.write("For Of Döngüsü <br>");
  var person  = [ "Ümit","Kaya",30,"Mersin","Siyah"];
  var z;
  for (z of person)
  {
    document.write(z+"<br>");
  }

};


return{
  MGoster:MesajGoster,
  HGoster:HataGoster,
  DocumentWriteOrnegi:DocumentWriteOrnegi,
  MatislemOrnegi:MatislemOrnegi,
  DegiskenOrnegi:DegiskenOrnegi,
  ModOrnegi:ModOrnegi,
  IfElseOrnegi:IfElseOrnegi,
  SwitchCaseOrnegi:SwitchCaseOrnegi,
  ForDongusuOrnegi:ForDongusuOrnegi,
  WhileDongusuOrnegi:WhileDongusuOrnegi,
  IcIceWhileDongusuOrnegi:IcIceWhileDongusuOrnegi,
  IcIceForDongusuOrnegi:IcIceForDongusuOrnegi,
  ForInDongusuOrnegi:ForInDongusuOrnegi,
  ForOfDongusuOrnegi:ForOfDongusuOrnegi,

}
})();
