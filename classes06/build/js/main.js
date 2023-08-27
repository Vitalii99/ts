"use strict";
// class Coder {
//     name: string
//     music: string
//     age: number
//     lang: string
//     constructor(
//         name: string,
//         music: string,
//         age: number,
//         lang: string
//     ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }
// МОДИФІКАТОРИ ВИДИМОСТІ
class Coder1 {
    // не ініціалізуєм одразу утримуватися від цього початківцям
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello i'm ${this.age}`;
    }
}
// const Vitalii = new Coder1("Vitalii", "Rock", 47, "Typescript")
const Vitalii = new Coder1("Vitalii", "Rock", 47);
console.log(Vitalii.getAge());
// console.log(Vitalii.age)
// console.log(Vitalii.lang)
class WebDev extends Coder1 {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 33);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
//////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);
//////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Youngs", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
// MyBands.data="Van Halen" not array
MyBands.data = ["Van Halen", 5150];
console.log(MyBands.data);
