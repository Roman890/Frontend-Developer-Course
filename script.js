//Выведите все четные числа до 10 включительно. ⭐не используйте оператор **continue**.

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        alert(i); // выведет 2, 4, 6, 8, 10
    }
}


//Создайте бесконечный цикл и прервите его на 5ой итерации.
let i = 0
while (1) {
    alert(++i);
    if (i === 5) {
        break;
    };
}

//Создайте массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации. 
//Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда. 
//⭐Не задавайте цену приготовления сразу. Задайте массив ингредиентов. 
//Отдельно создайте объект хранящий стоимость этих ингредиентов. 
//Посчитайте стоимость приготовления динамически (с помощью цикла)