//Задайте вопрос с помощью prompt(). Запишите ответ в переменную. Проверьте правильность ответа. Покажите alert() в зависимости от правильности ответа.

let signal = false; // переменная для проверки на некорректный ввод ответов
let start = false; // переменная для начала и повтора викторины
do {
    let welcomeAnswer1 = prompt("Привет мой дорогой друг. Вы когда-нибудь были на Кубе?\nОтвет: Да/Нет", "");
    if (welcomeAnswer1 == "Да") {
        alert("Здорово, тогда вы отлично знаете несколько фактов об этой стране");
        signal = true;
        start = true;
    } else if (welcomeAnswer1 == "Нет") {
        let welcomeAnswer2 = prompt("А хотите познакомиться с этой страной невыходя из дома?\nОтвет: Да/Нет", "");
        if (welcomeAnswer2 == "Да") {
            alert("Отлично! Тогда лучшим способом это сделать - провести небольшую викторину!!!");
            signal = true;
            start = true;
        } else if (welcomeAnswer2 == "Нет") {
            alert("Жаль что не смог Вас заинтересовать!");
            signal = true;
        } else {
            alert("Что-то Вы невнимательно прочли вопрос. Повторите ответ.");
        }
    } else {
        alert("Что-то Вы невнимательно прочли вопрос. Повторите ответ.");
    }

} while (signal != true);


(start) ? alert("Давайте проведем небольшой квиз и мы проверим Вашу эрудицию!\nБудет 5 вопросов с 3-мя вариантами ответов\nНужно будет всего лишь ввести цифру ответа!\nУдачи!") : alert("Возвращайтесь снова!"); //Применим короткий синтаксис условий. (Оператор “?”)


while (start) {
    signal = false;
    let score = 0;
    //Составьте небольшой квиз.
    do {
        let question1 = prompt("Какой язык является официальным на Кубе?\nВарианты ответов:\n1 - Португальский\n2 - Испанский\n3 - Английский");
        switch (question1) {
            case "1":
                signal = true;
                break;
            case "2":
                signal = true;
                score++;
                break;
            case "3":
                signal = true;
                break;
            default:
                alert("Что-то Вы невнимательно прочли вопрос. Повторите ответ.");
        }
    } while (signal != true);

    signal = false;
    do {
        let question2 = prompt("Как по-другому, неофициально называют Кубу?\nВарианты ответов:\n1 - Остров Дружбы\n2 - Остров Свободы\n3 - Остров Невезения");
        switch (question2) {
            case "1":
                signal = true;
                break;
            case "2":
                signal = true;
                score++;
                break;
            case "3":
                signal = true;
                break;
            default:
                alert("Что-то Вы невнимательно прочли вопрос. Повторите ответ.");
        }
    } while (signal != true);

    signal = false;
    do {
        let question3 = prompt("Какой город является столицей Кубы?\nВарианты ответов:\n1 - Сантьяго-де-Куба\n2 - Варадеро\n3 - Гавана");
        switch (question3) {
            case "1":
                signal = true;
                break;
            case "2":
                signal = true;
                break;
            case "3":
                signal = true;
                score++;
                break;
            default:
                alert("Что-то Вы невнимательно прочли вопрос. Повторите ответ.");
        }
    } while (signal != true);

    signal = false;
    do {
        let question4 = prompt("Какие продукты является национальной гордостью Кубы?\nВарианты ответов:\n1 - Сигары и ром\n2 - Кокосы и бананы\n3 - Какао и шоколад");
        switch (question4) {
            case "1":
                score++;
                signal = true;
                break;
            case "2":
                signal = true;
                break;
            case "3":
                signal = true;
                break;
            default:
                alert("Что-то Вы невнимательно прочли вопрос. Повторите ответ.");
        }
    } while (signal != true);

    signal = false;
    do {
        let question5 = prompt("Что символизирует белая звезда на флаге Кубы?\nВарианты ответов:\n1 - Равенство\n2 - Кровь, пролитую в борьбе за независимость острова\n3 - Свободу");
        switch (question5) {
            case "1":
                signal = true;
                break;
            case "2":
                signal = true;
                break;
            case "3":
                signal = true;
                score++;
                break;
            default:
                alert("Что-то Вы невнимательно прочли вопрос. Повторите ответ.");
        }
    } while (signal != true);

    alert(`Поздравляю вы прошли квиз с результатом ${score} правильных ответов из 5 возможных!`);
    let finalMessage = (score <= 2) ? 'В этот раз вы показали не слишком хорошоие результаты! Попробуйте в другой раз!' :
        (score <= 4) ? 'Не плохо, но я уверен вы можете лучше!' : 'Невероятно! Вы отличный знаток Кубы!'; // еще раз используем тернарый оператор условий
    alert(finalMessage);

    signal = false;
    do {
        let startAgain = prompt("Хотите повторить попытку? Да/Нет");
        if (startAgain == "Да") {
            alert("Отлично!");
            signal = true;
        } else if (startAgain == "Нет") {
            alert("Спасибо за игру!");
            start = false;
            signal = true;
        } else {
            alert("Не понял?");
        }
    } while (signal != true);
}

