import {
    asyncMapCallback,
    asyncMapPromise,
    asyncMapAbortable
} from "../library/asyncMap.js";

const numbers = [1,2,3,4];

asyncMapCallback(

    numbers,

    (num, callback) => {

        setTimeout(() => {

            callback(null, num * 2);

        },500);

    },

    (err, result) => {

        if (err) {
            return console.error(err);
        }

        console.log("Callback result:", result);
    }
);

async function runPromiseExample() {

    const result = await asyncMapPromise(

        numbers,

        async (num) => num * 3
    );

    console.log("Promise result:", result);
}

runPromiseExample();

const controller = new AbortController();

asyncMapAbortable(

    numbers,

    async (num) => {

        return new Promise((resolve) => {

            setTimeout(() => {

                resolve(num * 4);

            },500);
        });
    },

    controller.signal

)
.then(result => console.log("Abortable result:", result))
.catch(error => console.error(error.message));

setTimeout(() => {

    controller.abort();

},1000);