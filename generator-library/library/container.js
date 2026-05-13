export class Container {

    constructor() {
        this.services = {};
    }

    register(name, service) {
        this.services[name] = service;
    }

    resolve(name) {
        return this.services[name];
    }
}