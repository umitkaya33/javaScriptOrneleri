import  * as  dongulerModule from "./modules/donguler-module.js";

const btnGoogle = document.getElementById('btnGoogle');
const btnShowMessaj = document.getElementById('btnShowMessaj');

let butonStatus= 0;

btnGoogle.addEventListener('click',()=>{
  if ( butonStatus==0) {
      btnGoogle.innerText='Yahoo';
      butonStatus=1;
  }else {
      btnGoogle.innerText='Google';
      butonStatus=0;
  }
})


btnShowMessaj.addEventListener('click',()=>{
  import("./modules/mesaj-module.js").then(module=>{
    module.mesajGoster('Ümit Kaya');
  })
})

console.log('sddsfsd');

window.onload = function(){
  alert('Ben Yüklendim');
}
