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
const button_a = document.querySelector("button");
const input1_b = document.getElementById("num1");
const input2_c = document.getElementById("num2");
//
//
// IMPORTANT - when you access a value in typescript it is ALWAYS ALWAYS ALWAYS a string !!!!!
//
function add_d(num1, num2) {
  // Here we are adding two strings together. In javascript adding two strings together actually concatenates them ! 
  //  so '2' + '2' = '22' and not 4 - this is concatenating two strings not adding them.
  return num1 + num2;
}
//
// IMPORTANT - when you access a value in typescript it is ALWAYS ALWAYS ALWAYS a string !!!!!
//
button.addEventListener("click", function() {
  console.log(add(input1_b.value, input2_c.value));
});
//
//
//
//
//
//
//
//
