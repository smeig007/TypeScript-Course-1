//
// OBJECT TYPES....
//
/* one way to define "person"
const person = {
    name: 'Bob',
    age: 44;
};
*/
/*
// Another way...this time showing, not inferring, the 'person' is of type OBJECT, also explicitly giving TYPES name and age. It is NOT ideal, best let Typescript handle it.
//
// const person: {
//      name: string;
//      age: number;
//  } = {
//      name: 'Bob',
//      age: 44
//  };
//
const person = {
  name: 'Bob',
  age: 44
};
//
console.log(person);
*/
//
//
//
//
// ARRAYS TYPES.............
/*
const person = {
  name: 'Bob',
  age: 44,
  hobbies: ['Sports', 'Cooking', 'Reading']
};
//
let favouriteActivities: string[];
favouriteActivities = ['walking']
//
console.log(person);
console.log(favouriteActivities);
//
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
*/
//
//
//
//
//
// WORKING WITH TUPLES..............
/*
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //Tuple, will only ever be 2 elements, 1st elements is a number, 2nd element is a string
} = {
  name: 'Bob',
  age: 44,
  hobbies: ['Sports', 'Cooking', 'Reading'],
  role: [2, 'Author'] //Tuple, will only ever be 2 elements, it accepts both strings and numbers
};
//
//person.role.push('Admin');
//person.role[1] = 10;
//
person.role = [0, 'admin', 'user']  // Typescript error...when uncommented. Will still compile
//
console.log(person);
*/
//
//
//
//
//
// WORKING WITH ENUMS..............
//
// ENUMS usually start with a capital letter...
//
//  enum Roles { ADMIN, READ_ONLY, AUTHOR }; // behind the scenes they're all assigned a number, starting at 0 - this is the DEFAULT !!
//                  0,       1,       2      // behind the scenes they're all assigned a number, starting at 0, like an array does.   
//
// I do not HAVE to start at 0, i can start at any number...the following are then increment automatically.
//  enum Roles { ADMIN = 7, READ_ONLY, AUTHOR };  // behind the scenes they're all assigned a number
//                  7,         8,        9        // behind the scenes they're all assigned a number
/*
// I can also set them manually...
enum Roles { ADMIN = 7, READ_ONLY = 22, AUTHOR = 144 };  // Number is manually assigned.
//              7,          22,            144           // Number is manually assigned.
//
const person = {
  name: 'Bob',
  age: 44,
  hobbies: ['Sports', 'Cooking', 'Reading'],
  role: Roles.ADMIN
};
//
if (person.role === Roles.ADMIN) {
    console.log('Is Admin');
}
*/
//
//
//
//
//
// THE 'ANY' TYPE.....................basically put whatever you like in there. Avoid if you can ! 
/*
const person = {
  name: 'Bob',
  age: 44,
  hobbies: ['Sports', 'Cooking', 'Reading']
};
//
let favouriteActivities: any[];
favouriteActivities = ['walking', 5, '5']
//
console.log(favouriteActivities);
*/