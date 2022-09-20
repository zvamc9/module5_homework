//Задание 4.

//Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

function  getRandomRange(min, max) {
 return Math.floor(Math.random() * (max-min));
}
console.log(getRandomRange(0, 100));
