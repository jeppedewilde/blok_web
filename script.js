// JavaScript Document
console.log("hi");

/****************/
/* DROPDOWN BUTTON */
/****************/

document.querySelector("select").addEventListener("change", function () {
    const selectedCurrency = this.value;
    const prices = document.querySelectorAll("article p");

    prices.forEach(price => {
        const newPrice = price.dataset[selectedCurrency.toLowerCase()];
        price.textContent = `${newPrice} ${selectedCurrency}`;
    });
});

/****************/
/* HAMBURGER MENU */
/****************/

var openButton = document.querySelector("header > button");

openButton.onclick = openMenu;
function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}

var openButton = document.querySelector("header > button");
openButton.onclick = openMenu;

function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

var sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

/**********************************/
/* menu sluiten met escape */
/**********************************/

window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

/************/
/* ZOEKBALK */
/************/

const button = document.querySelector('header button:nth-of-type(2)');
const input = document.querySelector('input[type="text"]');

button.addEventListener('click', () => {
  button.classList.toggle('active'); 
  input.focus(); 
});





