class Dish {
    name;
    price;
    description;
    atributes = [];
    img; //image link

    constructor(name, price, description, atributes, img) {
        this.setName(name);
        this.setPrice(price);
        this.setDescription(description);
        this.setAtributes(atributes);
        this.setImg(img);
    }

    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getPrice() {
        return this.price;
    }
    setPrice(value) {
        this.price = value;
    }
    getDescription() {
        return this.description;
    }
    setDescription(value) {
        this.description = value;
    }
    getAtributes() {
        return this.atributes;
    }
    setAtributes(value) {
        this.atributes = value;
    }
    getImg() {
        return this.img;
    }
    setImg(value) {
        this.img = value;
    }

}

//function main() { //It will generate the default page
let dishes = new Map();//Array of dishes //N for normal dishes, V for vegan dishes and D for drinks 
//6 Normal dishes by default
dishes.set('N0', new Dish("Albóndigas", 10, "Plato delicioso", [], "Platos/Normal/Albondigas.jpg"));
dishes.set('N1', new Dish("Lasaña", 9, "Plato delicioso", [], "Platos/Normal/Lasaña.jpg"));
dishes.set('N2', new Dish("Lentejas", 8, "Plato delicioso", [], "Platos/Normal/Lentejas.jpeg"));
dishes.set('N3', new Dish("Pollo al pesto", 7, "Plato delicioso", [], "Platos/Normal/Pesto.jpg"));
dishes.set('N4', new Dish("Pizza 0% vegana", 6, "Plato delicioso", [], "Platos/Normal/Pizza.jpg"));
dishes.set('N5', new Dish("Tallarines chinos con setas y pollo", 5, "Plato delicioso", [], "Platos/Normal/Tallarines.png"));
//4 Normal dishes by default
dishes.set('V0', new Dish("Hamburguesa vegana", 10, "Plato delicioso", [], "Platos/Vegano/Burguer Vegana.jpg"));
dishes.set('V1', new Dish("Ensalada vegana", 9, "Plato delicioso", [], "Platos/Vegano/Ensalada Vegana.jpg"));
dishes.set('V2', new Dish("Macarrones con tomatico y queso", 8, "Plato delicioso", [], "Platos/Vegano/Pasta Vegana.jpg"));
dishes.set('V3', new Dish("Tarta de Manzana", 7, "Plato delicioso", [], "Platos/Vegano/Tarta.jpg"));
//X Drinks dishes by default
dishes.set('D0', new Dish("Agua", 2, "Agua fresca de Solan de Cabras edicion Rocas del Manantial en botella de vidrio de 70cl", [], "Platos/Bebida/Agua.jpg"));
dishes.set('D1', new Dish("Cerveza", 2, "Cerveza Mahou 5 estrellas en botellin de 33cl", [], "Platos/Bebida/Cerveza.jpg"));
dishes.set('D2', new Dish("Refrescos", 3, "Coca-Cola Normal o Zero o Light, Fanta de Naranja o de Limon, Aquarius de Naranja o de Limon, Trina de Naranja,", [], "Platos/Bebida/Refrescos.jpg"));
dishes.set('D3', new Dish("Café", 1, "Café 100% natural hecho en cafetera moka italiana", [], "Platos/Bebida/Cafe.jpg"));
dishes.set('D4', new Dish("Vino Pasion de Bobal", 7.95, "Vino ecologico con origen en viñedos de más de 60 años ", [], "Platos/Bebida/VinoBarato.jpg"));
dishes.set('D5', new Dish("Vino Teso La Monja", 1272, "Vino de gran calidad cultivado segun los principios de la biodinámica", [], "Platos/Bebida/VinoCaro.jpg"));
//Add Normal Burguer Vegan Pizza Remove Lentejas
showDishes(dishes, 0, 'N');//It will charge the normal mode at page 0 by default
let Index = 0;
DisplayPictures = ["Cartel.jpg", "Sitio.jpg", "Amigos.jpg", "Mesa.jpg"];
carousel();
//}



