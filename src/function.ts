// Function declaration
function sapa(nama:String){
    console.log("Hallo, aku" + nama)
}
sapa("Yasir!")

function calculate (a:number, b:number, c: number):number{
    return a + b + c
}
let hasil : number = calculate(3, 5, 1)
console.log("hasil penjumlahan:  + hasil");

let multiplication = (x:number, y:number) => {
    return x * y
}
let result = multiplication(5,8)
console.log("Hasil perkalian: " + result);

// Contoh penggunaan
const cube1 = function(num:number) {
    return num ** 3
}
console.log(cube1(3));

// Object
let person2: {
    name: string,
    age: number
    address: string
}
person2 = {
    name: "yasir rizki",
    age: 20,
    address: "tegal"
}
console.log(person2);
