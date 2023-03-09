// 매개변수 이름 다음에 타입 이름 작성
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Incorrect input!");
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
