//Но в качестве результата функции лучше возвращать какие-то более короткие и 
//точные заранее определенные значения. А потом уже при выводе сделать их понятными человеку
//Добавь выбор языка и перевод в зависимости от выбранного языка


function checkLoginPass(_login, _pass) {
    correctValues = {
        'roman': '2711',
        'admin': 'root',
        'user': '1234'
    };

    if (!(_login in correctValues)) {
        return 'NO_USER';
    } else if (correctValues[_login] != _pass) {
        return 'ERROR_PASS';
    } else if (_login in correctValues && correctValues[_login] == _pass) {
        return 'SUCCESS';
    } else {
        return 'ERROR_DATA';
    };
}


let nextStep = false;
let language = 0;
// цикл по проверке выбора языка
while (true) {
    language = parseInt(prompt('Choose language / Выберите язык: (1 - ru/2 - en): ', 1));
    if (language == 1 || language == 2) {
        nextStep = true;
        break;
    } else {
        alert(`Некорректный ввод/ Incorrect input!`);
    };
}

// основной цикл с логином и паролем
while (nextStep) {
    let objectInputOutput = {
        'login': '',
        'password': '',
        'result': ''
    }
    if (language == 1) {
        objectInputOutput.login = prompt('Введите имя пользователя: ', 'user');
        objectInputOutput.password = prompt('Введите пароль: ');
        objectInputOutput.result = checkLoginPass(objectInputOutput.login, objectInputOutput.password);
        switch (objectInputOutput.result) {
            case 'NO_USER':
                alert(`Результат работы кода: Такого пользователя не существует\nПовторите ввод!`);
                break;
            case 'ERROR_PASS':
                alert(`Результат работы кода: Неправильный пароль\nПовторите ввод!`);
                break;
            case 'ERROR_DATA':
                alert(`Результат работы кода: Ошибка в обработке данных\nПовторите ввод!`);
                break;
            case 'SUCCESS':
                alert(`Результат работы кода: Вы вошли\nДобро пожаловать!`);
                nextStep = false;
                break;
            default:
                alert(`Что-то пошло не так, повторите позднее!`);
        };
    } else {
        objectInputOutput.login = prompt('Enter login: ', 'user');
        objectInputOutput.password = prompt('Enter password: ');
        objectInputOutput.result = checkLoginPass(objectInputOutput.login, objectInputOutput.password);
        switch (objectInputOutput.result) {
            case 'NO_USER':
                alert(`The result of the code: There is no such user\nRepeat the input!`);
                break;
            case 'ERROR_PASS':
                alert(`The result of the code: Incorrect password\nRepeat the input!`);
                break;
            case 'ERROR_DATA':
                alert(`The result of the code: Error in data processing\nRepeat the input!`);
                break;
            case 'SUCCESS':
                alert(`The result of the code: You are logged in\nWelcome!`);
                nextStep = false;
                break;
            default:
                alert(`Something went wrong, repeat later!`);
        };
    }
}
