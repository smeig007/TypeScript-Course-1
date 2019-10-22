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
    age: 47
};
// Changing the below line causes the following compilation error....
greet({ firstName: 'Shauna', age: 27 });
/*
            PS C:\grh\Courses\TypeScript-Course-1\Lecture_7_Interfaces> tsc
            app.ts:86:29 - error TS2345: Argument of type '{ firstName: string; age: number; }' is not assignable to parameter of type 'NamedPerson'.
            Object literal may only specify known properties, and 'age' does not exist in type 'NamedPerson'.

            86 greet({firstName: 'Shauna', age: 27});
                        
            Found 1 error.
*/
//
changeName(person);
greet(person);
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
//
//
//
//
//
//
//
