"use strict";
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
    8. tsc -w (in a NEW terminal window)
    9. F12 in the browser to see the console messages
*/
//
//
//
//
// WHY and WHAT are GENERICS....SIMPLE GENERIC
/*
function echo(data : any) {
    return data;
}
//
console.log(echo('Fred'));
console.log(echo(27));
console.log(echo({name: 'Fred', age: 44}));
*/
//
//
//
//
// Better generic function...
//
// The SIMPLE GENERIC above is fine, however, because the type is of ANY, we cant check things being returned, for example - 
//          console.log(echo(27).length); 
// wont work as we do not know the data type being returned (the RESULT TYPE).
//
// Using the greater and less than signs and ANY character you want, either upper or lower case (upper case T is the most common), you can still allow anything into the function,
// but now it'll return the type of data which is passed into the function "betterEcho".....
/*
function betterEcho<T>(data : T) {
    return data;
}
//
console.log(betterEcho('Fred'));
console.log(betterEcho('Fred').length);
console.log(betterEcho(27));
console.log(betterEcho({name: 'Fred', age: 44}));
*/
//
//
//
//
// Built in Generics....
//
// An Array is a built in generic, but we can tighten up the values allowed to be passed into that array, for example....this array will only allow numbers into it
var testResults = [2.56, 1.97];
/*
testResults.push(3.01);     // Works ok
testResults.push(-2.33);    // Works ok
//testResults.push("4.01");   // Fails as I'm not allowed to push a string into the <number> array.
//
console.log(testResults);
*/
//
//
//
//
// <T> - this is a generic type
//
//
//
// Generic Types and Arrays
/*
// printAll is a generic function, it's input data is an array.
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
//
// the type of data being input is defined in the function call, it's of type 'string'....
printAll<string>(['Apples', 'Bananas', 'Oranges']);
*/
//
//
//
//
// Using Generic Types.........
//
// echo2 is a generic function....
// data is an input, we'll then return this type.
/*
function echo(data : any) {
    return data;
}
//
// REMEMBER everything after the : and before the = is a TYPE ASSIGNMENT.....
//              <T> (data: T) => T
//
//
// ****************************************************************************************************************************************************************
// The function (echo2) will hold a constant, where the input is one argument of type <T> ie whatever the user specifies, then return something of data type <T>
// ****************************************************************************************************************************************************************
const echo2: <T> (data: T) => T = echo;
//
console.log(echo2<string>("Something"));
*/
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
// Creating a Generic Class.....
/*
// Non-generic version....
class simpleMath {
    baseValue;
    multiplyValue;
    calculate() {
        return this.baseValue * this.multiplyValue;
    }
}
//
const simpleMath = new simpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
*/
//
//
/*
//Generic Version....the user will specify the Type (T) when calling simpleMath2...
class simpleMath2<T> {
    // The two internal variables, must also be of the same type <T>
    baseValue: T;
    multiplyValue: T;
    calculate() : number {
        // by putting a + in front of the variables will EXPLICITLY CAST them to a NUMBER
        return +this.baseValue * +this.multiplyValue;
    }
}
//
const simpleMath2 = new simpleMath2();
simpleMath2.baseValue = 5;
simpleMath2.multiplyValue = 20;
console.log(simpleMath2.calculate());
*/
//
//
/*
//Constraints....Generic Version....the user will specify the Type (T) when calling simpleMath3...it can either be a number or a string being passed in.
class simpleMath3<T extends number | string > {
    // The two internal variables, must also be of the same type <T>
    baseValue: T;
    multiplyValue: T;
    calculate() : number {
        // by putting a + in front of the variables will EXPLICITLY CAST them to a NUMBER
        return +this.baseValue * +this.multiplyValue;
    }
}
//
const simpleMath3 = new simpleMath3<number>();
simpleMath3.baseValue = 10;
simpleMath3.multiplyValue = 70;
console.log(simpleMath3.calculate());
*/
//
//
//
//
/*
//Using more than one Generic type..........T is one type, U is another type (this is extending number and string)
// ORIGINAL VERSION...
// class simpleMath4<T, U extends number |string> {
//
// One way is for T to extend U - HOWEVER, doing this means that if U is of type number, than T MUST be of type number, it WILL NOT be an extension !!!
//class simpleMath4<T extends U, U extends number |string> {
//
// Another way is to explicitly extend T....
class simpleMath4<T extends number |string, U extends number |string> {
    // The two internal variables, must also be of the same type <T>
    baseValue: T;
    multiplyValue: U;
    calculate() : number {
        // by putting a + in front of the variables will EXPLICITLY CAST them to a NUMBER
        return +this.baseValue * +this.multiplyValue;
    }
}
//
// First parm is of type STRING, the second is a NUMBER...
const simpleMath4 = new simpleMath4<string, number>();
simpleMath4.baseValue = "7";
simpleMath4.multiplyValue = 7;
console.log(simpleMath4.calculate());
*/
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
// Module Exercise.....
//
var MyMap = /** @class */ (function () {
    function MyMap() {
        // Declare a 'private' property map , which is of type object ({})....it is NOT an array, despite the square brackets, it is defining a key, which is of type string
        // the values stored for this key will be of type T
        // assign it to an empty object at the beginning...
        this.map = {};
    }
    //
    MyMap.prototype.setItem = function (key, item) {
        // access the map
        this.map[key] = item;
    };
    //
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    //
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    // 
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
//
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
//
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
console.log(stringMap.getItem('name'));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
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
