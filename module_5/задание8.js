let animals = new Map([
    ["dog", "good"],
    ["cat", "bad"],
    ["parrot", "kind"]
]);
animals.forEach((key) => {
    console.log(`${key} - x`);
});
animals.forEach((value) => {
    console.log(` ${value} - y`);
});