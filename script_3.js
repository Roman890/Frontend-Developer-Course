//Надо создать отдельно обьекты словари с переводом для каждого языка по стандарту i18n.
//Для того чтобы получить перевод, нужно сначала создать функцию замыкание 
//с сохраненным в ней обьектом перевода в зависимости от выбранного языка, 
//в которую ты передаешь фразу. Эта функция ищет перевод в обьекте перевода 
//с нужным язком и возвращает. Если не находит фразу или нет перевода для данного языка,
// то возвращает исходную фразу на англ языке. Для вывода любой информации пользователю, 
//должна использоваться эта функция

// объект словарь с переводом с английского на русский
let englishToRussian = {
    'Enter login:': 'Введите имя пользователя:',
    'Enter password:': 'Введите пароль:',
    'The result of the code: There is no such user\nRepeat the input!': 'Результат работы кода: Такого пользователя не существует\nПовторите ввод!',
    'The result of the code: Incorrect password\nRepeat the input!': 'Результат работы кода: Неправильный пароль\nПовторите ввод!',
    'The result of the code: Error in data processing\nRepeat the input!': 'Результат работы кода: Ошибка в обработке данных\nПовторите ввод!',
    'The result of the code: You are logged in\nWelcome!': 'Результат работы кода: Вы вошли\nДобро пожаловать!',
    'Something went wrong, repeat later!': 'Что-то пошло не так, повторите позднее!'
};

// объект словарь с переводом с английского на французский
let englishToFrench = {
    'Enter login:': 'Entrez votre nom d\'utilisateur:',
    'Enter password:': 'Entrez le mot de passe:',
    'The result of the code: There is no such user\nRepeat the input!': 'Résultat du code: un tel utilisateur n\'existe pas.\nRépétez la saisie!',
    'The result of the code: Incorrect password\nRepeat the input!': 'Résultat du code: mot de passe Incorrect\nRépétez la saisie!',
    'The result of the code: Error in data processing\nRepeat the input!': 'Résultat du code: Erreur dans le traitement des données\nRépétez la saisie!',
    'The result of the code: You are logged in\nWelcome!': 'Résultat du code: vous êtes connecté\nBienvenue !',
    'Something went wrong, repeat later!': 'Quelque chose a mal tourné, répétez plus tard!'
};


// фунция проверки логина и пароля
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
};

//Функция замыкание для перевода
function translator(languageDictionary = {}) {
    return function (sentence) {
        let result = (sentence in languageDictionary) ? languageDictionary[sentence] : sentence; // если есть перевод фразы, то возвращаем его, иначе возвращаем исходное выражение на английском языке
        return result;
    };
};


let nextStep = false;
let language = 0;
let chooseLanguage = null;

// цикл по проверке языка
while (true) {
    language = parseInt(prompt('Choose language\n1 - ru\n2 - en\n3 - fr\n'));
    switch (language) {
        case 1:
            nextStep = true;
            chooseLanguage = translator(englishToRussian); // вызываем родительскую функцию, где передаем объект со словарем выранного языка
            break;
        case 2:
            nextStep = true;
            chooseLanguage = translator(); // вызываем родительскую функцию, где не передаем объект со словарем выранного языка, по умолчанию пустой объект
            break;
        case 3:
            nextStep = true;
            chooseLanguage = translator(englishToFrench); // вызываем родительскую функцию, где передаем объект со словарем выранного языка
            break;
        default:
            alert('Incorrect input!');
    };
    if (nextStep) {
        break;
    }
};

// основной цикл с логином и паролем
while (nextStep) {
    let objectInputOutput = {
        'login': '',
        'password': '',
        'result': ''
    }
    objectInputOutput.login = prompt(chooseLanguage('Enter login:'), 'user');
    objectInputOutput.password = prompt(chooseLanguage('Enter password:'));
    objectInputOutput.result = checkLoginPass(objectInputOutput.login, objectInputOutput.password);
    switch (objectInputOutput.result) {
        case 'NO_USER':
            alert(chooseLanguage('The result of the code: There is no such user\nRepeat the input!'));
            break;
        case 'ERROR_PASS':
            alert(chooseLanguage('The result of the code: Incorrect password\nRepeat the input!'));
            break;
        case 'ERROR_DATA':
            alert(chooseLanguage('The result of the code: Error in data processing\nRepeat the input!'));
            break;
        case 'SUCCESS':
            alert(chooseLanguage('The result of the code: You are logged in\nWelcome!'));
            nextStep = false;
            break;
        default:
            alert(chooseLanguage('Something went wrong, repeat later!'));
    };
}
