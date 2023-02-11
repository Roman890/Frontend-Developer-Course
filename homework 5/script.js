// declare variables
const name = 'Roman';
let age = 2023 - 1997;
let workPeriod = 11 % 3 + 0.7;
let familyCount = 'four';
let sportGames = ["tennis", "basketball", "football", "hockey"];
let weekDays = ["Sunday", "Monday", "Wednesday"];
let degrees = 27;
let isTrue = 4 > 1;
let countries = ["Spain", "Turkey", "Germany", "Finland", "Latvia", "Denmark", "Greece", "Tunisia", "Cuba"]

// generate of result
let resultString = `Hi, my name’s ${name}. I’m from Russia. 
I’m ${age} years old. I work at Russian Bank about ${workPeriod} years. I’m a analyst. My favorite sport is ${sportGames[1]}.
There are ${familyCount} people in my family. In my free time, I also like watching YouTube channels about new IT technology.
My favorite day of the week is ${weekDays[2]} because it is the day when everybody feel very productive.
My favorite month is May because spring is already there and the weather is so warm and temperature about ${degrees++} degrees.
My favorite place is Santorini. It is an island in Greece. I like it because of white buildings 
with blue roofs and old mill covering this island. There is a black sand also on the beach. That is ${isTrue} story.
The water in Mediterranean Sea is always about ${ 2 + "5"} degrees.
I like travelling. I have been to ${countries.join(', ')}.`

// output
console.log(resultString)