import { checkLoginPass } from './checkLoginPassword.js'
import { translator } from '../scripts/translator.js'


const translations = {
    'en_ru': {
        'Enter login:': 'Введите имя пользователя:',
        'Enter password:': 'Введите пароль:',
        'The result of the code: There is no such user\nRepeat the input!': 'Результат работы кода: Такого пользователя не существует\nПовторите ввод!',
        'The result of the code: Incorrect password\nRepeat the input!': 'Результат работы кода: Неправильный пароль\nПовторите ввод!',
        'The result of the code: Error in data processing\nRepeat the input!': 'Результат работы кода: Ошибка в обработке данных\nПовторите ввод!',
        'The result of the code: You are logged in\nWelcome!': 'Результат работы кода: Вы вошли\nДобро пожаловать!',
        'Something went wrong, repeat later!': 'Что-то пошло не так, повторите позднее!'
    },
    'en_fr': {
        'Enter login:': 'Entrez votre nom d\'utilisateur:',
        'Enter password:': 'Entrez le mot de passe:',
        'The result of the code: There is no such user\nRepeat the input!': 'Résultat du code: un tel utilisateur n\'existe pas.\nRépétez la saisie!',
        'The result of the code: Incorrect password\nRepeat the input!': 'Résultat du code: mot de passe Incorrect\nRépétez la saisie!',
        'The result of the code: Error in data processing\nRepeat the input!': 'Résultat du code: Erreur dans le traitement des données\nRépétez la saisie!',
        'The result of the code: You are logged in\nWelcome!': 'Résultat du code: vous êtes connecté\nBienvenue !',
        'Something went wrong, repeat later!': 'Quelque chose a mal tourné, répétez plus tard!'
    }
};

let nextStep = false;
let language = 0;
let chooseLanguage = null;

// цикл по проверке языка
while (true) {
    language = parseInt(prompt('Choose language\n1 - ru\n2 - en\n3 - fr\n'));
    let codeLanguages = {
        1: 'en_ru',
        2: null,
        3: 'en_fr'
    };
    chooseLanguage = translator(translations[codeLanguages[language]]);
    if (language in codeLanguages) {
        nextStep = true;
        break;
    } else {
        alert('Incorrect input!');
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
    let codeMessages = {
        'NO_USER': 'The result of the code: There is no such user\nRepeat the input!',
        'ERROR_PASS': 'The result of the code: Incorrect password\nRepeat the input!',
        'ERROR_DATA': 'The result of the code: Error in data processing\nRepeat the input!',
        'SUCCESS': 'The result of the code: You are logged in\nWelcome!',
    }
    alert(chooseLanguage(codeMessages[objectInputOutput.result]) || chooseLanguage('Something went wrong, repeat later!'));
    if (objectInputOutput.result === 'SUCCESS') {
        nextStep = false;
    }
}
