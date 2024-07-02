"use strict";
// Function declaration
function sapa(nama) {
    console.log("Hallo, aku" + nama);
}
sapa("Yasir!");
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("hasil penjumlahan:  + hasil");
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("Hasil perkalian: " + result);
// Contoh penggunaan
const cube1 = function (num) {
    return num ** 3;
};
console.log(cube1(3));
// Object
let person2;
person2 = {
    name: "yasir rizki",
    age: 20,
    address: "tegal"
};
console.log(person2);
