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
//console.log('hello world....boom !!!');
//
//USING TYPES...........
//
//  Adding two numbers is fine, however we have a number and a string (const number1 = '5' const number2 = 7;) so the + in the return statement is ACTUALLY 
//  concatenating the two values. Ie 5+7 = 12, not 57
/*
function add(n1: number, n2: number) {
    return n1 + n2;
}
//const number1 = '5';
const number1 = 5;
const number2 = 7.7;
//
const result = add(number1, number2);
console.log(result);
*/
//
//
//
// TYPESCRIPT TYPES  v  JAVASCRIPT TYPES.............................
/*
function add(n1: number, n2: number) {
    // Display the TYPE of the variable number1
    console.log(typeof n1);
    // This is Javascript, NOT Typescript...We can avoid it, by using TYPES, which highlight/stop these issues at compilation time, rather than run time.
            // A way of further checking the type of parameters are both numbers, else throw an error....both fi statements have the same ending. 
            // if (typeof n1 ==== 'number'  &&  typeof n2 === 'number') {    //   n1 and n2 must both be numbers
            // if (typeof n1 !== 'number' || typeof n2 !== 'number') {          //   n1 or  n2 are not numbers   
            //    throw new Error('Incorrect input !');
            //    
            // }
    return n1 + n2;
}
const number1 = 5;
const number2 = 7.7;
//
const result = add(number1, number2);
console.log(result);
*/
//
//
//
//
// 
// TYPE CASING..........
//
//      Remember - Core primitive types in Typescript are ALL lowercase. For example; 'number' NOT 'Number' or 'string', NOT 'String' !!!
//
//
//
//
//
// NUMBERS, STRINGS and BOOLEANS............
/*
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2
    if (showResult) {
        // NOTE - adding 2 or 3 or more numbers together returns a number. However, introducing a string will return a STRING and the numbers are concatenated not added together ! 
        // ie "Result  is : 57.7" would happen if we did console.log(phrase + n1 + n2);
        console.log(phrase + result);
    } else {
        return result;
    }
}
//
const number1 = 5;
const number2 = 7.7;
//
const printResult  = true;
const resultPhrase = 'Result is : ';
//
add(number1, number2, printResult, resultPhrase);
*/  
//
//
//
//
//
// TYPE ASSIGNMENT and TYPE INFERENCE.............
/*
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2
    if (showResult) {
        // NOTE - adding 2 or 3 or more numbers together returns a number. However, introducing a string will return a STRING and the numbers are concatenated not added together ! 
        // ie "Result  is : 57.7" would happen if we did console.log(phrase + n1 + n2);
        console.log(phrase + result);
    } else {
        return result;
    }
}
//
//const number1 = 5; // number will only ever contain 5 and be default is a NUMBER as that's what you've initialised it with. This is INFERENCE.
//
// Same as above, but as I'm not assigning a value, just initialising it, it's good practice (but not mandatory) to let Typescript know what type it will/can contain later on...
let number1: number;
// Now is assign a value to it. 
number1 = 5;      //Works
//number1 = '5'; // Fails! 
//
const number2 = 7.7;
//
const printResult  = true;
const resultPhrase = 'Result is : ';
//
add(number1, number2, printResult, resultPhrase);
*/