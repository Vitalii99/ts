type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific type
let c = a as Three // more specific

let d = <One>"world"
let e = <string | number>"world"

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}
let myVal: string = addOrConcat(2, 2, 'concat') as string
// be careful!!! TS sees no problem - but a string is returned
let naxtVal: number = addOrConcat(2, 2, 'concat') as number

// 10 as string
(10 as unknown) as string

// THE DOM

const img = document.getElementById('img') as HTMLImageElement
const myImg = document.getElementById('#img')! as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

// const img1 = document.querySelector('#myId')

img.src
myImg.src
nextImg.src


const img1 = document.getElementById('img1')!
const myImg1 = document.getElementById('#img1') as HTMLImageElement
img.src
myImg1.src
