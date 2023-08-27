"use strict";
// INDEX SIGNATURES 
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // Vitalii: 47
};
console.log(todayTransactions.Pizza);
console.log(todayTransactions["Pizza"]);
let prop = 'Pizza';
console.log(todayTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
// todayTransactions.Pizza = 40
console.log(todayTransactions["Vitalii"]);
const student = {
    name: "Vitalii",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
const montlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustel: 250,
};
for (const revenue in montlyIncomes) {
    console.log(montlyIncomes[revenue]);
}
