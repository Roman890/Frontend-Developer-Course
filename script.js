//Выведите все четные числа до 10 включительно. ⭐не используйте оператор **continue**.

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i); // выведет 2, 4, 6, 8, 10
    }
}


//Создайте бесконечный цикл и прервите его на 5ой итерации.

let i = 0;
while (1) {
    console.log(++i);
    if (i === 5) {
        break;
    };
}

//Создайте массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации. 
//⭐Не задавайте цену приготовления сразу. Задайте массив ингредиентов. 

let pancakesWithJam = {
    name: "Блины с повидлом",
    ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "jam"],
    priceCooking: 0,
    priceSale: 300
};

let pancakesWithCheese = {
    name: "Блины с сыром",
    ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "cheese"],
    priceCooking: 0,
    priceSale: 400
};

let pancakesWithCottageCheese = {
    name: "Блины с творогом",
    ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "cottageCheese"],
    priceCooking: 0,
    priceSale: 450
};

let pancakesWithMeat = {
    name: "Блины с мясом",
    ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "meat"],
    priceCooking: 0,
    priceSale: 600
};

let pancakesWithSalmon = {
    name: "Блины с лососем",
    ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "salmon"],
    priceCooking: 0,
    priceSale: 800
};

let pancakesWithBananas = {
    name: "Блины с бананом",
    ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "bananas"],
    priceCooking: 0,
    priceSale: 350
};

let pancakesWithChocolate = {
    name: "Блины с шоколадом",
    ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "chocolate"],
    priceCooking: 0,
    priceSale: 400
};

// массив из блюд
let meals = [
    pancakesWithJam,
    pancakesWithCheese,
    pancakesWithCottageCheese,
    pancakesWithMeat,
    pancakesWithSalmon,
    pancakesWithBananas,
    pancakesWithChocolate
];

//Отдельно создайте объект хранящий стоимость этих ингредиентов. 
let ingredientsPrices = {
    milk: 50,
    water: 30,
    eggs: 40,
    sugar: 10,
    salt: 5,
    flour: 30,
    oil: 20,
    jam: 60,
    cheese: 70,
    cottageCheese: 100,
    meat: 100,
    salmon: 150,
    bananas: 50,
    chocolate: 60
};

//Посчитайте стоимость приготовления динамически (с помощью цикла)
for (let i = 0; i < meals.length; i++) {
    let sum = 0;
    for (let j = 0; j < meals[i].ingredients.length; j++) {
        sum += ingredientsPrices[meals[i].ingredients[j]];
    }
    meals[i].priceCooking = sum;
};

console.log(`Созданный массив из объектов блюд cо стоимостью: ${JSON.stringify(meals)}`);


//Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда. 
for (let i = 0; i < meals.length; i++) {
    meals[i].profit = meals[i].priceSale - meals[i].priceCooking;
};

console.log(`Созданный массив из объектов блюд с профитом: ${JSON.stringify(meals)}`);
