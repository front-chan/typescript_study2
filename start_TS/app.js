function add(n1, n2) {
    return n1 + n2;
}
// function add(n1:number, n2: number): string {
//     return n1.toString() + n2.toString();
// }
function printResult(num) {
    // function printResult(num: number): void {
    console.log("Result: " + num);
}
// function printResult(num: number):undefined {
//     console.log("Result: " + num);
//     return;
// }
printResult(add(5, 12));
// let combineValues: Function;
// let combineValues: () => number;
var combineValues;
combineValues = add;
// combineValues = 5;
// combineValues = printResult;
console.log(combineValues(8, 8));
// undefined 출력
// console.log(printResult(add(5, 12)));
