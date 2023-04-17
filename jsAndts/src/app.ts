const userName = "Chan";
// userName = "Tim"
let age = 15;

age = 29;

// function add(n1: number, n2: number) {
//     var result;
//     result = n1 + n2;
//     return result;
// }

// console.log(result);

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number) => {
//     return a + b;
// };

const add = (a: number, b: number = 1) => a + b;

console.log(add(5));

console.log(add(2, 5));

const printOutput: (a: string | number) => void = (output: string | number) =>
    console.log(output);

printOutput(add(5, 2));

const btn = document.querySelector("button");

if (btn) {
    btn.addEventListener("click", () => {});
    btn.addEventListener("click", (event) => console.log(event));
}
