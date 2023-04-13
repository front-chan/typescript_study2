let userInput: unknown;
// let userInput: any; // 에러 해결
let userName: string;

userInput = 5;
userInput = "Max";

// userName = userInput; // 에러 발생

if (typeof userInput === "string") {
    userName = userInput; // 에러 발생
}
