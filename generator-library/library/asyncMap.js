export function asyncMapCallback(array, asyncCallback, done) {

    const result = [];
    let completed = 0;
    let hasError = false;

    array.forEach((item, index) => {

        asyncCallback(item, (err, value) => {

            if (hasError) {
                return;
            }

            if (err) {

                hasError = true;

                return done(err, null);
            }

            result[index] = value;

            completed++;
            
            if (completed === array.length) {

                done(null, result);
            }
        });

    });
}

export function asyncMapPromise(array, asyncFunction) {

    return Promise.all(

        array.map(async (item) => {

            return await asyncFunction(item);

        })
    );
}
export function asyncMapAbortable(array, asyncFunction, signal) {

    return new Promise((resolve, reject) => {

        const result = [];
        let aborted = false;

        const abortHandler = () => {

            aborted = true;

            signal.removeEventListener("abort", abortHandler);

            reject(new Error("Operation aborted"));
        };

        signal.addEventListener("abort", abortHandler);

        async function processItems() {

            try {

                for (const item of array) {

                    if (aborted || signal.aborted) {
                        return;
                    }

                    const value = await asyncFunction(item);

                    result.push(value);
                }

                signal.removeEventListener("abort", abortHandler);

                resolve(result);

            } catch (error) {

                signal.removeEventListener("abort", abortHandler);

                reject(error);
            }
        }

        processItems();
    });
}