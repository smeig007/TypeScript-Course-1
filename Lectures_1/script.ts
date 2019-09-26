/**/
/**/
/* This will fail........................
/*
function Greeter(greeting) {
	this.greeting = greeting;
}
//
Greeter.prototype.greet = function() {
	return "Hello, " + this.greeting;
}
// Ooops,we're passing an object when we want a string.
// "Hello, [object Object]" instead of "Hello world"
//
var greeter = new Greeter({message: "world"});
//
var button = document.createElement('button');
button.textContent = "Say Hello";
//
button.onclick = function() {
	alert(greeter.greet());
};
//
document.body.appendChild(button);
*/
/**/
/**/
/**/
/* Correct way.........  */
function Greeter(greeting) {
	this.greeting = greeting;
}
//
Greeter.prototype.greet = function() {
	return "Hello, " + this.greeting;
}
//
let greeter = new Greeter("world");
//
let button = document.createElement('button');
button.textContent = "Say Hello";
//
button.onclick = function() {
	alert(greeter.greet());
};
//
document.body.appendChild(button);