import  * as  degiskenModule from "./modules/degisken-module.js";
import  * as  dongulerModule from "./modules/donguler-module.js";
import  * as  kosulModule from "./modules/kosul-module.js";

const btnDongulerWhile = document.getElementById('btnDongulerWhile');
const btnDegiskenLenght = document.getElementById('btnDegiskenLenght');
const btnKosulModuleIF= document.getElementById('btnKosulModuleIF');

 btnDongulerWhile.addEventListener('click',()=>{
    dongulerModule.icIceWhileDongusuOrnegi();
 });

btnDegiskenLenght.addEventListener('click',()=>{
    degiskenModule.lenghtFunctionSimple();
 });

 
 btnKosulModuleIF.addEventListener('click',()=>{
    kosulModule.ternaryFunctionSimple();
});

//  window.onload = function(){
//     dongulerModule.icIceWhileDongusuOrnegi();
//  }
