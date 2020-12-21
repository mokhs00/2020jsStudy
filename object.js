'use strick'

const hansu = { name: 'hansu', age: 21 };


console.log(hansu['age'], hansu.age);
hansu.hasJob = true;

console.log(hansu.hasJob);
delete hansu.hasJob;
console.log(hansu.hasJob);

const person1 = makePerson('mokhs', '21');

console.log(person1);
// property value shorthand
// key, value의 이름이 동일하다면 생략 가능.
function makePerson(name, age) {
    return {
        name,
        age
    }
}

// constructor function
function Person(name, age) {

    this.name = name;
    this.age = age;

}

const person2 = new Person('su', 21);
console.log(person2);

// in operator
console.log('age' in hansu);

console.clear();
// for in for of
for (const key in hansu) {
    console.log(key);
}

const array = [1, 2, 3];
for (const value of array) {
    console.log(value);
}


// Fun cloning -> reference 방식
const user = { name: 'user1', age: 21 };
const user2 = user
user2.name = 'coder';
console.log(user); // {name: "coder", age: 21}

// value cloning 방식
// old way 
const user3 = {};
for (const key in user) {
    user3[key] = user[key];
    // user3.key=user.key; // 안됨
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
user4.age = 12;
console.log(user4); // {name: "coder", age: 12}
console.log(user); // {name: "coder", age: 21}

// another ex

const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
// 뒤에 것으로 덮어씌움
const mixed = Object.assign({}, fruit2, fruit1);
console.log(mixed); // {color: "red", size: "big"}
