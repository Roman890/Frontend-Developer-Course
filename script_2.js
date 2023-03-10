
// блюда немного видоизменил ингредиенты, добавил вес

let pancakesWithJam = {
    name: "Блины с повидлом",
    ingredients: [
        { nameIngredient: "milk", weight: 500 },
        { nameIngredient: "water", weight: 100 },
        { nameIngredient: "eggs", weight: 100 },
        { nameIngredient: "sugar", weight: 50 },
        { nameIngredient: "salt", weight: 30 },
        { nameIngredient: "flour", weight: 400 },
        { nameIngredient: "oil", weight: 100 },
        { nameIngredient: "jam", weight: 200 }
    ], // список объектов ингредиентов с весом в граммах
    priceCooking: 0,
    priceSale: 300
};

let pancakesWithCheese = {
    name: "Блины с сыром",
    ingredients: [
        { nameIngredient: "milk", weight: 500 },
        { nameIngredient: "water", weight: 100 },
        { nameIngredient: "eggs", weight: 100 },
        { nameIngredient: "sugar", weight: 50 },
        { nameIngredient: "salt", weight: 30 },
        { nameIngredient: "flour", weight: 400 },
        { nameIngredient: "oil", weight: 100 },
        { nameIngredient: "cheese", weight: 300 }
    ],
    priceCooking: 0,
    priceSale: 400
};

let pancakesWithCottageCheese = {
    name: "Блины с творогом",
    ingredients: [
        { nameIngredient: "milk", weight: 500 },
        { nameIngredient: "water", weight: 100 },
        { nameIngredient: "eggs", weight: 100 },
        { nameIngredient: "sugar", weight: 50 },
        { nameIngredient: "salt", weight: 30 },
        { nameIngredient: "flour", weight: 400 },
        { nameIngredient: "oil", weight: 100 },
        { nameIngredient: "cottageCheese", weight: 300 }
    ],
    priceCooking: 0,
    priceSale: 450
};

let pancakesWithMeat = {
    name: "Блины с мясом",
    ingredients: [
        { nameIngredient: "milk", weight: 500 },
        { nameIngredient: "water", weight: 100 },
        { nameIngredient: "eggs", weight: 100 },
        { nameIngredient: "sugar", weight: 50 },
        { nameIngredient: "salt", weight: 30 },
        { nameIngredient: "flour", weight: 400 },
        { nameIngredient: "oil", weight: 100 },
        { nameIngredient: "meat", weight: 300 }
    ],
    priceCooking: 0,
    priceSale: 600
};

let pancakesWithSalmon = {
    name: "Блины с лососем",
    ingredients: [
        { nameIngredient: "milk", weight: 500 },
        { nameIngredient: "water", weight: 100 },
        { nameIngredient: "eggs", weight: 100 },
        { nameIngredient: "sugar", weight: 50 },
        { nameIngredient: "salt", weight: 30 },
        { nameIngredient: "flour", weight: 400 },
        { nameIngredient: "oil", weight: 100 },
        { nameIngredient: "salmon", weight: 400 }
    ],
    priceCooking: 0,
    priceSale: 800
};

let pancakesWithBananas = {
    name: "Блины с бананом",
    ingredients: [
        { nameIngredient: "milk", weight: 500 },
        { nameIngredient: "water", weight: 100 },
        { nameIngredient: "eggs", weight: 100 },
        { nameIngredient: "sugar", weight: 50 },
        { nameIngredient: "salt", weight: 30 },
        { nameIngredient: "flour", weight: 400 },
        { nameIngredient: "oil", weight: 100 },
        { nameIngredient: "bananas", weight: 200 }
    ],
    priceCooking: 0,
    priceSale: 350
};

let pancakesWithChocolate = {
    name: "Блины с шоколадом",
    ingredients: [
        { nameIngredient: "milk", weight: 500 },
        { nameIngredient: "water", weight: 100 },
        { nameIngredient: "eggs", weight: 100 },
        { nameIngredient: "sugar", weight: 50 },
        { nameIngredient: "salt", weight: 30 },
        { nameIngredient: "flour", weight: 400 },
        { nameIngredient: "oil", weight: 100 },
        { nameIngredient: "chocolate", weight: 200 }
    ],
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



//сделать функцию, в которую передаешь ингредиенты блюда, а она должна вернуть себестоимость этого блюда
//Для усложнения задачи попробуй создать фукцию-замыкание, которую ты можешь создать, вызвав функцию-фабрику 
//и передав в нее обьект с ценой всех ингредиентов.
// Так же добавь в ингредиенты вес и учитывай его при расчете себестоимости

//Функция расчета себестоимости блюд c учетом веса и стоимости (надеюсь правильно понял про замыкание)
function countPriceCooking(ingredients) {
    //объект хранящий стоимость ингредиентов указана за 1000 граммов
    let ingredientsPrices = {
        milk: 80,
        water: 50,
        eggs: 70,
        sugar: 70,
        salt: 40,
        flour: 110,
        oil: 100,
        jam: 60,
        cheese: 300,
        cottageCheese: 300,
        meat: 700,
        salmon: 850,
        bananas: 80,
        chocolate: 60
    };
    return function () {
        let sum = 0;
        for (let j = 0; j < ingredients.length; j++) {
            sum += ingredientsPrices[ingredients[j]['nameIngredient']] * ingredients[j]['weight'] / 1000;
        };
        return sum;
    }

}

for (let i = 0; i < meals.length; i++) {
    meals[i].priceCooking = countPriceCooking(meals[i].ingredients)();
};

console.log(`Массив из объектов блюд c себестоимостью: ${JSON.stringify(meals)}`);



// то что осталось от предыдущего задания по функциям с рассчетом профита
// создали функция для посчета профита от продажи блюда
function countProfit(priceSale, priceCooking) {
    return priceSale - priceCooking;
}


let resultText = ''
//Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда. 
for (let i = 0; i < meals.length; i++) {
    // тут мы применим функцию расчета профита
    meals[i].profit = countProfit(meals[i].priceSale, meals[i].priceCooking);
    resultText += `Блюдо: ${meals[i].name} ; Себестоимость: ${meals[i].priceCooking} ; Прибыль от продажи: ${meals[i].profit}\n`;
};

console.log(resultText);

