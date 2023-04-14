"use strict";
let appId = "abc";
const button = document.querySelector("button");
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    console.log("Click!!!! " + message);
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "Hello World"));
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("click!!!");
});
const map = new Map();
//# sourceMappingURL=app.js.map