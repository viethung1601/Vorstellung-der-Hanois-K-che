  const textArr = [];
for(let i = 0; i < 8; i++){
  textArr[i] = '';
}
let frueling_1 = "<h3>Tet-Tabelle</h3><p>Wenn du während 'Lunal New Year' nach Hanoi kommst, solltest du definitiv die sogenannte Tet-Tabelle erfahren.</p>";
let frueling_2 = "<h3>Bun Thang</h3><p>Nach dem 'Tet' sind viel Essen in der Regel noch übrig im Kühlschrank. Um den Kühlschrank zu 'saubern', haben die Vietnamesen einen Gericht erfunden, nämlich 'Bun Thang'.";
let sommer_1 = "<h3>Pho Ga Tron</h3><p>Ein der unterbewertetesten Gerichte aus meiner Sicht. Mit nur einfachen Zutäten: klein zerkleinertes Huhn, Reisnudeln, Sojasauce, Erdnuss, Koriander... macht mir der aber einen großen Eindruck.</p>";
let sommer_2 = "<h3>Banh Duc Nom</h3><p>Ich würde sagen, dass Du dich nach dem Essen dieses Essen aber sehr wohlfühlen würdest...</p>";
let herbst_1 = "<h3>Chao Suon</h3><p>perfekt geeignet für den Herbst in Hanoi. Lass mich dich den Gericht vorstellen: Rippenbrei </p>";
let herbst_2 = "<h3>Com</h3><p>Com - grüner Reis, ikonisch des Herbsts von Hanoi...</p>";
let winter_2 = "<h3>Banh Troi Tau</h3><p>Eine der besten Auswähle für einen kalten Nachmittag des Winters in Hanoi </p>";
let winter_1 = "<h3>Pho Bo</h3><p>'Beef Noodle Soup', vielleicht sehr populär nicht nur in Vietnam, sondern der ganzen Welt... </p>";

const contentArr = [frueling_1,frueling_2,sommer_1,sommer_2,herbst_1,herbst_2,winter_1,winter_2];

function seasonContent(season,index){
  let i = index-1;
  if(textArr[i] === ''){
    textArr[i] = contentArr[i];
    document.querySelector(`.js-${season}-text${index}`).innerHTML = textArr[i];
    return;
  } else {
    textArr[i] = '';
    document.querySelector(`.js-${season}-text${index}`).innerHTML = textArr[i];
    return;
  }
}
document.querySelector('.js-frueling-picture1').addEventListener('click',()=> {
  seasonContent('frueling',1);
});
document.querySelector('.js-frueling-picture2').addEventListener('click',()=> {
  seasonContent('frueling',2);
});
document.querySelector('.js-sommer-picture1').addEventListener('click',()=> {
  seasonContent('sommer',3);
});
document.querySelector('.js-sommer-picture2').addEventListener('click',()=> {
  seasonContent('sommer',4);
});
document.querySelector('.js-herbst-picture1').addEventListener('click',()=> {
  seasonContent('herbst',5);
});
document.querySelector('.js-herbst-picture2').addEventListener('click',()=> {
  seasonContent('herbst',6);
});
document.querySelector('.js-winter-picture1').addEventListener('click',()=> {
  seasonContent('winter',7);
});
document.querySelector('.js-winter-picture2').addEventListener('click',()=> {
  seasonContent('winter',8);
});

/*
}
function addElementToHTML(season){
  let inputButton = document.querySelector('.js-search-icon-button');
  let searchLink = document.createElement('a');
  searchLink.className = 'js-search-icon-button search-icon-button';
  searchLink.href = `http://127.0.0.1:5500/food-${season}.html`;
  
  let imgElement = document.createElement('img');
  imgElement.src = 'search-icon-2048x2048-cmujl7en.png';
  imgElement.className = 'search-icon';
  
  searchLink.appendChild(imgElement);
  inputButton.replaceWith(searchLink);
}
   

function searchBoxInput(){
  let inputText = document.querySelector('.js-search-input').value;
  let inputToLower = inputText.toLowerCase();
  switch(inputToLower){
    case 'fruehling':
    case 'frühling':
      addElementToHTML(inputToLower);
      break;
    case 'sommer':
      addElementToHTML(inputToLower);
      break;
    case 'herbst':
      addElementToHTML(inputToLower);
      break;
    case 'winter':
      addElementToHTML(inputToLower);
      break;
    default:
      break;
  }
}
*/
/*
document.querySelector('.js-search-icon-button').addEventListener('click', searchBoxInput);

function searchBoxInput() {
  let inputText = document.querySelector('.js-search-input').value;
  let inputToLower = inputText.toLowerCase();

  switch (inputToLower) {
    case 'fruehling':
    case 'frühling':
      window.location.href = 'http://127.0.0.1:5500/food-frueling.html';
      break;
    case 'sommer':
      window.location.href = 'http://127.0.0.1:5500/food-sommer.html';
      break;
    case 'herbst':
      window.location.href = 'http://127.0.0.1:5500/food-herbst.html';
      break;
    case 'winter':
      window.location.href = 'http://127.0.0.1:5500/food-winter.html';
      break;
    default:
      break;
  }
}

*/

function addElementToHTML(season) { 
  let aElement = document.createElement('a'); 
  aElement.href = `http://127.0.0.1:5500/food-${season}.html`;
  aElement.target="_blank"; 
  document.body.appendChild(aElement);
  aElement.click(); 
  } 
const searchBoxInput = () => {
    let inputText = document.querySelector('.js-search-input').value;
    let inputToLower = inputText.toLowerCase(); 
    switch (inputToLower) {
      case 'fruehling': 
      case 'frühling': addElementToHTML('frueling'); 
        break;
      case 'sommer': addElementToHTML('sommer');
        break; 
      case 'herbst': addElementToHTML('herbst');
        break;
      case 'winter': addElementToHTML('winter');
        break; 
      default:
        break;
    }
    document.querySelector('.js-search-input').value = '';
  }
  
document.querySelector('.js-search-icon-button').addEventListener('click',searchBoxInput);

document.querySelector('.js-search-input').addEventListener('keydown',(event) => {
  if(event.key === 'Enter'){searchBoxInput();}
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

document.querySelector('.js-go-top').addEventListener('click',() => {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    document.body.scrollTop = scrollTop - 200;
    document.documentElement.scrollTop = scrollTop -200; 
  }
});

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





