
// фунция проверки логина и пароля
export function checkLoginPass(_login, _pass) {
    let correctValues = {
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