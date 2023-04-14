const button = document.querySelector("button")!;

// function clickHandler() {
//     console.log("Click!!!!");
// }

function clickHandler(message: string) {
    console.log("Click!!!! " + message);
}

if (button) {
    button.addEventListener("click", clickHandler.bind(null, "Hello World"));
}

// if (button) {
//     button.addEventListener("click",() => {
//         console.log('Click!!!!');
//     });
// }

button?.addEventListener("click", () => {
    console.log("click!!!");
});

const map = new Map();
