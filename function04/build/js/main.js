"use strict";
// interface PostId = stringOrNumber
// LITERAL TYPES
let myName;
// myName="John"
let userName;
userName = 'Amy';
// FUNCTIONS
// const add1 = (a, b) => {
//     return a + b
// }
const add = (a, b) => {
    return a + b;
};
// const logMsg = (message: any) => {
//     console.log(message)
// }
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
// logMsg(add('a', 3)) not work a-string
const subtract = function (c, d) {
    return c - d;
};
// interface mathFunction { (c: number, d: number): number }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// OPTIONAL PARAMETERS
// const addAll = (a: number, b: number, c?: number): number => {
//     return a + b + c
// }
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 4));
logMsg(sumAll(2, 3));
// DEFAULT PAREMERETS
const sumAll1 = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll1(2, 3, 5));
logMsg(sumAll1(undefined, 3));
// not work
// logMsg(sumAll1(3))
// REST PARAMETERS
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
logMsg(total(1, 2, 3));
logMsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// NEVER
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
    }
};
// VOID
const infinite1 = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError('This should never happen!');
};
