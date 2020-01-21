"use strict";
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
// The UNKNOWN Type.....
//
var userInput;
var userName;
//
userInput = 7;
userInput = 'Bob';
//
//          userName = userInput; //Wont work, userInput is a 'string' I cant put a string into an unknown variable. 
//
// I need to 'check' the type first, before I can assign it....
if (typeof userInput === 'string') {
    userName = userInput;
}
//
//console.log(userName);
//
//
//
//
//
// The NEVER Type.......
//
// 2 input parms, one a string the other a number, then store them in the object {}, by default the return type is VOID. But We change it to NEVER as it'll NEVER return anything.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
//
generateError('An error occurred, code :', 7000);
//
