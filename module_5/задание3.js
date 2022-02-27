a = prompt("Напишите слово или число");
  function reverse(a) {
  return a.split("").reverse().join("");
}
console.log(reverse(a));