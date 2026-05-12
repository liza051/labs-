export class EventBus {

    constructor() {
        this.listeners = {};
    }

    on(event, cb) {

        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(cb);

        return () => this.off(event, cb);
    }

    off(event, cb) {

        if (!this.listeners[event]) return;

        this.listeners[event] =
            this.listeners[event].filter(fn => fn !== cb);
    }

    emit(event, data) {

        const handlers = this.listeners[event] || [];

        if (event === "error" && handlers.length === 0) {
            throw new Error("Unhandled error event");
        }

        handlers.forEach(handler => {

            try {
                handler(data);
            } catch (err) {
                console.error("Listener error:", err);
            }

        });
    }
}  