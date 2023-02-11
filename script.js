
//Создайте несколько объектов для вашей любимой еды, опишите их в этих объектах (ингредиенты, цена или что-то другое).
let mushroomPizza = {
    name: "Грибная",
    ingredients: {
        cheese: 150,
        sauce: 50,
        tomato: 150,
        bacon: 200,
        mushrooms: 150
    },
    size: "medium",
    type: "circle"
};

let margaretPizza = {
    name: "Маргарита",
    ingredients: {
        cheese: 100,
        sauce: 50,
        tomato: 100,
        basil: 50
    },
    size: "small",
    type: "circle"
};

let seafoodPizza = {
    name: "Морская",
    ingredients: {
        cheese: 100,
        sauce: 50,
        shrimp: 300,
        olives: 50
    },
    size: "big",
    type: "square"
};

let hawaiianPizza = {
    name: "Гавайская",
    ingredients: {
        cheese: 100,
        sauce: 50,
        chicken: 250,
        pineapple: 100
    },
    size: "big",
    type: "circle"
};

//Создайте массив из этих объектов.
let menu = [margaretPizza, mushroomPizza, seafoodPizza, hawaiianPizza];
alert(`Созданный массив из объектов для меню: ${JSON.stringify(menu)}`);

//Удалите одно блюдо из массива еды.
menu.splice(1, 1);
alert(`Удалили одно блюдо из меню: ${JSON.stringify(menu)}`);

//Добавьте этот блюдо обратно на первое место, но уберите один из ингредиентов этого блюда.
delete mushroomPizza.ingredients.cheese;
menu.unshift(mushroomPizza);
alert(`Добавили обратно блюдо, которое удалили но без одного ингредиента: ${JSON.stringify(menu)}`);

//Представьте что это меню вашего будущего ресторана, укажите сколько вы потратите на приготовление и за сколько будете их продавать.
menu.forEach(function (element) {
    switch (element.name) {
        case "Грибная":
            element.price = 15;
            element.cookTime = "2h";
            break;
        case "Маргарита":
            element.price = 10;
            element.cookTime = "1h";
            break;
        case "Морская":
            element.price = 18;
            element.cookTime = "1.5h";
            break;
        case "Гавайская":
            element.price = 15;
            element.cookTime = "2h";
            break;
        default:
            alert("Error");
    }
});
alert(`Добавили каджому блюду в меню по новым параметрам(цена и время приготовления): ${JSON.stringify(menu)}`);

//⭐Посчитайте сколько вы заработаете на каждом проданном блюде.
let order = {
    quantityMargaretPizza: 2,
    quantityMushroomPizza: 5,
    quantitySeafoodPizza: 1,
    quantityHawaiianPizza: 2,
};

let sum = order.quantityHawaiianPizza * hawaiianPizza.price + order.quantityMargaretPizza * margaretPizza.price + order.quantityMushroomPizza * mushroomPizza.price + order.quantitySeafoodPizza * seafoodPizza.price


alert(`Сумма заказа: ${sum} $`);


//Удалите из массива все элементы кроме одного.
menu.splice(1);
alert(`Меню после удаления всех элементов корме одного: ${JSON.stringify(menu)}`);



