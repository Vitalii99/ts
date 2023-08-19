"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific type
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// be careful!!! TS sees no problem - but a string is returned
let naxtVal = addOrConcat(2, 2, 'concat');
// 10 as string
10;
// THE DOM
const img = document.getElementById('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
// const img1 = document.querySelector('#myId')
img.src;
myImg.src;
nextImg.src;
const img1 = document.getElementById('img1');
const myImg1 = document.getElementById('#img1');
img.src;
myImg1.src;
