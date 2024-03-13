"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello from typescript';
console.log(message);
var x = 10;
var y = 12;
// let x = 13
x = 13;
//variable types
var inBeginner = true;
var total = 0;
var name = 'Lili';
var sentence = "my name is ".concat(name, " I am a beginner");
console.log(sentence);
var n = null;
var u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['chris', 22];
// let person1: [string, number] = ['chris', 22, 'Lili', 14]
// let person1: [string, number] = ['chris', 22, 11]
// let person1: [string, number] = [22, 'chris']
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
var c = color.Green;
console.log('enume => ', c);
var randomValue = 10;
randomValue = true;
randomValue = 'Lili';
//multy type has inttelisens suport
var multyType;
multyType = 20;
multyType = true;
//type any has no inttelisens suport
var anyType;
anyType = 20;
anyType = 'someString';
//function in typeScript
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5, '10');
//function with optional parameter => add ? after that parameter
function addOptional(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else
        return num1;
}
var showThis = addOptional(4);
console.log('optional parameter => ', showThis);
//default parameter
//if we don't pass a value to a parameter that has difault value,
//then the default value will be replaced
function addDefault(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 * num2;
}
addDefault(8);
console.log('default Value is replaced => ', addDefault(8));
function fullName(person) {
    console.log("i am ".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.age, " years old"));
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    age: 42,
};
fullName(p);
