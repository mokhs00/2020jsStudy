'use strict'

// 1. async : promise 반환
async function fetchUser() {
    return 'hansu';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(
        resolve
        , ms));

}

async function get1(){
    await delay(1000);
    return '1';
}

async function get2(){
    await delay(2000);
    return '2';
}


// bad case : too long
async function pickNums() {
    const onePromise = get1();
    const twoPromise = get2();
    const one = await onePromise;
    const two = await twoPromise
    return  `${one} + ${two}`;    
}

pickNums().then(console.log);

// 3. useful Promise APIs

// Promise.all()
function pickAllNums() {
    return Promise.all([get1(), get2()]).then((num)=> num.join(", "));    
}

pickAllNums().then(console.log);


// Promise.race()
function pickOnlyOne() {
    return Promise.race([get1(), get2()]);    
}

pickOnlyOne().then(console.log);

