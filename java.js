//js sucks
const favNum = 74;
//terrible, use actual data types
let age = 14;
age = false;
age = "Kartoffelsalat";
const result = favNum + age;
console.log(age);

const output = document.getElementById("ouput-div");
output.innerHTML = `<span>dummy</span>${favNum} + ${age} = ${result}`; //interpolieren?

console.log(2 * "4");