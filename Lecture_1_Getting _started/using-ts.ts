//
//
//
const button = document.querySelector("button");
//
// Old, original code...
//const input1 = document.getElementById("num1");
//const input2 = document.getElementById("num2");
//
//  Same as above, but if I add an exclamation mark, it tells TYPESCRIPT it will always contain a value, i.e. it will never be null...
//      const input2 = document.getElementById("num2")!;
//
//  Also I can let TYPESCRIPT know it is an input element by saying :- 
//      const input2 = document.getElementById("num2")! as HTMLInputElement;
//
// Note - These only work in a Typescript and will not work in Javascript....
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
//
//
//
//
// IMPORTANT - when you access a value in typescript it is ALWAYS ALWAYS ALWAYS a string !!!!!
//
function add(num1, num2) {
  // Here we are adding two strings together. In javascript adding two strings together actually concatenates them ! 
  //  so '2' + '2' = '22' and not 4 - this is concatenating two strings not adding them.
  return num1 + num2;
}
//
// IMPORTANT - when you access a value in typescript it is ALWAYS ALWAYS ALWAYS a string !!!!!
//
button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});
//