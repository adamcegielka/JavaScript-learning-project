// Data Types

const a = 12;
console.log(typeof a); // number

const b = 'text';
console.log(typeof b); // string

const c = true;
console.log(typeof c); // boolean

const d = { data: 4 };
console.log(typeof d); // object

const e = [];
console.log(typeof e); // object (Array object)

const f = new Date();
console.log(typeof f); // object (Date object)

const g = function myFunction() {};
console.log(typeof g); // function

let h;
console.log(typeof h); // undefined

const i = 1n;
console.log(typeof i); // bigint

const j = Symbol('mySymbol');
console.log(typeof j); // symbol

const k = null;
console.log(typeof k); // object - exception (error)
