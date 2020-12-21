'use strict';

const arr1 = new Array();
const arr2 = [1, 2];


console.log(arr1, arr1.length); // [] 0
console.log(arr2, arr2.length); // [1, 2] 2

// forEach
arr2.forEach(v => console.log(v));
arr2.forEach(function (index, value, arr) {
    console.log(index, value, arr);
});

arr2.forEach((value, index) => console.log(index, value));

console.clear();

// Addtion, deletion, copy
// push : add an item to the end
// 🍊🍋🍌🍍🥭🍎🍏🍐🍑
const fruits = ['🍊', '🍋'];
fruits.push('🍌', '🍍');
console.log(fruits);

// pop : remove an item from the end
console.log(fruits.pop(), fruits);

// add an item to the begenning
fruits.unshift('🍐','🍑');
console.log(fruits);

// remove an item to the begenning
fruits.shift();
console.log(fruits);

// shift, unshift are slower than pop, push
// -> 앞에서부터 변경하고 배열을 한 칸씩 옮겨야하기 때문 

// splice : remove an item by index position
//        : 겹쳐 잇기 ,접착

fruits.splice(1); // remove 인덱스 1번 제외 
console.log(fruits);
fruits.push('🍌', '🍍');
fruits.splice(1,1); // remove 인덱스 1번부터 1개
console.log(fruits);
fruits.splice(0, 1,'🍏','🍐');  // 지우고 붙이기
console.log(fruits);

const fruits2 = ['🍊', '🍋'];
console.log(fruits.concat(fruits2));
console.log(fruits);

// Searching
console.clear();
console.log(fruits2);
console.log(fruits2.indexOf('🍋')); // 1
console.log(fruits2.indexOf('')); // -1

// includes 
console.log(fruits2.includes('🍊')); // true

// lastIndexOf
console.clear();
fruits2.push('🍋');
console.log(fruits2);
console.log(fruits2.indexOf('🍋')); // 1
console.log(fruits2.lastIndexOf('🍋')); // 2
