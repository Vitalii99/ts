// TYPE ALIASES ПСЕВДОНІМИ
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name: string,
    active: boolean,
    albums: (string | number)[],
}

type UserId = stringOrNumber

// interface PostId = stringOrNumber

// LITERAL TYPES
let myName: 'Vitalii'
// myName="John"

let userName: 'Vitalii' | 'John' | 'Amy'
userName = 'Amy'

// FUNCTIONS

// const add1 = (a, b) => {
//     return a + b
// }
const add = (a: number, b: number): number => {
    return a + b
}

// const logMsg = (message: any) => {
//     console.log(message)
// }
const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 3))
// logMsg(add('a', 3)) not work a-string

const subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (c: number, d: number) => number
// interface mathFunction { (c: number, d: number): number }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

// OPTIONAL PARAMETERS

// const addAll = (a: number, b: number, c?: number): number => {
//     return a + b + c
// }
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c
    }
    return a + b
}
const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3, 4))
logMsg(sumAll(2, 3))

// DEFAULT PAREMERETS
const sumAll1 = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(sumAll1(2, 3, 5))
logMsg(sumAll1(undefined, 3))
// not work
// logMsg(sumAll1(3))

// REST PARAMETERS
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1, 2, 3, 4))
logMsg(total(1, 2, 3))
logMsg(total(10, 2, 3))

const createError = (errMsg: 'string'): never => {
    throw new Error(errMsg)
}

// NEVER
const infinite = () => {
    let i: number = 1
    while (true) {
        i++
    }
}
// VOID
const infinite1 = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false
}

// use of the never type
const numberOrString = (value: number | string):
    string => {
    if (typeof value === "string") return "string";
    if (isNumber(value)) return "number";
    return createError('This should never happen!')
}






























