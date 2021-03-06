"use strict";
/**/
/* HOW THE COMPILER WORKS..........*/
/**/
var myName = 'Greig';
var myAge = 47;
/**/
/* This gets compiled into javascript file - see app.js (when in app.js note 'let' is dropped for 'var' and the types 'string' and 'number' are also dropped)   */
// myName = 30;
/* Doing the above line in the app.ts will cause a compilation WARNING (putting a number into a string type variable), however it will STILL appear in the app.js file */
/**/
/* This can be overridden in the tsconfig,json file. */
/**/
/**/
/**/
/**/
/* The following will work as long as the statement is present in tsconfig.json - "noImplicitAny": false, (Raise error on expressions and declarations with an implied 'any' type.)
/* If however its is set to true - "noImplicitAny": true,  - you will get a complile error.
*/
var anything;
anything = 12;
/**/
/**/
/**/
/* Whilst this code WILL compile, it does however have a problem. Result 'might not be initialized (ie set to 12)', it is implicitly NULL. If in tsconfig.json the following
/* is present - "strictNullChecks": true,  (Enable strict null checks.) Then a compilation error will occur, saying - "Variable 'result' is used before being assigned."
/**/
function controlMe(isTrue) {
    var result;
    if (isTrue) {
        result = 12;
    }
    return result;
}
/**/
/* This can also fail with the following in tsconfig.json - "noUnusedParameters": true, (Report errors on unused parameters. */
/**/
function controlMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/ 
