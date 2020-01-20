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
// UNION TYPES..................
/*
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
  return result;
}
//
const combinedAges = combine(22, 55);
console.log(combinedAges);
//
const combinedNames = combine('fred ', 'bob');
console.log(combinedNames);
*/
//
//
//
//
//
//
// LITERAL TYPES............
//
// One way of writing the code.....
/* function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // We've checked the input type, this formats the returning type...
  if (resultConversion === 'as-number') {
    // Putting a + in front of the returning variable means return it as a NUMBER...
    return +result;
  } else {
    return result.toString();
  }
}
*/
//
/*
// Second way of writing the function......
function combine(
  input1: number | string,
  input2: number | string,
  // A combination of 'literal type' and a 'union type'...
  resultConversion: 'as-number' | 'as-string'
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
    return result;
  // // We've checked the input type, this formats the returning type...
  //if (resultConversion === 'as-number') {
  //  // Putting a + in front of the returning variable means return it as a NUMBER...
  //  return +result;
  //} else {
  // return result.toString();
  //} 
}
//
const combinedAges = combine(22, 55, 'as-number');
console.log(combinedAges);
//
const combinedStringAges = combine('22', '55', 'as-number');
console.log(combinedStringAges);
//
const combinedNames = combine('fred ', 'bob', 'as-string');
console.log(combinedNames);
*/
//
//
//
//
//
//
//
//
// TYPE ALIASES or CUSTOM TYPES.......
//
// Create 2 custom types...
type combinableType = number | string;
type customDescriptor = 'as-number' | 'as-string';
//
function combine(
  input1: combinableType,
  input2: combinableType,
  // A combination of 'literal type' and a 'union type'...
  resultConversion: customDescriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
//
const combinedAges = combine(22, 55, 'as-number');
console.log(combinedAges);
//
const combinedStringAges = combine('22', '55', 'as-number');
console.log(combinedStringAges);
//
const combinedNames = combine('fred ', 'bob', 'as-string');
console.log(combinedNames);
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
