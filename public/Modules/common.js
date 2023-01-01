//Imports from other modules
import { changeMenuButtons, showDishes, updateArrows } from "./mainPage.js";

//Functions of this module

export function loadMainPage() {
  //It load the page 0 from the normal mode and will show again the display and the reviews hidden 
  //when change to other part of the page

  let e = document.getElementById("Menu");
  e.style.display = "block";
  e = document.getElementById("Display");
  e.style.display = "flex";
  e = document.getElementById("Reviews");
  e.style.display = "flex";

  e = document.getElementById("Form");
  e.style.display = "none";
  e = document.getElementById("InfoDish");
  e.style.display = "none";

  showDishes(0, "N");
  updateArrows("N", 0);
  changeMenuButtons("Normal", "Vegan", "Drink");
}