//
/*  To get his working we need a lite-server running so :- 

    1. run "npm init"
    2. run "npm install"
    3. nmp start (the name of the script in "package.json")
    4. tsc (in a NEW terminal window.
    5. F12 in the browser to see the console messages

//
/* LET and CONST */
//
//
//
//              Var - Create a GLOBAL SCOPE VARIABLE....which sits on the global scope.
//
//              Let - Creates a BLOCK SCOPE VARIABLE....Which means it is contained in the block in which you define it. 
/*
//

var myVariable = 'Test';
console.log(myVariable);
//
//  NEW
//
let myVariable_1 = 'Test_1';
console.log(myVariable_1);
//
myVariable_1  = 'New Test';
console.log(myVariable_1);
//
//
//
const maxLevels = 100;
console.log(maxLevels);
// As this is a const, I am not allowed to re-assign a new value to it, initially I'll get an IDE error in VSCode (a RED squiggly underline, then a compilation error running tsc...
//maxLevels = 99;
//
                //PS C:\grh\Courses\TypeScript-Course-1\Lecture_4> tsc
                //app.ts:33:1 - error TS2588: Cannot assign to 'maxLevels' because it is a constant.
                //
                //33 maxLevels = 99;
                //   ~~~~~~~~~
                //Found 1 error.PS C:\grh\Courses\TypeScript-Course-1\Lecture_4> tsc

*/
//
//
//
// BLOCK SCOPE.....
/*
var myVariable = 'Test';
console.log(myVariable);
//
function reset() {          //Inside the function context I've defined a NEW variable, it just happens to have the same name, it does NOT overwrite the value, it is a NEW variable. 
    let myVariable = null;
    console.log(`inside the function -> | ${myVariable}`);
}
//
reset();
console.log(`after the function call -> ${myVariable}`);
//
//
//  Messages for myVariable will come out as :- 
//      1 - Test (line 49)
//      2 - null (line 53)
//      3 - Test (line 58)
//
//  This is because effectively there are 2 variables called myVariable - one of which is defined inside the function 'reset' 
*/
//
//
//
//
//  ARROW FUNCTIONS..........ES6 feature !
/*
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
};
//
console.log(addNumbers(2, 3));
//
// Do not need the squiggly brackets AND the return keyword IF - ONLY RETURNING ONE THING !!!
        const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
// IS THE SAME AS :- 
//        const multiplyNumbers = (number1: number, number2: number) => {
//            return number1 * number2;
//        };
console.log(multiplyNumbers(5,5));
*/
//
//
//
//
// ARROW FUNCTION which dont need arguments......round brackets with NO arguments.
/*
const greet = () => {
    console.log('Hello everyone');
};
//
greet();
*/
//
//
//
// DEFAULT PARAMETERS...........
/*
const countdown = (start:number = 10) : void => {           // Default number of 10 
    while (start > 0) {
        // Decrement the counter....
        start--;
        console.log('Decrementing....', start);
    }
    // counter at 0, display a message...
    console.log('Done !', start);
};
//
countdown();                // Default parameter of 10 is used in this call...
countdown(20);              // 20 is used in this call....
*/
//
//
//
//
// THE REST and SPREAD OPERATOR.......
/*
// SPREAD OPERATOR....used in a FUNCTION call, it spreads out an array
const numbers = [1, 44, 65, -7];
console.log(Math.max(4, 6, 99, -6));
//
// Can not run the Math.max method on an array, it doens't work as it expects a list of numbers as per above. To use it on an array we use the SPREAD operator which is 3 dots ... 
//
console.log(Math.max(...numbers));
//
//
//
//REST OPERATOR - same as the SPREAD operator - its 3 dots ...    one makes an array if its not one (spread) the other takes an array and makes it a sort of list.
function makeArray(...args: number[]) {
    return args;
}
//
console.log(makeArray(1, 2, 3, 4));
*/
//
//
//
//
// DESTRUCTURING....        
/*
const myHobbies = ['Sport', 'cooking', 'tv'];
console.log(myHobbies[0], myHobbies[1]);
// 
// To now put these array elements into their own variables would be done like this :- 
const hobby1 = myHobbies[0];
const hobby2 = myHobbies[1]; 
const hobby3 = myHobbies[2];
//
// This would take a lot of code if say there was 100+ elements, ES6 and typescript has a much simpler way...
//
const [hobby1, hobby2, hobby3] = myHobbies;
console.log(hobby1, hobby2, hobby3);
*/
//
//
// DESTRUCTURING OBJECTS.....old way
/*
const userData = {
    userName: 'Greig',
    age: 47
};
//
    //const userName = userData.userName;
    //const age = userData.age;
    //console.log(userName, age);
//
//
//
// DESTRUCTURING OBJECTS......new way
//
const {userName, age} = userData;
//
console.log(userName, age);
//
// Whilst DESTRUCTURING an object, you can RENAME the parts like this (by using a : to rename the existing names....) 
//
const {userName: myRealName, age: myRealAge} = userData;
console.log(myRealName, myRealAge);
*/
//
//
//
//
// TEMPLATE LITERALS........a string but with imbedded variables. 
/*
const userName = 'Greig';
//
    //const greeting = 'Hello my name is ' + userName + '.';
    //console.log(greeting);
//
//
    //const greeting = `helllo i am ${userName}.`;
    //console.log(greeting);
//
//
// You can do the same as the code above, but also make it appear over multiple limes....
//
const newGreeting = `This will be the first output line,
I'll also do a second line,
now I'll tell you my name,
my name is ${userName}.
There you go....5 lines of output.
`;
//
console.log(newGreeting);
*/
//
//
//
// EXERCISE - Rewrite the below code as ES6 code using the above features.....
//
//
 //Exercise 1 - Maybe use an Arrow Function?
var double = function(value: number) {
    return value * 2;
};
console.log(double(10));

            var double1 = (value: number) => value * 2;
            console.log(double1(10));
//
//
//
// Exercise 2 - If only we could provide some default values...
var greet = function (name: string) {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
//greet();
//greet("Anna");
//
            var greet1 = (name: string = 'Greig') : void => {
                console.log('Hello my name is ' + name + '.');
            }
            //
            greet1();
            greet1('Fred');
//
//
//
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
//
            let numbers1 = [-3, 33, 38, 5];
            console.log(Math.min(...numbers1));
// 
// 
// 
//
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);
// 
            let newArray1 = [55, 63];
            newArray1.push(...numbers1);
            console.log(newArray1);
//      
//
// 
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);
//
            var [result11, result22, result33] = testResults;
            console.log(result11, result22, result33);

//
//
// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
//
            var {firstName: firstName1, experience: experience1} = scientist;
            console.log(firstName1, experience1);
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