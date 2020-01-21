//
/*  To get his working we need a lite-server running so :- 

    1. run "npm init"
    2. run "npm install --save-dev lite-server"
    3. in package.json add the following after "test", which is in "scripts"    -->    "start": "lite-server"
    4. run "npm install"
    5. run "tsc --init"
    6. nmp start (the name of the script in "package.json")
    7. tsc (in a NEW terminal window)
    8. F12 in the browser to see the console messages
*/
//
//
//
//
// FUNCTION RETURN TYPES and VOID.....
/*
// As 2 numbers are input into 'add' then added together, Typescript infers the return type as a number.
function add(n1: number, n2: number) {
    return n1 + n2;
}
//
// We're not returning anything here, just outputting a console message, so the return type is 'VOID'. Typescript has inferred this return type. 
function printResults(num: number) {
    console.log('Result is : ' + num);
}
//
printResults(add(5, 5));
//
//
// The function printResults doesn't return a value running the following code wil give me a value of UNDEFINED. As there's nothing returned, there's nothing to go to the console.
console.log(printResults(add(5, 5)));
*/
//
//
//
//
//
// FUNCTIONS AS TYPES.......
/*
// As 2 numbers are input into 'add' then added together, Typescript infers the return type as a number.
function add(n1: number, n2: number) {
    return n1 + n2;
}
//
// We're not returning anything here, just outputting a console message, so the return type is 'VOID'. Typescript has inferred this return type. 
function printResults(num: number) {
    console.log('Result is : ' + num);
}
//
printResults(add(5, 5));
//
//      The function printResults doesn't return a value running the following code wil give me a value of UNDEFINED. As there's nothing returned, there's nothing to go to the console.
//          console.log(printResults(add(5, 5)));
//
//
//  let combineValues;  // has a type of 'any' - due to this, line 64 (combineValues = 5;) compiles but will not run. So I need to set a type of 'function', line 64 now fails compilation.
// This also has an issue, i can now point it at any function, like printResults - however this doesn't accept 2 parameters, it'll compile, running it I'd get 'undefined'
let combineValues: Function;
//
// combineValues is now a POINTER to the function 'add'
combineValues = add;
//
combineValues = printResults;       // compiles, but get an 'undefined' when running.
//
// As conbineValues is of type 'any' the following line will compile, but will fall over at run time, saying combineValues is not a function...commented out now combineValues is of type 'function'
//combineValues = 5;
//
// Call the function combineValues (well add really) and output the result....
console.log(combineValues(2, 7));
*/
//
//
//
// Let's create a function type as the above is too messy and prone to failures.....
//
/*
//This says; 'combineValuesNew' accepts any function that takes two number parameters and returns a number...
let combineValuesNew: (a: number, b: number) => number;
//
combineValuesNew = add;             // works as the function 'add' accepts two number parameters and returns a number.
//
//combineValuesNew = printResults;    // doesn't work as printResults doesn't accept two number parameters and doesn't return a number
//
console.log(combineValuesNew(10, 107));
*/
//
//
//
//
// FUNCTION TYPES and CALLBACKS.....
//
/*
// As 2 numbers are input into 'add' then added together, Typescript infers the return type as a number.
function add(n1: number, n2: number) {
    return n1 + n2;
}
//
// We're not returning anything here, just outputting a console message, so the return type is 'VOID'. Typescript has inferred this return type. 
function printResults(num: number) {
    console.log('Result is : ' + num);
}
//
// 2 input parms, both numbers, and a call back FUNCTION (cb), which accepts a number and doesn't return anything.
function addAndHandle(n1: number, n2:number, cb: (num: number) => void ) {
    const result = n1 + n2;
    cb(result);
}
// Anonymous function (), which accepts 1 value called result. 
addAndHandle(10, 20, (result) => {
    console.log('Callback result :' + result);
});
//
//
printResults(add(5, 5));
//
//This says; 'combineValuesNew' accepts any function that takes two number parameters and returns a number...
let combineValuesNew: (a: number, b: number) => number;
//
combineValuesNew = add;             // works as the function 'add' accepts two number parameters and returns a number.
//
//combineValuesNew = printResults;    // doesn't work as printResults doesn't accept two number parameters and doesn't return a number
//
console.log(combineValuesNew(10, 107));
*/
//