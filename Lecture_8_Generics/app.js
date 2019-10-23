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
    8. tsc (in a NEW terminal window)
    9. F12 in the browser to see the console messages
*/ 
