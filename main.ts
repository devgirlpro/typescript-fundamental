export {};

let message = 'Hello from typescript';

console.log(message);

let x = 10;
const y = 12;

// let x = 13
x = 13;

//variable types
let inBeginner: boolean = true;
let total: number = 0;
let name: string = 'Lili';

let sentence: string = `my name is ${name} I am a beginner`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['chris', 22];

// let person1: [string, number] = ['chris', 22, 'Lili', 14]
// let person1: [string, number] = ['chris', 22, 11]
// let person1: [string, number] = [22, 'chris']

enum color {
  Red,
  Green,
  Blue,
}

let c: color = color.Green;
console.log('enume => ', c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Lili';

//multy type has inttelisens suport
let multyType: number | boolean;
multyType = 20;
multyType = true;

//type any has no inttelisens suport
let anyType: any;
anyType = 20;
anyType = 'someString';

//function in typeScript
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(5, 10);
// add(5, '10');

//function with optional parameter => add ? after that parameter
function addOptional(num1: number, num2?: number) {
  if (num2) {
    return num1 + num2;
  } else return num1;
}

const showThis = addOptional(4);
console.log('optional parameter => ', showThis);

//default parameter
//if we don't pass a value to a parameter that has difault value,
//then the default value will be replaced

function addDefault(num1: number, num2: number = 10) {
  return num1 * num2;
}

addDefault(8);
console.log('default Value is replaced => ', addDefault(8));

//interface
//specify an object as a type in typeScript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function fullName(person: Person) {
  console.log(
    `i am ${person.firstName} ${person.lastName} ${person.age} years old`
  );
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  age: 42,
};

fullName(p);
