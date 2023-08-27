// ARRAY МАСИВИ
let stringArr = ['one', 'hey', 'Vitalii'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedDate = ['EVH', 1984, true];

stringArr[0] = 42
stringArr[0] = "42"
stringArr.push(22)
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')
guitars.unshift(true)

stringArr = guitars
guitars = stringArr
stringArr = guitars
guitars = mixedDate
mixedDate = guitars

let test = []
let bands: string[] = []
bands.push('Van Halen')

// TUPLE - КОРТЕЖ
let myTuple: [string, number, boolean] = ['Vitalii', 42, true]
let mixed = ['John', 1, false]

mixed = myTuple
myTuple = mixed
myTuple[3] = 42
myTuple[2] = 42
myTuple[1] = 42
myTuple[0] = "42"
myTuple[2] = false

// OBJECTS ОБЄКТИ
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Vitalii',
    prop2: true
}
exampleObj.prop2 = 42
exampleObj.prop2 = false
exampleObj.prop1 = 42
exampleObj.prop1 = 'John'

type Guitarist = {
    name: string,
    active?: boolean, //? робить не обовязковим undefined
    albums: (string | number)[],
}

let evh: Guitarist = {
    name: 'Eddy',
    active: false,
    albums: [1984, 5150, 'OU812']
}
let jp: Guitarist = {
    name: 'Jimmy',
    // active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp
evh.years = 40

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(jp)) // Hello Jimmy!

interface Guitarist1 {
    name: string,
    active?: boolean, //? робить не обовязковим undefined
    albums: (string | number)[],
}
let evf: Guitarist1 = {
    name: 'Eddy',
    active: false,
    albums: [1984, 5150, 'OU812']
}
let jf: Guitarist1 = {
    name: 'Jimmy',
    // active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist1 = (guitarist: Guitarist1) => {
    return `Hey ${guitarist.name}!`
}

console.log(greetGuitarist1(evf)) // Hey Eddy!


interface Guitarist2 {
    name?: string, //? робить не обовязковим undefined
    active: boolean,
    albums: (string | number)[],
}
let evg: Guitarist2 = {
    name: 'Nike',
    active: false,
    albums: [1984, 5150, 'OU812']
}
let jg: Guitarist2 = {
    // name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist2 = (guitarist: Guitarist2) => {
    // return `Hey ${guitarist.name.toUpperCase()}!` problem name?.
    return `Hey ${guitarist.name?.toUpperCase()}!`
}
const greetGuitarist3 = (guitarist: Guitarist2) => {
    if (guitarist.name) {
        return `Hey ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!'
}
console.log(greetGuitarist2(evg)) // Hey Nike!
console.log(greetGuitarist3(jg)) // Hey Jimmy! || Hello!

// ENUMS ПЕРЕЛІКИ
enum Grade {
    U = 1,
    D,
    C = 5,
    B,
    A,
}
console.log(Grade.U)
console.log(Grade.D)
console.log(Grade.C)
console.log(Grade.B)
console.log(Grade.A)













