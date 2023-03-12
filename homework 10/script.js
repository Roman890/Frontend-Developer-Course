//Напишите функцию принимающую два числа и возвращающую меньшее из них.
function minValue(a, b) {
    result = (a < b) ? a : b;
    return result;
}

while (true) {
    let checkValues1 = parseInt(prompt('Введите первое число: '));
    let checkValues2 = parseInt(prompt('Введите второе число: '));
    if (checkValues1 === checkValues2) {
        alert('Вы ввели одинаковые значения, повторите ввод!');
    } else {
        alert(`Меньшее из двух значений:  ${minValue(checkValues1, checkValues2)}`);
        break;
    };
}


//Напишите функцию, которая будет считать профит от продажи блюда из прошлого задания.
//В эту функцию должны передаваться все данные для расчета профита,
//результат расчетов присвойте в объект блюда.

// создали функция для посчета профита от продажи блюда
function countProfit(priceSale, priceCooking) {
    return priceSale - priceCooking;
}

// основной код скопировали из предыдущего урока
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


let resultText = ''
//Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда. 
for (let i = 0; i < meals.length; i++) {
    // тут мы применим функцию расчета профита
    meals[i].profit = countProfit(meals[i].priceSale, meals[i].priceCooking);
    resultText += `Блюдо: ${meals[i].name} ; Прибыль от продажи: ${meals[i].profit}\n`;
};

alert(resultText);

