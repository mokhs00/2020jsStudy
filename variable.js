// Valina Javascript를 위한 표시
// added ECMAScript 5 
// 선언되지 않은 변수에 값을 넣으면 막힘.
//
'use strict';

// mutable 변경 가능.
let a = 1;


// var hoisting = 끌어올리다
var b = 1;

// constant == immutable 상수 
const c = 1;

// {
//     block
// }

// variable types : read/write
// primitive, single item
// 원시 타입 -> number, string, boolean 등 , 
/// 0 null, undefined, NaN, '' boolean으로 false
// null != undefined

// const : read only

// Symbol 구분자
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(`symbol1 == symbol2 : ${symbol1 == symbol2}`);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(`gSymbol1 == gSymbol2 : ${gSymbol1 == gSymbol2}`);

// object -> 객체 const user ={ name = 'HanSu', age = '21'};
// 이 경우 user.name = '이름' 이런 식으로 변경은 가능


