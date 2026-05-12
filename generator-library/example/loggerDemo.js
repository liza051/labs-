import { log } from "../library/loggerDecorator.js";

// async function
const sum = log("INFO")(async (a, b) => {
    return a + b;
});

// sync function
const multiply = log("DEBUG")((a, b) => {
    return a * b;
});

// error test
const fail = log("ERROR")(async () => {
    throw new Error("Something went wrong");
});

// run demos
sum(2, 3).then(console.log);
multiply(4, 5);
fail().catch(() => {});