import  * as  degiskenModule from "./modules/degisken-module.js";
import  * as  dongulerModule from "./modules/donguler-module.js";

const btnDongulerWhile = document.getElementById('btnDongulerWhile');
const btnDegiskenLenght = document.getElementById('btnDegiskenLenght');

 btnDongulerWhile.addEventListener('click',()=>{
 dongulerModule.icIceWhileDongusuOrnegi();
 });

btnDegiskenLenght.addEventListener('click',()=>{
degiskenModule.lenghtFunctionSimple();
 });

//  window.onload = function(){
//     dongulerModule.icIceWhileDongusuOrnegi();
//  }
