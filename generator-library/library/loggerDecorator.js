export function log(level = "INFO") {

    return function (fn) {

        return function (...args) {

            console.log(`[${level}]`, args);

            return fn(...args);
        };
    };
}