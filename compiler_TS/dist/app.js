"use strict";
const button = document.querySelector("button");
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
