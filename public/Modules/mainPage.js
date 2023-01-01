//Imports from other modules

//Functions of this module
export function changePage(mode, page, nextOrPrevious) {
  //This function gives the funcionality to the arrows
  //nextOrPrevious will be 1 if we want to change to the next page or -1 if we want to change to the previous page
  //It will load the next or previous page of the menu depending on the mode and on the page
  //Only change page if it is a valid change(if you are in the first page you can't go to the previous page and
  //if you are in the last (there must be any new dish button) you can go to the next)

  if (
    (nextOrPrevious === 1 && page + 1 <= Dish.getAmount(mode) / 4) ||
    (nextOrPrevious === -1 && page !== 0)
  ) {
    let p = page + nextOrPrevious;
    showDishes(p, mode);
    updateArrows(mode, p);
  }
}

export function changeMenuButtons(actual_mode, mode, mode1) {
  //This function change the buttons to change mode from the menu to show those who aren't the actual mode
  //Actual_mode is the mode we change to
  //mode and mode1 are the other modes

  let b = document.getElementById("ModeLeft"); //Update Menu Button Left
  b.setAttribute("onclick", `window.location.href='/menu/${mode}'`);
  b = document.getElementById("ImageModeLeft"); //Update Menu Image Left
  b.src = `../Iconos/${mode}.png`;

  b = document.getElementById("ModeRight"); //Update Menu Button Right
  b.setAttribute("onclick", `window.location.href='/menu/${mode1}'`);
  b = document.getElementById("ImageModeRight"); //Update Menu Image Right
  b.src = `../Iconos/${mode1}.png`;

  b = document.getElementById("LoadMoreButton"); //Update LoadMoreButton
  b.setAttribute("onclick", `loadMore('${actual_mode}')`);
}

export function changeMode(actual_mode, mode, mode1) {
  //This function change the menu display between each mode by starting at the page 0 of the mode (first page)
  //It will update the buttons, the arrows and the dishes shown
  //Actual_mode is the mode we change to

  changeMenuButtons(actual_mode, mode, mode1);
  //updateArrows(actual_mode[0], 0);
  showDishes(0, actual_mode);
}

export function showDishes(page, mode) {
  let divs = document.getElementsByClassName("dish");
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].classList.contains(mode)) {
      divs[i].style.display = "flex";
    } else {
      divs[i].style.display = "none";
    }
  }
}

export function updateArrows(mode, page) {
  //This function update the arrows to be ready to change to the right page

  let b = document.getElementById("NextArrowButton"); //Update NextArrow
  b.onclick = function () {
    changePage(mode, page, 1);
  };
  b = document.getElementById("BackArrowButton"); //Update BackArrow
  b.onclick = function () {
    changePage(mode, page, -1);
  };
}

export function newDish() {
  let e = document.getElementById("AddImage");
  e.style.display = "block";
  document.getElementById("FormImage").style.display = "none";
  let opt = document.getElementById("actualType").value[0];
  let b=document.getElementById("Option"+opt);
  b.setAttribute("selected","selected");
  e = document.getElementById("IngredientsList");
  e.innerHTML = ``;
}

export function showSpecificDish(key) {
  //It will show the more info dish page and hide the menu, the display and the reviews

  let e = document.getElementById("Menu");
  e.style.display = "none";
  e = document.getElementById("Display");
  e.style.display = "none";
  e = document.getElementById("Reviews");
  e.style.display = "none";
  e = document.getElementById("InfoDish");
  e.style.display = "block";

  updateInfoScreen(key);
}