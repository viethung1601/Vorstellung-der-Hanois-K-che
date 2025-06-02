
window.onscroll = function(){scrollBegin();};
function scrollBegin(){
  if(document.documentElement.scrollTop > 20){
    document.getElementById('scroll-button').style.display = "block";
  } else {
    document.getElementById(
    'scroll-button').style.display = "none";
  }
}

function scrollButton(){
  let scrollElement = document.documentElement.scrollTop;
  if(scrollElement > 0){
    document.documentElement.scrollTop = scrollElement - 200;
  }
}

let menu = document.createElement("div");
let menuAlready = 0;

document.querySelector('.js-season-menu').addEventListener('click',() => {
  if(!menuAlready){
  let html = `<div class="season-menu-bar">
    <a href="http://127.0.0.1:5500/food-frueling.html">Frühling</a>
    <a href="http://127.0.0.1:5500/food-sommer.html">Sommer</a>
    <a href="http://127.0.0.1:5500/food-herbst.html">Herbst</a>
    <a href="http://127.0.0.1:5500/food-winter.html">Winter</a>
  </div>`;
  menu.innerHTML = html;
  document.body.appendChild(menu);
  menuAlready = 1;
  } else{
    menu.innerHTML = ``;
    menuAlready = 0;
  }

});
