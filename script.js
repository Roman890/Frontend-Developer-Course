//Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, 
//которая использует `reduce` .
//Используйте `map` , чтобы получить массив с объектами в которых содержится только 
//название и стоимость каждого блюда.
//Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.
//Определите, полностью ли у вас вегетарианское меню с помощью `every`.
//Создайте массив с вегетарианскими блюдами с помощью filter.

// старый код

let pancakesWithJam = {
    name: "Блины с повидлом",
    ingredients: [
        { nameIngredient: "milk", weight: 500 },
        { nameIngredient: "water", weight: 100 },
        { nameIngredient: "eggs", weight: 100 },
        { nameIngredient: "sugar", weight: 50 },
        { nameIngredient: "salt", weight: 20 },
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
        { nameIngredient: "salt", weight: 20 },
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
        { nameIngredient: "salt", weight: 20 },
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
        { nameIngredient: "salt", weight: 20 },
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
        { nameIngredient: "salt", weight: 20 },
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
        { nameIngredient: "salt", weight: 20 },
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
        { nameIngredient: "salt", weight: 20 },
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

//Отдельно создайте объекты хранящие стоимость этих ингредиентов ( указана за 1000 граммов)
let ingredientsPrices1 = {
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

let ingredientsPrices2 = {
    milk: 100,
    water: 80,
    eggs: 90,
    sugar: 80,
    salt: 30,
    flour: 140,
    oil: 120,
    jam: 80,
    cheese: 380,
    cottageCheese: 400,
    meat: 900,
    salmon: 1000,
    bananas: 100,
    chocolate: 80
};

// новый код

// подсчет себестоимости 
meals.forEach(function (item, index, arr) {
    item.priceCooking = item.ingredients.reduce(function (sum, item, index, arr) {
        return sum += ingredientsPrices1[item.nameIngredient] * item.weight / 1000;
    }, 0);
});

// вывод
meals.forEach(function (item, index, arr) {
    console.log(`Блюдо: ${item.name} ; Себестоимость: ${item.priceCooking}`);
});


// map для создания массива с объектами
let updatedMeals = meals.map(function (item, index, arr) {
    let elem = {
        name: item.name,
        priceSale: item.priceSale
    }
    return elem;
});

console.log(updatedMeals)

// Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.
let isContainsVegansMeals = meals.some(function (item, index, arr) {
    let checkProduct = item.ingredients.some(function (item, index, arr) {
        return item.nameIngredient == "bananas";
    })
    return checkProduct;
});

console.log(`Есть ли вегетарианское блюдо ${isContainsVegansMeals}`)

//Определите, полностью ли у вас вегетарианское меню с помощью `every`.
let isContainsAllVegansMeals = meals.every(function (item, index, arr) {
    let checkProduct = item.ingredients.some(function (item, index, arr) {
        return item.nameIngredient == "bananas";
    })
    return checkProduct;
});

console.log(`Полностью ли вегетарианское меню ${isContainsAllVegansMeals}`)

//Создайте массив с вегетарианскими блюдами с помощью filter.
let vegansMeals = meals.filter(function (item, index, arr) {
    let checkProduct = item.ingredients.some(function (item, index, arr) {
        return item.nameIngredient == "bananas";
    });
    return checkProduct;
});

console.log(`Массив с вегетарианскими блюдами`)
vegansMeals.forEach(function (item, index, arr) {
    console.log(item);
});