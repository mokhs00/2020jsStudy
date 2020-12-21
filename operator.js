'use strict';

console.log('my' + 'cat');

// === strict equality, no type conversion
// == 는 타입을 변형해서 비교함

const obj1 = {name : "1"};
const obj2 = {name : "1"};
const obj3 = obj1;

console.log(`object. ${obj1 == obj2}, ${obj1 == obj3}`);

console.log(`1. ${'' == false}`);       // true
console.log(`${'' === false}`);         // false
console.log(`2. ${0 == false}`);        // true
console.log(`${0 === false}`);          // false
console.log(`3. ${null == undefined}`); // true
console.log(`${null === undefined}`);   // false

// function hoisting
printAll("a","b,");
function printAll(...args) {
    args.forEach(element => {
        console.log(element);
    });

    for (const arg of args) {
        console.log(arg);
    }    
}


// arrow function
const arrowFunction = () => console.log("arrowFunction");

arrowFunction();

// IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();