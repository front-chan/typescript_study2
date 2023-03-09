// 매개변수 이름 다음에 타입 이름 작성
// function add(n1, n2) {
function add(n1, n2) {
    // console.log(typeof number1);
    // TypeScript 사용을 피하고 있는 코드
    // if (typeof n1 === 'number' && typeof n2 === 'number') {
    //     return n1 + n2;
    // }
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Incorrect input!");
    // }
    return n1 + n2;
}
var number1 = 5;
// const number1 = "5"; // 52.8 출력
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
