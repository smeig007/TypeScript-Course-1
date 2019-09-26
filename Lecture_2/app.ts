/**/
console.log('It works..!');
/**/
/**/
/* DON'T FORGET TO RUN npm start FOR THIS PROJECT */
/**/
/* STRINGS..... */
                        let myName = 'Greig';
                        /* Then tried to do the following, we'd get a typescript error when we run 'tsc' at a terminal prompt) 
                        myName = 47;
                        /* like this  :- 
                        /*
                        PS C:\grh\Courses\TypeScript-Course-1\Lectures_6_to_999> tsc
                        app.ts:10:1 - error TS2322: Type '47' is not assignable to type 'string'.

                        10 myName = 47;
                        ~~~~~~
                        Found 1 error.
*/
/* NUMBERS.....   */
                        let myAge = 47;
                        /* Then tried to do the following, we'd get a typescript error when we run 'tsc' at a terminal prompt)
                        myAge = 'Greig';
                        /*
                        PS C:\grh\Courses\TypeScript-Course-1\Lectures_6_to_999> tsc
                        app.ts:22:1 - error TS2322: Type '"Greig"' is not assignable to type 'number'.

                        22 myAge = 'Greig';
                        ~~~~~
                        Found 1 error.
/**/
/*
/* BOOLEAN................ 
                        let hasHobbies = true;
                        /* Then tried to do the following, we'd get a typescript error when we run 'tsc' at a terminal prompt) 
                        hasHobbies = 1;
                        PS C:\grh\Courses\TypeScript-Course-1\Lectures_6_to_999> tsc
                        app.ts:36:1 - error TS2322: Type '1' is not assignable to type 'boolean'.

                        36 hasHobbies = 1;
                        ~~~~~~~~~~
                        Found 1 error.
/**/
/**/
/* ASSIGNING TYPES......... The following is a SPECIAL TYPE in TypeScript - it is a "TYPE ANY" (ie back in JavaScript world)   
                        let myRealAge;
                        myRealAge = 47;
                        myRealAge = '47'

                        PS C:\grh\Courses\TypeScript-Course-1\Lectures_6_to_999> tsc

                        *** NO ERRORS OCCURR ***
                        
                        However we can explititly assign a type when declaring the variable such as :-
                        let myRealAge: any;
                        let myRealAge: number;
                        let myRealAge: string;
/**/
/**/
/* ARRAYS......... 
                        let hobbies = ['Football', 'cricket'];
                        console.log(hobbies[0]);

                        However if I know try and assign a number into my array, the following happens :- 
                        hobbies = [177];

                        PS C:\grh\Courses\TypeScript-Course-1\Lectures_6_to_999> tsc
                        app.ts:65:12 - error TS2322: Type 'number' is not assignable to type 'string'.

                        65 hobbies = [177];

                        Found 1 error.


                        We can get round this by assigning a type on the declaration, then there's no errors :- 

                        let hobbies: any[] = ['Football', 'cricket'];
                        
                        hobbies = [177];
/**/
/**/
/* TUPLES..........(ARRAYS WITH MIXED TYPES AND LIMITED NUMBER OF ITEMS) - (sort of hard coding the elements to always be the same, 
                                                                            ie first element is always a string, 2nd element is always a number, and there will only ever be 2 elements.)

                        let MyAddress = ['The High Street', 7];                     /* So this would become :-  

                        let MyAddress:[string, number] = ['The High Street', 7];    /* which means i can not do the following :-  

                        let MyAddress = [11, 'The Big Long Road'];                  /* The order of the element types must match the declaration, "string" then "number" ! */
