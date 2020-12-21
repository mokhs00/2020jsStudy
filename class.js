"use strict";

class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        // age는 get age()를 호출 -> 무한 루프 _를 붙이기
        this._age = value < 0 ? 0 : value;
    }

    speak(){
        console.log(`${this.name} : hello!`);
    }
}

class Student extends Person{   
    study(){
        console.log(`${this.name} : studing. . .`);
    }
}

const hansu = new Person('Hansu', '21');
console.log(hansu.name, hansu.age);
hansu.speak();
const mokhs = new Student('mokhs','-1');
mokhs.study();
mokhs.speak();
console.log(mokhs.age); // 0


