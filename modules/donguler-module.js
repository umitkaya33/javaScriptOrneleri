var whileDongusuOrnegi = function(){


  var x ="While Dongusu";
  var count=1;
  while(count<=5){
    document.write("While Döngüsü <br>");
    count++;
  }

  if (1==1) {

  }
};

var icIceWhileDongusuOrnegi = function(){

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

var icIceForDongusuOrnegi = function(){

  document.write("İç İçe For_Döngüsü <br>");
  for(  var x=1;  x<=5; x++ ){
    for(  var y=1; y<=5;  y++){
      document.write("*");
    }
    document.write("<br>");
  }
};

var forInDongusuOrnegi = function(){

  document.write("For In Döngüsü <br>");
  var car   = { brand:  "Volkwagen",  model:  "Golf" , old:15, price:235000, city:"Mersin"};
  var view  = " ";
  var x;
  for (x in car){
    view += car[x] +  " ";
  }
  document.write(view + "<br>");
};



export {icIceWhileDongusuOrnegi,icIceForDongusuOrnegi,forInDongusuOrnegi};
