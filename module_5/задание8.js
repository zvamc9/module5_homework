//Задание 8.

//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

//Используйте шаблонные строки.

let map = new Map();
map.set('key1', 'prop1');
map.set('key2', 'prop2');

const keys = map.keys()

for (let key of keys) {
console.log(`Ключ - ${key}, значение - ${map.get(key)}`)
}