/**/
/**/
/* ENUMS.............. */
                        enum Color {
                            Red,
                            Blue,
                            Green
                        }

                        let myColor : Color = Color.Blue;
                        console.log(myColor);

                       /* In the console.log, the number 1 is displayed. Above is the default numbers assigned to 'elements'. However we can explicitly set a specific number to an 'element' :- 

                        enum Color {
                            Red = 0,
                            Blue = 100,
                            Green = 2
                        }

                        let myColor : Color = Color.Blue;
                        console.log(myColor);

                        Now in the console.log 100 appears.

                        HOWEVER if we declare with some default numbers and an explicit number :-

                        enum Color {
                            Red,
                            Blue = 100,
                            Green
                        }

                        let myColor : Color = Color.Green;
                        console.log(myColor);
/*
                        The console.log doesn't display 2 (which would appear to be its default), it displays 101 - this is the next number AFTER the 
                        explicit declaration, it'll increment on each element up to the next explicit number assignment!!!!!
                        Looking in the app.js file (when this code is uncommented and 'TSC' is run), the code looks likes this :-

                        var Color;

                        (function (Color) {
                            Color[Color["Red"] = 0] = "Red";
                            Color[Color["Blue"] = 100] = "Blue";
                            Color[Color["Green"] = 101] = "Green";
                        })(Color || (Color = {}));
                        var myColor = Color.Green;
                        
                        console.log(myColor);
/**/
/**/
/**/
/*  ANY type...........Be carful using this - as it removes all the strictness of TypeScript !!! 
                        
                        let car:any = 'BMW';
                        console.log(car);
                        car = {brand :'BMW', series: '3', Model: '335i'};
                        console.log(car);

                        I can assign and reassign different object to "car" as I've declared it as type 'any'.
/**/
/**/
/**/
/* FUNCTIONS which are using types.......... 

                        /* The 'string' refers to what the function (returnMyName) is going to return (myName) - and not the arguments being passed into the function. 

                        function returnMyName(): string {
                            return myName;
                        }
                        console.log(returnMyName());

                        /* So the following would cause an error as the RETURNing type is not a string its a number :- 

                        function returnMyName(): string {
                            return myAge;
                        }

                        pp.ts:168:5 - error TS2322: Type 'number' is not assignable to type 'string'.

                        168     return myAge;
                                ~~~~~~~~~~~~~
                        Found 1 error.

/**/
/**/
/*  VOID TYPES....... 
                        There is nothing being RETURNed by this function :- 

                        function sayHello() {
                            console.log('Hello...');
                        }

                        /* so it can also be declared as such :- 

                        function sayHello():void {
                            console.log('Hello...');
                        }

                        /* Meaning if we do then put a return statement in, we get an error :-  / 

                        function sayHello():void {
                            console.log('Hello...');
                            return myName;
                        }

                        PS C:\grh\Courses\TypeScript-Course-1\Lectures_6_to_999> tsc
                        app.ts:194:5 - error TS2322: Type 'string' is not assignable to type 'void'.

                        194     return myName;

                        Found 1 error.

/**/
/**/
/* ARGUMENT TYPES............ 
                        This example gives the following warning regarding the output type being declared (number), but no input types declared (so are ANY by default) :-  

                        function multiply(value1, value2): number {
                            return value1 * value2;
                        }
                        console.log(multiply(2, 7));
                        /*
                        PS C:\grh\Courses\TypeScript-Course-1\Lectures_6_to_999> tsc
                        app.ts:208:19 - error TS7006: Parameter 'value1' implicitly has an 'any' type.

                        208 function multiply(value1, value2): number {

                            app.ts:208:27 - error TS7006: Parameter 'value2' implicitly has an 'any' type.

                        208 function multiply(value1, value2): number {
                                                    ~~~~~~
                        Found 2 errors.

                        To fix this, we must declare the input types as well :-

                        function multiply(value1:number, value2:number): number {
                            return value1 * value2;
                        }
                        console.log(multiply(2, 7));
/**/
/**/
/* FUNCTIONS and TYPES............  

                        function multiply(value1:number, value2:number): number {
                            return value1 * value2;
                        }

                        function sayHello():void {
                            console.log('Hello...');
                        }

                        /* let myMultiply; */

                        /* That all works, but how to narrow down what the object can/cant do - this is a FUNCTION TYPE, its declaring what the object can do, you cant run it, its not a function 

                        let myMultiply: (val1: number, val2: number) => number;

                        myMultiply = multiply;
                        myMultiply();
                        console.log(myMultiply(5, 5));

                        myMultiply = sayHello;
                        myMultiply();

                        /* Assigning multiply to myMultiply will work as multiply has 2 input parameters (both numbers) and returns one item (again a number). 

                        /* However assinging sayHello to myMultiply gives an error, as it has no input parameter and returns none (It has a type of void), so :- 

                        PS C:\grh\Courses\TypeScript-Course-1\Lectures_6_to_999> tsc
                        app.ts:250:1 - error TS2554: Expected 2 arguments, but got 0.

                        250 myMultiply();
                            ~~~~~~~~~~~~

                        app.ts:247:18
                            247 let myMultiply: (val1: number, val2: number) => number;
                                                ~~~~~~~~~~~~
                            An argument for 'val1' was not provided.

                        app.ts:253:1 - error TS2322: Type '() => void' is not assignable to type '(val1: number, val2: number) => number'.
                        Type 'void' is not assignable to type 'number'.

                        253 myMultiply = sayHello;
                            ~~~~~~~~~~

                        app.ts:254:1 - error TS2554: Expected 2 arguments, but got 0.

                        254 myMultiply();
                            ~~~~~~~~~~~~

                        app.ts:247:18
                            247 let myMultiply: (val1: number, val2: number) => number;
                                                ~~~~~~~~~~~~
                            An argument for 'val1' was not provided.

                        Found 3 errors.
/**/
/**/
/* OBJECTS..............*/
                        /* This object (userData) has been turned into a type by typescript which has 2 values a string and a number, trying to make it an empty object as follows will fail */

                        let userData = {
                            name :'Greig',
                            Age : 47
                        };
                        /*
                        userData = {};

                        PS C:\grh\Courses\TypeScript-Course-1\Lectures_6_to_999> tsc
                        app.ts:298:1 - error TS2739: Type '{}' is missing the following properties from type '{ name: string; Age: number; }': name, Age

                        298 userData = {};

                        Found 1 error.


                        /***** A HUGE difference between function types and object types, whereas function types it does NOT matter about the namings (see above uses value1 and value2, then uses val1 and val2),
                        /***** it is more about the object type and the order of the types, for OBJECT TYPES it is VERY important, so by assigning new values to userData with different names will cause an error :- */
                        /*userData = {
                            a: 'Fred',
                            b: 23
                        };

                        PS C:\grh\Courses\TypeScript-Course-1\Lectures_6_to_999> tsc
                        app.ts:311:5 - error TS2322: Type '{ a: string; b: number; }' is not assignable to type '{ name: string; Age: number; }'.
                        Object literal may only specify known properties, and 'a' does not exist in type '{ name: string; Age: number; }'.

                        311     a: 'Fred',
                                ~~~~~~~~~
                        Found 1 error.

                        An alternative to this, is to explicitly declare the object type and order using another set of curly brackets {} - this is the TYPE DEFINITION
    
                        let userData: {name: string, age: number} = {
                            name :'Greig',
                            Age : 47
                        };

                        Assigning "key value pairs" we use a : instead of an = 
/**/
/**/
/* COMPLEX OBJECT example..............

                        /***** The object called 'complex' has two properties, 'data' and 'output'.

                        /***** data is declared as a number which is also an Array.
                        /***** output is a declared as a FUNCTION which has one property called 'all' (name isn't that important the type IS !) with a type of boolean. This function returns a number array.
                        
                        let complex: {data:number[], output:(all: boolean) => number[]} = {
                            data: [100, 3.99, 10],

                            output: function(all: boolean): number[] {
                                return this.data;
                            }
                        };
                        /**/
                        /**/
