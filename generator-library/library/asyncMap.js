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