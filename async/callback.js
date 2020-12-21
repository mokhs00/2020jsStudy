'use strict';

// JavaScript is synchrous.
// Execute the code block by order after hoisting.
// hoisting : var, funcrtion declaration

console.log('1');
setTimeout(()=> console.log('2'));
console.log('3');
printWithDelay(()=> console.log('4'), 2000);
printImmediately(()=> console.log('5'));



// Synchronous callback
function printImmediately(print){
    print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);    
}



// Callback Hell example
// Bad case
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'hansu' && password ==='1234') ||
                (id === 'coder' && password ==='code1')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
           if (user === 'hansu') {
               onSuccess({ name : 'hansu', role : 'admin'});               
           } else{
               onError(new Error('no access'));
           }
        }, 1000);

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,
    user=> userStorage.getRoles(
        user,
        userWithRole => {
            alert(
                `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
        },
        error => {
            console.log(error);
        }
    )
    ,error => {
        console.log(error);
    }
);


















