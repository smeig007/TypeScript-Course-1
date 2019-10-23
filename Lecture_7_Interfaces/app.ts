//
//
/*  To get his working we need a lite-server running so :- 

    1. run "npm init"
    2. run "npm install --save-dev lite-server"
    2. run "npm install"
    3. run "tsc --init"
    4. insert into package.json file   "start": "lite-server"
    5. run npm install --save systemjs@0.21.5 --save   (can google to have a look about it - systemjs - chose the github page.)
    6. change tsconfig.json to have :-
                //
                // ** COMMENTING THIS OUT FOR NOW AND REPLACING WITH THE FOLLOWING LINE....AS I CANT USE --outFile COMMENT WITH THIS SET TO "common.js"
                //"module": "commonjs",                     // Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. //
                //
                // UNCOMMENT THE FOLLOWING 1 line :- 
                // "module": "amd",                     // Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. //
                //
    7. nmp start (the name of the script in "package.json")
    8. tsc (in a NEW terminal window)
    9. F12 in the browser to see the console messages
*/
//  
// This wont work - the object "person" does not have a method called "name", it instead has "firstName"
/*
            function greet (person: any) {
                console.log("hello, " + person.name);
            }
            //
            const person = {
                firstName: 'Greig',
                age : 47
            }
            //
            greet(person);
            */
