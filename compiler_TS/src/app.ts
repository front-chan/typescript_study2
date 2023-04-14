let appId = "abc";

const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}

// function clickHandler() {
//     console.log("Click!!!!");
// }

// function clickHandler(message: string, age: number) {
//     // let userName = "Chan";
//     console.log("Click!!!! " + message);
// }

function clickHandler(message: string) {
    // let userName = "Chan";
    console.log("Click!!!! " + message);
}

if (button) {
    button.addEventListener("click", clickHandler.bind(null, "Hello World"));
    // button.addEventListener("click", clickHandler.bind(null, "Hello World", 30));
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
