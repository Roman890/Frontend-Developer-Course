
//Создайте несколько объектов для вашей любимой еды, опишите их в этих объектах (ингредиенты, цена или что-то другое).
let mushroomPizza = {
    ingredients: {
        cheese: 150,
        sauce: 50,
        tomato: 150,
        bacon: 200,
        mushrooms: 150
    },
    price: 15
};

let margaretPizza = {
    ingredients: {
        cheese: 100,
        sauce: 50,
        tomato: 100,
        basil: 50
    },
    price: 10
};

let seafoodPizza = {
    ingredients: {
        cheese: 100,
        sauce: 50,
        shrimp: 300,
        olives: 50
    },
    price: 18
};

let hawaiianPizza = {
    ingredients: {
        cheese: 100,
        sauce: 50,
        chicken: 250,
        pineapple: 100
    },
    price: 15
};

//Создайте массив из этих объектов.
let menu = [margaretPizza, mushroomPizza, seafoodPizza, hawaiianPizza];
alert(`Созданный массив из объектов для меню: ${menu}`);

//Удалите одно блюдо из массива еды.
menu.splice(1, 1);
alert(`Удалили одно блюдо из меню: ${menu}`);

//Добавьте этот блюдо обратно на первое место, но уберите один из ингредиентов этого блюда.
delete mushroomPizza.ingredients.cheese;
menu.unshift(mushroomPizza);
alert(`Добавили обратно блюдо, которое удалили но без одного ингредиента: ${menu}`);

//Представьте что это меню вашего будущего ресторана, укажите сколько вы потратите на приготовление и за сколько будете их продавать.



//⭐Посчитайте сколько вы заработаете на каждом проданном блюде.
// не забыть подсчитать отдельно каждую сумму
let order = {
    quantityMargaretPizza: 2,
    quantityMushroomPizza: 5,
    quantitySeafoodPizza: 1,
    quantityHawaiianPizza: 0,
    sum: quantityHawaiianPizza * hawaiianPizza.price + quantityMargaretPizza * margaretPizza.price + quantityMushroomPizza * mushroomPizza.price + quantitySeafoodPizza * seafoodPizza.price
};

alert(`Сумма заказа: ${order.sum}`);


//Удалите из массива все элементы кроме одного.
menu.splice(1);
alert(`Меню после удаления всех элементов корме одного: ${menu}`);