/* CREATING CUSTOM TYPES WITH TYPE ALIASES..........

                        /* Squiggly brackets to the RIGHT of the = is the object, to the left is the type declaration - UNLESS we're declaring a custom type using an alias where the command starts with 'type'

                        /* Same code as above, now set up a new type with an alias of 'Complex' using the 'type' command

                        type Complex = {data:number[], output:(all: boolean) => number[]} 

                        let complex2: Complex = {
                            data: [100, 3.99, 10],

                            output: function(all: boolean): number[] {
                                return this.data;
                            }
                        };
/**/
/**/
/* ALLOWING MULTIPLE TYPES WITH UNION TYPES.......*/

                        /* This is a way of allowing multiple types, say a STRING or (which is referred to as a single |) a NUMBER, 
                        /* but not allowing say a BOOLEAN value - Otherwise you'd need to use a type of ANY.
                        */
                        let myRealRealAge: number | string = 27;
                        myRealRealAge = "27";

/**/
/**/
/* HOW TO CHECK TYPES AT RUN TIME.......

                        let finalValue = "This is a string"                        ;
                        if (typeof finalValue == "string") {
                            console.log("Final value is a string....");
                        }
                                /*
                                OR
                                
                        let finalValueNumber = 77;
                        if (typeof finalValueNumber == 'number') {
                            console.log("Final value is a number....");
                        }
/**/
/**/
/* THE NEVER TYPE.......

                        Function (neverReturns) is NOT a void, as a void type doesn't return anything - this function never finishes, it never returns anything, it throws an error. It never returns.

                        function neverReturns(): never {
                            throw new Error("This is an error !");
                        }
/**/
/**/
/* NULLABLE TYPES..........

                        let canBeNull = 12;     /* Variable is declared and set to 12, type is a NUMBER because a number has been assigned to it.
                        canBeNull = null;       /* Can now set it to null if we wish. It will error when compiling...

                        let canAlsoBeNull;      /* Variable declared, but is currently undefined and is type of ANY 
                        canAlsoBeNull = null;   /* Can now set it to null if we wish. */

                        /* If something is null you can NOT access that property. So sometimes not allowing null is a good idea */

        // "strictNullChecks": true,              /* Enable strict null checks. */

                        /* This can be done (see line above) via a command in "tsconfig.json" file, the default is FALSE, you just need to set it to true then the above code will not work. 
                        /* You're not allowed to declare a variable with a type of number/string etc. then assign null to it. :- 

                        PS C:\grh\Courses\TypeScript-Course-1\Lectures_6_to_999> tsc
                        app.ts:405:1 - error TS2322: Type 'null' is not assignable to type 'number'.

                        405 canBeNull = null;       /* Can now set it to null if we wish. 
                            ~~~~~~~~~
                        Found 1 error.


                        NOTE - canAlsoBeNull doesn't give an error, this is because canAlsoBeNull is currently undefined - we've not assigned a value to it, just declared it. 


                        We can also get around this, by leaving the strictNullChecks left on (true) which will check all variables can not be null, 
                        then use a UNION TYPE to create and exception on this variable should we wish to....
*/
                        let canBeNull: number | null = 12;  /* Variable is declared and set to 12, type is explicitly set to a NUMBER or NULL. */
                        canBeNull = null;                   /* Can now set it to null if we wish. It will compile ok now. 

/**/
/**/
/* EXERCISE TIME........
/*
/* Existing Code...
                        let bankAccount = {
                            money: 2000,
                            deposit(value: number) {
                                this.money += value;
                            }
                        };

                        let myself = {
                            name: "Greig",
                            bankAccount: bankAccount,
                            hobbies : ['sports', 'cooking']
                        };

                        myself.bankAccount.deposit(3000);
                        /
                        console.log(myself);
                        /**/
                        /**/
                        /**/
                        /*
                        My new Code...

                        type myBankAccNo = {money: number, deposit:(value: number) => void};
                        /*
                        let bankAccount: myBankAccNo = {
                            money: 2000,
                            deposit(value: number) {
                                this.money += value;
                            }
                        };

                        let myself: {name: string, bankAccount: myBankAccNo, hobbies: string[]} = {
                            name: "Greig",
                            bankAccount: bankAccount,
                            hobbies : ['sports', 'cooking']
                        };
                        /*
                        myself.bankAccount.deposit(3000);
                        /*
                        console.log(myself);
/**/
/**/
/**/
/**/
/**/