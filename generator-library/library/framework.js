import { EventBus } from "./eventBus.js";
import { memoize } from "./memoize.js";
import { Container } from "./container.js";

export class Framework {

    constructor() {

        this.events = new EventBus();
        this.container = new Container();
    }

    on(event, cb) {
        return this.events.on(event, cb);
    }

    emit(event, data) {
        this.events.emit(event, data);
    }

    memoize(fn, options) {
        return memoize(fn, options);
    }

    register(name, service) {
        this.container.register(name, service);
    }

    resolve(name) {
        return this.container.resolve(name);
    }
}