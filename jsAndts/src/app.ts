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

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(5));

// console.log(add(2, 5));

// const printOutput: (a: string | number) => void = (output: string | number) =>
//     console.log(output);

// printOutput(add(5, 2));

// const btn = document.querySelector("button");

// if (btn) {
//     btn.addEventListener("click", () => {});
//     btn.addEventListener("click", (event) => console.log(event));
// }

const hobbies = ["Sports", "Cooking"];

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// const [hobby1, hobby2] = hobbies;

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies[0]);

const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies);

activeHobbies.push(hobbies[0], hobbies[1]);

activeHobbies.push(...hobbies);

const person = {
    firstName: "Chan",
    ageAge: 30,
};

// const { firstName, ageAge } = person;
const { firstName: fullName, ageAge } = person;

console.log(fullName, ageAge);

// console.log(fullName, ageAge, firstName)

// const copiedPerson = person;

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
    // 이렇게 사용할 경우 4번째 인수를 제거해야 한다
    // const add = (...numbers: [number, number, number]) => {
    return numbers.reduce((total, curValue) => {
        return total + curValue;
    }, 0);
};

const addedNum = add(5, 10, 2, 3.7);
console.log(addedNum);
