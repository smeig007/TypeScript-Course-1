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
//------------------------------------------------------------------------------------------
// NOTE - "control + space bar" gives you the AUTO COMPLETION DROP DOWN WINDOW......
//------------------------------------------------------------------------------------------
//
//
//
//
const userName = 'Bob';
console.log(userName);
//
//
// WATCH MODE....
//
// tsc app.ts -w
//
//
//
//
// WATCHING ENTIRE PROJECT and/or MULTIPLE FILES...//
//
// tsc --init   // only needs running once in this project. Creates "tsconfig.json" file....
//
// tsc -w
//
//
//
//
// INCLUDING and EXCLUDING FILES.........
//  
// in the tsconfig.json file, right at the bottom I can add the following array command to exclude certain scripts when running "tsc -w" command :-
//  ....
//  ....
//  ....
//  ....
//     // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
//   } 
//   ,
//   // Here I can add scripts which i do not want to include in the automatic re-compilation using "tsc -w" command.....
//   //"exclude": ["analytics.ts", "*.dev.ts", "analy*.ts"] 
// }
//
//
//
//
//
// SETTING A COMPILATION TARGET.........
//
// in the tsconfig.json file, under compiler options, "target"
//
//
//
//
//
//
//
//
// UNDERSTANDING TYPESCRIPT CORE LIBRARIES....
//
// in the tsconfig.json file, have just added a button (click me) in the index.html file, now select it....add the ! at the end to let typescript know to to worry about the 
// button existing or not existing (it may throw a compilation error).....also added some lib[] settings to show what some are....
//
const button = document.querySelector('button'); // By setting "strictNullChecks": false in 'tsconfig.json' we'd not need the !
//
button.addEventListener('click', () => {
    console.log('Button clicked..');
});
//
//
// Another way of writing the code above, leaving the strict checks on (ie true), is to wrap your code around an IF statement. What if the button, you coded, was removed by 
// someone else, your code above would compile, but fail at run time. Should your code be removed/altered, the button would have a null value. The boolean check of true here
// would cause a compilation and a run time error, belt and braces...
if (button) {
    button.addEventListener('click', () => {
        console.log('Button clicked..');
    });
}
//
//
//
//
const newButton = document.querySelector('button'); // By setting "strictBindCallApply": false in 'tsconfig.json' checks on which function you're calling on the bind call
//                                                       or apply and checks if what you're setting up makes sense. 
//
function clickHandler(message) {
    console.log('Clicked ! ' + message);
}
//
if (newButton) {
    // newButton.addEventListener('click', clickHandler.bind(null)); // this will error if "strictBindCallApply": false isn't set....
    newButton.addEventListener('click', clickHandler.bind(null, 'You\'re welcome'));
}
//
//
//
//
// MORE CONFIGURATION and COMPILATION OPTIONS............
//
// in the tsconfig.json file, look at 'allowJs' and 'checkJs'
//
//
//
// ----------------------------------------------------------------
// SOURCE MAPS........very handy !!!
// ----------------------------------------------------------------
//
// These help with debugging and development. 
//
// in the tsconfig.json file, the following is commented out by default - // "sourceMap": true,                  /* Generates corresponding '.map' file. */
//
//
//
//
//
//
// rootDIR and outDIR....
// 
// in the tsconfig.json file, we can manipulate the structure of our files/folders to only compile certain files and exclude others...
//
//  // "outDir": "./",                        /* Redirect output structure to the directory. */
//  // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
//
//
//
//
//
//
//
// STOP EMITTING FILES ON COMPILATION ERRORS........
//
// in the tsconfig.json file, the following doesn't exist by default but we can add it, "noEmitOnError": 
//
//
//
//
//
//
//
// *** VERY HANDY THIS........
//
// ** DEBUGGING VIA Visual Studio....
//
// 1 -  in tsconfig.json - enable the following - "sourceMap": true,            /* Generates corresponding '.map' file. */
// 
// 2 -  in your code add a break point - such as this line, with the red dot.
//
// 3 -  Go to DEBUG at the top of the screen in the drop down options and click "START DEBUGGING"
//
// 4 -  For select environment - enter "CHROME" 
//
// 5 -  a new file is created and opened for you - "launch.json"
//
// 6 -  in our examples on this course, we run our local server on port 3000, so "url": "http://localhost:30000", 
//
// 7 -  compile your code using "tsc"
//
//
//
//
//
//
//
// USEFUL LINKS.............
//
//These links might also be interesting:
//
//      tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
//
//      Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html
//
//      VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging
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
