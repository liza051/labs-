export class EventBus {

    constructor() {
        this.listeners = {};
    }

    on(event, cb) {

        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(cb);
    }

    emit(event, data) {

        const handlers = this.listeners[event] || [];

        handlers.forEach(h => h(data));
    }
}