
//Функция замыкание для перевода
export function translator(languageDictionary = {}) {
    return function (sentence) {
        let result = (sentence in languageDictionary) ? languageDictionary[sentence] : sentence; // если есть перевод фразы, то возвращаем его, иначе возвращаем исходное выражение на английском языке
        return result;
    };
};