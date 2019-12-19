"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// CLASSES......Child classes inherit everything EXCEPT PRIVATE.
/*
class Person {
    name: string;
    // public name: string;
    // Are both the same, public is the default (private is another option but has to be specified)
    private type: string;
    protected age: number;
    //
    constructor(name: string,  public userName1: string) {
        this.name = name;   // this.name refers to the property of the class (line 15)
                            // name refers to the argument passed to the constructor (line 21)
        this.type = 'noIdea';
        this.age = 47;
        }
            //
            // A short cut version of the above :-
            //    class anotherPerson {
            //        private type1: string;
            //        protected age1: number;
            //        // protected userName1: string; -- I do NOT need to add this code as I've put it in the constructor !!!
            //        //
            //        constructor(public name1: string, protected userName1: string) {
            //            // Both name1 and userName1 have been defined in the constructor part, I do NOT need to define them in the class, it's implied also i do not need t
            //            // use the THIS. notation, that's also implied.
            //        }
            //    }
}
//
// Now instanciate it - ie calling it. The constructor expects 2 arguments, name and userName....
const person = new Person('Greig', 'greig');
console.log(person);
*/
//
//
//
//
// CLASS METHODS and ACCESS MODIFIERS........Child classes inherit everything EXCEPT PRIVATE (in this example setType).
/*
class Person {
    name            : string;
    private type    : string;
    protected age   : number = 47;
    //
    constructor(name: string,  public userName1: string) {
        this.name = name;  // 'this.name' refers to the property of the class (line 15)....'name' refers to the argument passed to the constructor (line 21)
        this.type = 'noIdea';
        }
    // Add a method...
    printAge() {
        console.log(this.age);   // I can access the (protected) age as I'm inside the class (or object).
        this.setType('old git');    // I can only call setType from within the class now as I've made it private (could also be protected).
    }
    // If I make this method private (or protected) I can not call it from out side of the class....say on lie 80, I have to call it from within the class, say in printAge.....
    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}
*/
/*
// Now instantiate it - ie calling it. The constructor expects 2 arguments, name and userName....
const person = new Person('Greig', 'greig');
console.log(person);
//
person.printAge();
// person.setType('legend');       // This now won't work as I've defined setType as a private method.
*/
//
/*
// INHERITANCE....
//
        // class Greig extends Person {
        //    name: "Greig";
        // }
//
        //const greig = new Greig("beckie", 'greig'); // must pass 2 arguments as the constructor in Person expects that (it'll fall over otherwise) - BUT "beckie" gets
                                                    // overwritten by "Greig" as the class "Greig" EXTENDS the class "Person" and OVERWRITES the name
        //console.log(greig);
//
//
*/
// INHERITANCE and CONSTRUCTORS..........
/*
            //class Greig extends Person {
            //   constructor(userName1: string) {
            //      super("GReig", userName1);
            //   }
            //}
            //
            //const greig = new Greig('greig');
            //console.log(greig);
*/
//
//
//// INHERITANCE WRAP-UP......"PRIVATE" does NOT get inherited ! It stays in the SUPER CLASS or PARENT CLASS....
//
/*
class Greig extends Person {
    constructor(userName1: string) {
        super("GREIG", userName1);
        this.age = 33;
                //console.log(this.type);         // I can NOT access "TYPE" as it is PRIVATE and only available from inside PERSON, NO child classes can access it.
                        //PS C:\grh\Courses\TypeScript-Course-1\Lecture_5_Classes> tsc
                        //app.ts:116:26 - error TS2341: Property 'type' is private and only accessible within class 'Person'.
                        //
                        //    console.log(this.type);         // I can NOT access "TYPE" as it is PRIVATE and only available from inside PERSON, NO child classes can access it.
                        //
                        //Found 1 error.
    }
 }
 //
 const greig = new Greig('greig');
 console.log(greig);
*/
//
//
//
//
//
// GETTERS and SETTERS...........
//
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default1";
    }
    Object.defineProperty(Plant.prototype, "species", {
        //
        get: function () {
            return this._species;
        },
        //
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default2";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
//
var plant = new Plant();
console.log(plant.species);
//
plant.species = 'GH';
console.log(plant.species);
//
plant.species = 'GReen Plant';
console.log(plant.species);
//
//
//
//
//
// STATIC PROPERTIES and METHODS............
//
//class Helpers {
//    PI : number = 3.14;
//}
// I can not call the variable PI without 1st instantiating it, which i don't want to do. Also the following wont work :- 
//console.log(2 * Helpers.PI);
//
//PS C:\grh\Courses\TypeScript-Course-1\Lecture_5_Classes> tsc
//app.ts:172:25 - error TS2339: Property 'PI' does not exist on type 'typeof Helpers'.
//
//172 console.log(2 * Helpers.PI);
//                            ~~
//Found 1 error.
//  The console.log in the browser (F12) returns a NaN.........
//
//
// By putting the 'static' keyword means you can always use ths property (PI) to without having to instantiate the class (Helpers).
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI_1 * diameter;
    };
    Helpers.PI_1 = 3.14;
    return Helpers;
}());
//  
console.log(2 * Helpers.PI_1);
console.log(Helpers.calcCircumference(4));
//  
//  
//  
//  
//  
// 
// ABSTRACT CLASSES...... 
//  
// These can NOT be instantiated directly ! You HAVE to inherit from them, ALWAYS ! 
//  
// ABSTRACT on a CLASS means this class needs to be EXTENDED....
//
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 10000;
    }
    //
    //      ABSTRACT on a METHOD MEANS once we've extended this CLASS we need to implement a 'changeName' method, we are required to do so - BUT we will 
    //      have to write the logic which is to be executed by the 'changeName' method in the CHILD CLASS. The parent CLASS is PROJECT.
    //
    Project.prototype.calcBudget = function () {
        this.budget * 2;
    };
    return Project;
}());
//  
// As 'Project' is an ABSTRACT class we need to extend it. Create a child class based on 'Project'....  
//  
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
// 'Project is an abstract class, so trying to instantiate it (create a new instance of it) WILL cause an error...
//
//let newProject = new Project();
//
//PS C:\grh\Courses\TypeScript-Course-1\Lecture_5_Classes> tsc
//app.ts:227:18 - error TS2511: Cannot create an instance of an abstract class.
//
//227 let newProject = new Project();
//                    ~~~~~~~~~~~~
//Found 1 error.
//
var newProject = new ITProject();
console.log(newProject);
//
newProject.changeName('GRH IT Project');
console.log(newProject);
//  
//  
//  
//  
//  
//  
//  
// PRIVATE CONSTRUCTORS (in Typescript 2.0)........
//  
var OnlyOne = /** @class */ (function () {
    //
    function OnlyOne(name) {
        this.name = name;
    }
    ;
    //
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('the only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//  
//let wrong = new OnlyOne('My only one');
//  
//  
//  
//  
//  
//  
// READ ONLY PROPERTIES.... 
//  
//  
var OnlyOne1 = /** @class */ (function () {
    //
    function OnlyOne1(name) {
        this.name = name;
    }
    ;
    //
    OnlyOne1.getInstance = function () {
        if (!OnlyOne1.instance) {
            OnlyOne1.instance = new OnlyOne1('the only one');
        }
        return OnlyOne1.instance;
    };
    return OnlyOne1;
}());
//  
var right = OnlyOne1.getInstance();
console.log(right.name);
//  
right.name = 'another only one';
console.log(right.name);
//  
//  
//  
//  
//  
//  
//  
// EXERCISE - Rewrite the below code using Typescript and Class Features.....
//  
// Exercise 1 - How was your TypeScript Class?
/* This is a basic JavaScript constructor function...
function Car(name) {
    this.name = name;
    this.acceleration = 0;
 
    this.honk = function() {
        console.log("Toooooooooot!");
    };
 
    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
*/
//
// Exercise 1 - new code.......using a class...
// 
var Car1 = /** @class */ (function () {
    //
    function Car1(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car1.prototype.honk = function () {
        console.log("honk honk honk....");
    };
    Car1.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car1;
}());
//
var car1 = new Car1('BMW');
car1.honk();
console.log(car1.acceleration);
car1.accelerate(15);
console.log(car1.acceleration);
//
//
/* Exercise 2 - Two objects, based on each other ...
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
//
console.log(rectangle.calcSize());
*/
// 
// 
// 
// New code using INHERITANCE........
//
var BaseObject1 = /** @class */ (function () {
    function BaseObject1() {
        this.width1 = 0;
        this.length1 = 0;
    }
    return BaseObject1;
}());
//
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width1 * this.length1;
    };
    return Rectangle;
}(BaseObject1));
//
var rectangle = new Rectangle();
rectangle.width1 = 5;
rectangle.length1 = 5;
console.log(rectangle.calcSize());
// 
// 
// 
// 
/*
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
*/
//  
//  
//  
// New code - GETTERS and SETTERS....
//  
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        //
        get: function () {
            return this._firstName;
        },
        //
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "bum";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
//  
var person = new Person();
console.log(person.firstName);
//
person.firstName = 'Gr';
console.log(person.firstName);
//
person.firstName = 'Greig';
console.log(person.firstName);
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
