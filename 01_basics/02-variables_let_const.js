console.log('JavaScript Variables');

let a = 4;
let b = 3;
let z = a + b;
a = 15;
b = 6;
z = a - b;
console.log(z); // 9

let x = 10;
console.log(x); // 10
x = 15;
console.log(x); // 15
x = 'one';
console.log(x); // one

const y = 20;
console.log(y); // 20
// y = 25; // incorrect

const integer = 15;
const decimal = 21.102;
console.log(integer, 'and', decimal); // 15 'and' 21.102

const text = 'Hello World!';
console.log(`Text: ${text}`); // Text: Hello World!

// multiline
const multiline = `line 1
        line 2
    line 3`;
console.log(multiline);

// boolean
const messageSentFlag = true;
console.log(messageSentFlag); // true

// tables
const cars = ['Audi', 'BMW', 'Opel', 'Mercedes'];
console.log(cars); // (4)['Audi', 'BMW', 'Opel', 'Mercedes']
console.log(cars.length); // 4
console.log(cars[0]); // Audi
console.log(cars[3]); // Mercedes

// objects
const colors = {
  first: 'black',
  second: 'red',
  third: 'blue',
};
console.log(colors); // {first: 'black', second: 'red', third: 'blue'}
colors.second = 'grey';
console.log(colors); // {first: 'black', second: 'grey', third: 'blue'}

// https://www.w3schools.com/js/js_variables.asp
