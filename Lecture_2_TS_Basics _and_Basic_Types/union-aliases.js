"use strict";
//
function combine(input1, input2, 
// A combination of 'literal type' and a 'union type'...
resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
//
var combinedAges = combine(22, 55, 'as-number');
console.log(combinedAges);
//
var combinedStringAges = combine('22', '55', 'as-number');
console.log(combinedStringAges);
//
var combinedNames = combine('fred ', 'bob', 'as-string');
console.log(combinedNames);
//
