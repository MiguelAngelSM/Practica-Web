//Imports from other modules
import { changeMenuButtons, showDishes, updateArrows } from "./mainPage.js";
import { dishes } from "./dish.js";

//Functions of this module
export function backToMenu() {
  //Hide the Form and return to the normal mode page 0 (default page)

  loadMainPage();
  let e = document.getElementById("Form");
  e.style.display = "none";
}

export function showIngredientsList(key, printIngredient) {
  //Delete the previous list and make it again with all the elements from the list got from the dish got from the key

  let dish = dishes.get(key);
  let ingredients = dish.getAtributes();
  for (let i=0;i<ingredients.length;i++){
    printIngredient(ingredients[i], key, i)
  };
}

export function loadMainPage() {
  let e = document.getElementById("Menu");
  e.style.display = "block";
  e = document.getElementById("Display");
  e.style.display = "block";
  e = document.getElementById("Reviews");
  e.style.display = "block";
  showDishes(0, "N");
  updateArrows("N", 0);
  changeMenuButtons("Normal", "Vegan", "Drink");
}
