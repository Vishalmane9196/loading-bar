
const loadingBarItemEl = document.querySelector(".loading-bar__item");

let width = 1;
let increamentor = setInterval(function() {
 
  if (width >=100){
    clearInterval(increamentor);
  }else{
    width++;
    loadingBarItemEl.style.width = width+"%";
  }
}, 25);



 