import * as  degiskenModule from "./modules/degisken-module.js";
import * as  dongulerModule from "./modules/donguler-module.js";
import * as  kosulModule from "./modules/kosul-module.js";
import * as  dizilerModule from "./modules/diziler-module.js";
import * as islemlerModule from "./modules/islemler-module.js";


const btnDongulerWhile = document.getElementById('btnDongulerWhile');
const btnDegiskenLenght = document.getElementById('btnDegiskenLenght');
const btnKosulModuleIF = document.getElementById('btnKosulModuleIF');
const btnDiziler = document.getElementById('btnDiziler');
const btnIslemler = document.getElementById('btnIslemler');


btnDongulerWhile.addEventListener('click', () => {
   dongulerModule.dowhileFunctionSimple();
});

btnDegiskenLenght.addEventListener('click', () => {
   degiskenModule.lenghtFunctionSimple();
});


btnKosulModuleIF.addEventListener('click', () => {
   kosulModule.ternaryFunctionSimple();
});

btnDiziler.addEventListener('click', () => {
   dizilerModule.forInFunctionSimple();
});

btnIslemler.addEventListener('click', () => {
   islemlerModule.toplaFunctionSimple();
});


//  window.onload = function(){
//     dongulerModule.icIceWhileDongusuOrnegi();
//  }
