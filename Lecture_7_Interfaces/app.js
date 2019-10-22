"use strict";
//
function greet(person) {
    console.log("hello, " + person.firstName);
}
//
function changeName(person) {
    person.firstName = 'Bob';
}
//
var person = {
    firstName: 'Greig',
    age: 47,
    // This refers to the 'FLEXIBLE KEY NAME' in the interface (NamedPerson), where we didn't know the name of the property. 
    hobbies: ['Sports', 'cooking'],
    greet: function (lastName) {
        console.log('Hi, i am ' + this.firstName + ' ' + lastName + '.....');
    }
};
//
//greet({firstName: 'Shauna', age: 27});
//
changeName(person);
//
greet(person);
//
person.greet('Whatever');
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
