/**/
/* HOW THE COMPILER WORKS..........*/
/**/
let myName: string = 'Greig';
let myAge: number = 47;
/**/
/* This gets compiled into javascript file - see app.js (when in app.js note 'let' is dropped for 'var' and the types 'string' and 'number' are also dropped)   */
/**/
myName = 30;
/* Doing the above line in the app.ts will cause a compilation WARNING (putting a number into a string type variable), however it will STILL appear in the app.js file */
/**/
/* This can be overridden in the tsconfig,json file. */
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
/**/
/**/
/**/
/**/
/**/
/**/