function showDishes(dishes, page, type) {
    n = page * 4; //page*4 is to be placed in the elements of each page cause each page has 4 dishes
    for (i = 0; i < 4; i++) {
        if (dishes.get(type + (n + i))) {//undefined is false
            let dish = dishes.get(type + (n + i));//Get the dish

            let img = document.getElementById("Image" + i);//Refresh Image
            img.innerHTML = '<img src ="' + dish.getImg() + '" class="dish-image img-responsive"></img>';

            let name = document.getElementById("Name" + i);//Refresh Name
            name.innerHTML = '<p>' + dish.getName() + '</p>';

            let price = document.getElementById("Price" + i);//Refresh Price
            price.innerHTML = '<p>' + dish.getPrice() + '$</p>';

            let moreInfo = document.getElementById("Info" + i);//Refresh Button
            moreInfo.innerHTML = `<button id="Button${i}" onclick="showSpecificDish(${dish})">Mas info</button>` //Create the button
        }
        else {
            let img = document.getElementById("Image" + i);//Refresh Image
            img.innerHTML = '<img src ="Iconos/Plato.png" class="dish-image img-responsive"></img>'; //Prints a default image when there are no dishes

            let name = document.getElementById("Name" + i);//Refresh Name
            name.innerHTML = '<p>No hay plato</p>'; //Prints a default name

            let price = document.getElementById("Price" + i);//Print a default price
            price.innerHTML = '<p>???$</p>';

            let moreInfo = document.getElementById("Info" + i);//Refresh Button
            moreInfo.innerHTML = `<button id="Button ${i}" onclick="newDish()')">Mas info</button>` //newDish() //Print a button to create a new dish
        }
    }
}

function showSpecificDish(dish) {
    console.log(dish);
}

function newDish() {
    confirm("No esta inplementada");
}

function changeVeganMode() { 
    let b = document.getElementById('Button1');//Update Button
    b.innerHTML = ` <button id="NormalMode" class="MenuButton" onclick="changeNormalMode()">
                        <img class="menu-header-button img-responsive" src="Iconos/Normal.png">
                    </button>`
    b = document.getElementById('Button2');//Update Button
    b.innerHTML = ` <button id="DrinkMode" class="MenuButton" onclick="changeDrinkMode()">
                    <img class="menu-header-button img-responsive" src="Iconos/Bebida.png">
                </button>`
    showDishes(dishes, 0, 'V');//It will start at page 0
}

function changeNormalMode() {  
    let b = document.getElementById('Button1');//Update Button
    b.innerHTML = ` <button id="VeganMode" class="MenuButton" onclick="changeVeganMode()">
                        <img class="menu-header-button img-responsive" src="Iconos/vegano.png">
                    </button>`
    b = document.getElementById('Button2');//Update Button
    b.innerHTML = ` <button id="DrinkMode" class="MenuButton" onclick="changeDrinkMode()">
                        <img class="menu-header-button img-responsive" src="Iconos/Bebida.png">
                    </button>`
    showDishes(dishes, 0, 'N');//It will start at page 0
}

function changeDrinkMode() { 
    let b = document.getElementById('Button1');//Update Button
    b.innerHTML = ` <button id="NormalMode" class="MenuButton" onclick="changeNormalMode()">
                        <img class="menu-header-button img-responsive" src="Iconos/Normal.png">
                    </button>`
    b = document.getElementById('Button2');//Update Button
    b.innerHTML = ` <button id="VeganMode" class="MenuButton" onclick="changeVeganMode()">
                        <img class="menu-header-button img-responsive" src="Iconos/vegano.png">
                    </button>`
    showDishes(dishes, 0, 'D');//It will start at page 0
}

function carousel() {
    let content = document.getElementById("Display");
    content.innerHTML = `<img class="Photo" src="Imagenes/${DisplayPictures[Index]}"></img>`;
    if (Index >= DisplayPictures.length - 1) {
        Index = 0;
    }
    else {
        Index++;
    }
    setTimeout(carousel, 5000); // Change image every 2 seconds
}