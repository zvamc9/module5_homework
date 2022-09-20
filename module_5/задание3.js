//Задание 3.

//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

a = prompt("Напишите слово или число");
  function reverse(a) {
  return a.split("").reverse().join("");
}
console.log(reverse(a));
