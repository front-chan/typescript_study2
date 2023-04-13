var userInput;
// let userInput: any; // 에러 해결
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput; // 에러 발생
if (typeof userInput === "string") {
    userName = userInput; // 에러 발생
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {} // 무한 루프 생성
}
var result = generateError("An error occurred!", 500);
console.log(result);
