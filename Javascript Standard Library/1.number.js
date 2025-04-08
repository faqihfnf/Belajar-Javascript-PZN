const input = "12345";
const angka = "1,2,3,4,5";
const number = Number(input);
const number2 = Number(angka);

console.log(typeof input); // string
console.log(typeof number); // number
console.log(number); // 12345
console.log(number2); // NaN

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

const data = "12345";
console.log(Number.isInteger(data)); // false
console.log(Number.isInteger(number)); // true

const value = Number("12345");
console.log(value.toLocaleString("id-ID")); // 12.345
console.log(value.toString(2)); // 11000000111001
