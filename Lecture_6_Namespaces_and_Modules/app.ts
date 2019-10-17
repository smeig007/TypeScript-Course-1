//
/*  To get his working we need a lite-server running so :- 

    1. run "npm init"
    2. run "npm install --save-dev lite-server"
    2. run "npm install"
    3. run "tsc --init"
    4. nmp start (the name of the script in "package.json")
    5. tsc (in a NEW terminal window)
    6. F12 in the browser to see the console messages
*/
//
//
//
// NAMESPACES...........
/*
namespace MyMaths {
    // PI is defined within the namespace so not accessible outside the namespace.
    const PI = 3.14;
    //
    // Must export the functions you want to call to expose them to the outside world.
    export function calculateCircumference(diameter: number) {
        return diameter * PI;
    }
    //
    export function calculateRectangle(width: number, length: number) {
        return width * length;
    }
}
//
// This declaration of the same named variable, PI, is in the GLOBAL SCOPE, the other is in the namespace (MyMaths) scope ! So are completely unrelated.
const PI = 1.77;
//
// Need to call the functions within the namespace using the .notation
console.log(MyMaths.calculateCircumference(4));
console.log(MyMaths.calculateRectangle(3, 3));
console.log(PI);
*/
//
//
//
/*
// NAMESPACES and MULTIPLE FILES.........CREATED two new .ts files, circleMaths.ts and rectangleMaths.ts....
//
//
// This declaration of the same named variable, PI, is in the GLOBAL SCOPE, the other is in the namespace (MyMaths) scope ! So are completely unrelated.
const PI = 1.77;
//
// Need to call the functions within the namespace using the .notation
console.log(MyMaths.calculateCircumference(4));
console.log(MyMaths.calculateRectangle(3, 3));
console.log(PI);
*/
//
//
// Running these console.logs would produce the following error in the browser (F12) not in the tsc compiler :- 
//
//                app.js:53 Uncaught ReferenceError: MyMaths is not defined
//                    at app.js:53
//                (anonymous) @ app.js:53
//
// This is because we only import the app.js file in the index.html ( <script src="app.js"></script> ) and myMaths is no longer declared here (in app.js), it is in circleMaths and rectangleMaths.
//
// We can either import all 3 files in the index.html file :- 
//                                                              <script src="app.js"></script>
//                                                              <script src="circleMaths.js"></script>
//                                                              <script src="rectangleMaths.js"></script>
//
// 
// This will clearly get very messy very quickly. There is an alternative. You still only need a single script in the index.html file (app.js), then when compiling the typescript code
// into javascript code using TSC, instead of just typing "tsc", we use  :-
//  
//        "tsc --outfile <filename> <file1 file2 file3 etc etc>"     so...
// 
//         "tsc --outfile app.js circleMaths.ts rectangleMaths.ts app.ts"
//
//  this means create one single file called app.js and build it using the typescript files called circleMaths.ts AND rectangleMaths.ts AND app.js
//
//
//
//
//
//
// NAMESPACE IMPORTS...........This is not the same code used for imports in Javascript ES6 code, it begins with 3 forward slashes ///
/*
/// <reference path="circleMaths.ts" />
/// <reference path="rectangleMaths.ts" />
//
// Still need to run the "tsc --outfile app.js" command to bring all the other code into this file (app.js) :- 
                                //"use strict";
                                ////
                                //var MyMaths;
                                //(function (MyMaths) {
                                //    // PI is defined within the namespace so not accessible outside the namespace.
                                //    var PI = 3.14;
                                //    //
                                //    // Must export the functions you want to call to expose them to the outside world.
                                //    function calculateCircumference(diameter) {
                                //        return diameter * PI;
                                //    }
                                //    MyMaths.calculateCircumference = calculateCircumference;
                                //})(MyMaths || (MyMaths = {}));
                                ////
                                //var MyMaths;
                                //(function (MyMaths) {
                                //    //
                                //    // Must export the functions you want to call to expose them to the outside world.
                                //    function calculateRectangle(width, length) {
                                //       return width * length;
                                //    }
                                //    MyMaths.calculateRectangle = calculateRectangle;
                                //})(MyMaths || (MyMaths = {}));
                                //
                                // This declaration of the same named variable, PI, is in the GLOBAL SCOPE, the other is in the namespace (MyMaths) scope ! So are completely unrelated.
                                // const PI = 1.77;
                                // //
                                // // Need to call the functions within the namespace using the .notation
                                // console.log(MyMaths.calculateCircumference(4));
                                // console.log(MyMaths.calculateRectangle(3, 3));
                                // console.log(PI);
//
//
// This declaration of the same named variable, PI, is in the GLOBAL SCOPE, the other is in the namespace (MyMaths) scope ! So are completely unrelated.
const PI = 6.44;
//
// Need to call the functions within the namespace using the .notation
console.log(MyMaths.calculateCircumference(4));
console.log(MyMaths.calculateRectangle(3, 3));
console.log(PI);
*/
//
//
//
//
//
//
// NAMESPACES WITHIN NAMESPACES.................
/*
//
//          /// <reference path="circleMaths.ts" />
//          /// <reference path="rectangleMaths.ts" />
//
import CircleMaths = MyMaths.Circle;
import RectangleMaths = MyMaths.calculateRectangle;
//
// This declaration of the same named variable, PI, is in the GLOBAL SCOPE, the other is in the namespace (MyMaths) scope ! So are completely unrelated.
const PI = 6.44;
//
// Need to call the functions within the namespace using the .notation - this time need to include the new .notation (different from above !) 
console.log(CircleMaths.calculateCircumference(4));
console.log(RectangleMaths.calculateRectangle(3,3));
console.log(PI);
*/
//
//
//
//
//
//
// LIMITATIONS OF NAMESPACES.................
//
// Should really only be used on 'small' projects and not 'large' projects as too many would exist and it'd become extremely confusing as to what was pointing where and to what ! 
//
//
//
//
//
//
//
//
// MODULES............importing and exporting
//
//VERY IMPORTANT - MUST INSTALL "SystemJS 0.x" - DO NOT SKIP THIS STEP ! USE - npm install --save systemjs@0.21.5
//
/*
import { PI, calculateMyCircumference } from './maths/circle';
import { calculateMyRectangle } from './maths/rectangle';

console.log(PI);
console.log(calculateMyCircumference(10));
console.log(calculateMyRectangle(4,4));
*/
//********************************************************************************
//
// OR............
//
//      Regarding the 'import' statement I could also do the following, which bring everything in, without having to name individual items and also give it an alias....
//
// AND.............
//
//      As I've used "default" in the rectangle.ts file, I don't need to specify anything to import (as only 1 function is being exported), but I can also rename that function....
//
//********************************************************************************
/*
import * as theCircle from './maths/circle';
import calc from './maths/rectangle';

console.log(theCircle.PI);
console.log(theCircle.calculateMyCircumference(10));
console.log(calc(4,4));
*/
//
//
//
//
//
// MODULE RESOLUTION............
/*
import * as theCircle from './maths/circle';    // this is a relative path...
import calc from './maths/rectangle';
//
import { Compnoment } from "@anglar/core";      // This is an absolute path - it will go to node_modules folder to resolve it.....(unless you have an ambient typing definitions files).
//
//
console.log(theCircle.PI);
console.log(theCircle.calculateMyCircumference(10));
console.log(calc(4,4));
*/
//
//
//
//***********************************************************************************************************************
//
// MODULES AND NAMESPACES - Wrap Up.......
//
//
//      NAMESPACES                                      MODULES
//
//      Organize Application with JS objects            Organize Application with real modules
//
//      Can be split up over multiple files             Can be split up over multiple files
//
//      No module loader required (good)                Module loader required (bad)
//
//      Dependencies get very difficult to manage       Explicit and clear dependency declaration, making it
//      on bigger projects, making it very hard         very easy to find and follow what is pointing to 
//      to find out what is pointing to what (BAD)      what (GOOD)
//
//***********************************************************************************************************************
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
