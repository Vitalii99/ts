let myName: string = "Vitalii"
let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let album1: string | number | boolean;

myName = 'John'
meaningOfLife = 42
isLoading = true
album = 'Van Halen'
album = 1984
album1 = 1984
album1 = "1984"
album1 = true

const sum = (a, b) => {
    return a + b
}
const sum1 = (a:number, b:number) => {
    return a + b
}
const sum2 = (a:number, b:string) => {
    return a + b
}

let postId: string | number;
let isActive: number | boolean;

let regExpr = /\w+/g
let regExpr1: RegExp = /\w+/g