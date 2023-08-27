"use strict";
// ARRAY МАСИВИ
let stringArr = ['one', 'hey', 'Vitalii'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedDate = ['EVH', 1984, true];
stringArr[0] = 42;
stringArr[0] = "42";
stringArr.push(22);
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars.unshift(true);
stringArr = guitars;
guitars = stringArr;
stringArr = guitars;
guitars = mixedDate;
mixedDate = guitars;
let test = [];
let bands = [];
bands.push('Van Halen');
// TUPLE - КОРТЕЖ
let myTuple = ['Vitalii', 42, true];
let mixed = ['John', 1, false];
mixed = myTuple;
myTuple = mixed;
myTuple[3] = 42;
myTuple[2] = 42;
myTuple[1] = 42;
myTuple[0] = "42";
myTuple[2] = false;
// OBJECTS ОБЄКТИ
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Vitalii',
    prop2: true
};
exampleObj.prop2 = 42;
exampleObj.prop2 = false;
exampleObj.prop1 = 42;
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddy',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    // active: true,
    albums: ['I', 'II', 'IV']
};
evh = jp;
evh.years = 40;
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp)); // Hello Jimmy!
let evf = {
    name: 'Eddy',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jf = {
    name: 'Jimmy',
    // active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist1 = (guitarist) => {
    return `Hey ${guitarist.name}!`;
};
console.log(greetGuitarist1(evf)); // Hey Eddy!
let evg = {
    name: 'Nike',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jg = {
    // name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist2 = (guitarist) => {
    var _a;
    // return `Hey ${guitarist.name.toUpperCase()}!` problem name?.
    return `Hey ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
};
const greetGuitarist3 = (guitarist) => {
    if (guitarist.name) {
        return `Hey ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist2(evg)); // Hey Nike!
console.log(greetGuitarist3(jg)); // Hey Jimmy! || Hello!
// ENUMS ПЕРЕЛІКИ
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 5] = "C";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["A"] = 7] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.D);
console.log(Grade.C);
console.log(Grade.B);
console.log(Grade.A);
