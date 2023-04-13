let userInput: unknown;
// let userInput: any; // 에러 해결
let userName: string;

userInput = 5;
userInput = "Max";

// userName = userInput; // 에러 발생

if (typeof userInput === "string") {
    userName = userInput; // 에러 발생
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    // while (true) {} // 무한 루프 생성
}

const result = generateError("An error occurred!", 500);
console.log(result);
