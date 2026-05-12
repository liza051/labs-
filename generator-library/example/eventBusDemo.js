import { EventBus } from "../library/eventBus.js";

const bus = new EventBus();


const unsubA = bus.on("message", (data) => {
    console.log("A:", data);
});


bus.on("message", (data) => {
    console.log("B:", data);
});


bus.on("message", (data) => {
    if (data === "error") {
        throw new Error("Listener C failed");
    }
    console.log("C:", data);
});


bus.emit("message", "hello");


bus.emit("message", "error");


unsubA();


bus.emit("message", "after unsubscribe");