//
// So we change it to :- 
/*
interface NamedPerson {
    firstName: string;    
}
//
function greet (person: NamedPerson) {
    console.log("hello, " + person.firstName);
}
//
function changeName(person: NamedPerson) {
    person.firstName = 'Bob';
}
//
const person = {
    firstName: 'Greig',
    age : 47
}
//
greet(person);
changeName(person);
greet(person);
*/
//
//
//
//
//
//
// INTERFACES and PROPERTIES
/*
interface NamedPerson {
    firstName: string;    
    // Without the following line, the call on line 87 (greet({firstName: 'Shauna', age: 27});)  will fail. We need to include 'age', and also '?' which means 'age' is optional ! 
    age? : number;
    // If you don't know the 'name' of the properties, you can use [] - NO THEY'RE NOT AN ARRAY !! They're a 'FLEXIBLE KEY NAME' they can be called anything, I'm calling my 'propName'
    [propName : string] : any;
}
//
function greet (person: NamedPerson) {
    console.log("hello, " + person.firstName);
}
//
function changeName(person: NamedPerson) {
    person.firstName = 'Bob';
}
//
const person = {
    firstName: 'Greig',
    age : 47,
    // This refers to the 'FLEXIBLE KEY NAME' in the interface (NamedPerson), where we didn't know the name of the property. 
    hobbies: ['Sports', 'cooking']
}
// Changing the below line causes the following compilation error....
greet({firstName: 'Shauna', age: 27});
/*
            PS C:\grh\Courses\TypeScript-Course-1\Lecture_7_Interfaces> tsc
            app.ts:86:29 - error TS2345: Argument of type '{ firstName: string; age: number; }' is not assignable to parameter of type 'NamedPerson'.
            Object literal may only specify known properties, and 'age' does not exist in type 'NamedPerson'.

            86 greet({firstName: 'Shauna', age: 27});
                        
            Found 1 error.
*/
/*
changeName(person);
greet(person);
*/
//
//
//
//
//
//
//
// INTERFACES and METHODS
/*
interface NamedPerson {
    firstName: string;    
    // Without the following line, the call on line 143 (greet({firstName: 'Shauna', age: 27});)  will fail. We need to include 'age', and also '?' which means 'age' is optional ! 
    age? : number;
    // If you don't know the 'name' of the properties, you can use [] - NO THEY'RE NOT AN ARRAY !! They're a 'FLEXIBLE KEY NAME' they can be called anything, I'm calling my 'propName'
    [propName : string] : any;
    // We can also have a method in our interface....
    greet(lastName: string) : void;
}
//
function greet (person: NamedPerson) {
    console.log("hello, " + person.firstName);
}
//
function changeName(person: NamedPerson) {
    person.firstName = 'Bob';
}
//
const person: NamedPerson = {
    firstName: 'Greig',
    age : 47,
    // This refers to the 'FLEXIBLE KEY NAME' in the interface (NamedPerson), where we didn't know the name of the property. 
    hobbies: ['Sports', 'cooking'],
    greet(lastName : string) {
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
*/
//
//
//
//
//
//
//
// USING INTERFACES WITH CLASSES....
/*
interface NamedPerson {
    firstName: string;    
    // Without the following line, the call on line 143 (greet({firstName: 'Shauna', age: 27});)  will fail. We need to include 'age', and also '?' which means 'age' is optional ! 
    age? : number;
    // If you don't know the 'name' of the properties, you can use [] - NO THEY'RE NOT AN ARRAY !! They're a 'FLEXIBLE KEY NAME' they can be called anything, I'm calling my 'propName'
    [propName : string] : any;
    // We can also have a method in our interface....
    greet(lastName: string, height?: number) : void;
}
//
function greet (person: NamedPerson) {
    console.log("hello, " + person.firstName + ' my height is ->' + person.height + 'cm<-');
}
//
function changeName(person: NamedPerson) {
    person.firstName = 'Bob';
}
//
const person: NamedPerson = {
    firstName: 'Greig',
    age : 47,
    // This refers to the 'FLEXIBLE KEY NAME' in the interface (NamedPerson), where we didn't know the name of the property. 
    hobbies: ['Sports', 'cooking'],
    greet(lastName : string, height: number) {
        console.log('Hi, i am ' + this.firstName + ' ' + lastName + '.....');
    }
};
//
//greet({firstName: 'Shauna', age: 27});
/*
        changeName(person);
        greet(person);
        person.greet('Whatever');
//
//
// The definition of the 'class' needs to match that of the 'interface' - doesn't need the optional properties though.... 
class newPerson implements NamedPerson {
    // THE ! IS - NON-NULL ASSERTION OPERATOR. This operator can be used where the complier IS unable to check the variable can not be null/undefined , ie it has no default value.
    firstName!: string;    
    // I can also ADD new properties to my 'class' which do NOT exist in the 'interface', such as 
    height: number = 170;
    // We can also have a method in our interface....
    greet(lastName: string, height?: number) {
        console.log('inside the newPerson class......Hi, i am ' + this.firstName + ' ' + lastName + '.....my height is ->' + height + 'cm<-');
    };
}
//
const myNewPerson = new newPerson();
myNewPerson.firstName = 'Big Bob';
myNewPerson.greet('Whatever_2', myNewPerson.height);       // Execute the method on line 203 (approx.)
myNewPerson.height = 190;           
greet(myNewPerson);                                         // Execute the function greet on line 170 (approx.)
myNewPerson.greet('Whatever_3', myNewPerson.height);        // Execute the method on line 203 (approx.)
*/
//
//
//
//
//
//
//
//
// INTERFACES AND FUNCTION TYPES
/*
// So whatever uses this 'interface' must be a function of this type, ie 2 numbers in and returns a number.....
interface DoubleValueFunc {
    (number1 : number, number2: number) : number;
}
//
let myDoubleFunction : DoubleValueFunc;
//
myDoubleFunction = function(value1: number, value2: number) {
    return (value1 + value2) * 2;
};
//
console.log(myDoubleFunction(7,7));
*/
//
//
//
//
// INTERFACE INHERITANCE
//
interface NamedPerson {
    firstName: string;    
    // Without the following line, the call on line 143 (greet({firstName: 'Shauna', age: 27});)  will fail. We need to include 'age', and also '?' which means 'age' is optional ! 
    age? : number;
    // If you don't know the 'name' of the properties, you can use [] - NO THEY'RE NOT AN ARRAY !! They're a 'FLEXIBLE KEY NAME' they can be called anything, I'm calling my 'propName'
    [propName : string] : any;
    // We can also have a method in our interface....
    greet(lastName: string, height?: number) : void;
}
//
// Extend the NamedPerson interface and make the 'age' mandatory....
interface AgedPerson extends NamedPerson {
    age : number;
}
//
// object 'oldPerson' must contain ALL the (mandatory) properties from interface 'NamedPerson' and 'AgedPerson'.
const oldPerson : AgedPerson = {
    age : 44,
    firstName : 'Fred',
    greet(lastName: string) {
        console.log('Allwighhhhtttttt!! ' + this.firstName + ' ' + lastName + ', my age is ' + this.age + '.');
    }
}
//
console.log(oldPerson);
//
oldPerson.greet('Bloggs');
//
//
//
//
//
//
//
// WHAT HAPPENS WHEN INTERFACES GET COMPILED ? 
//
// Interfaces do NOT get compiled at all !!!  Looking at the code above from lines 242 --> 269, in the app.js file it gets compiled into :- 
//
                    //var oldPerson = {
                    //    age: 44,
                    //    firstName: 'Fred',
                    //    greet: function (lastName) {
                    //        console.log('Allwighhhhtttttt!! ' + this.firstName + ' ' + lastName + ', my age is ' + this.age + '.');
                    //    }
                    //};
                    //
                    //console.log(oldPerson);
                    //
                    //oldPerson.greet('Bloggs');
//
// 
// They are JUST there to check your code in compilation ! To (potentially) give you compilation errors. 
//
// Therefore Javascript doesn't know about TYPES or INTERFACES.
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