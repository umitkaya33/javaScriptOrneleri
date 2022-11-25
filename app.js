import * as  degiskenModule from "./modules/degisken-module.js";
import * as  dongulerModule from "./modules/donguler-module.js";
import * as  kosulModule from "./modules/kosul-module.js";
import * as  dizilerModule from "./modules/diziler-module.js";
import * as islemlerModule from "./modules/islemler-module.js";
import * as matModule from "./modules/mat-islem-module.js";
import * as duzenModule from "./modules/duzenli-ifadeler-module.js";
import * as tarihSaatModule from "./modules/tarih-saat-module.js";

const btnDongulerWhile = document.getElementById('btnDongulerWhile');
const btnDegiskenLenght = document.getElementById('btnDegiskenLenght');
const btnKosulModuleIF = document.getElementById('btnKosulModuleIF');
const btnDiziler = document.getElementById('btnDiziler');
const btnIslemler = document.getElementById('btnIslemler');
const btnMat = document.getElementById('btnMat');
const btnDuzen = document.getElementById('btnDuzen');
const btnTarih = document.getElementById('btnTarih');

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

btnMat.addEventListener('click', () => {
   matModule.testFunctionSimple();
});
btnDuzen.addEventListener('click', () => {
   duzenModule.example34FunctionSimple();
});
btnTarih.addEventListener('click', () => {
   tarihSaatModule.toISOStringFunctionSimple();
});
