let meals;
fetch('/menu.json')
    .then(response => response.json())
    .then(data => {
        meals = data;
        return fetch('/ingredients.json')
    })
    .then(response => response.json())
    .then(ingredientsPrices => {
        // подсчет себестоимости 
        meals.forEach(function (item, index, arr) {
            item.priceCooking = item.ingredients.reduce(function (sum, item, index, arr) {
                return sum += ingredientsPrices[item.nameIngredient].price * item.weight / 1000;
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
            return item.ingredients.every(function (item, index, arr) {
                return ingredientsPrices[item.nameIngredient].isVegans;
            });
        });

        console.log(`Есть ли вегетарианское блюдо ${isContainsVegansMeals}`)

        //Определите, полностью ли у вас вегетарианское меню с помощью `every`.
        let isContainsAllVegansMeals = meals.every(function (item, index, arr) {
            return item.ingredients.every(function (item, index, arr) {
                return ingredientsPrices[item.nameIngredient].isVegans;
            });
        });

        console.log(`Полностью ли вегетарианское меню ${isContainsAllVegansMeals}`)

        //Создайте массив с вегетарианскими блюдами с помощью filter.
        let vegansMeals = meals.filter(function (item, index, arr) {
            return item.ingredients.every(function (item, index, arr) {
                return ingredientsPrices[item.nameIngredient].isVegans;
            });
        });

        console.log(`Массив только с вегетарианскими блюдами`)
        vegansMeals.forEach(function (item, index, arr) {
            console.log(item);
        });
    })
    .catch(error => console.error(error))



