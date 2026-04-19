export function asyncMapCallback(array, asyncCallback, done) {

    const result = [];
    let completed = 0;

    array.forEach((item, index) => {

        asyncCallback(item, (value) => {

            result[index] = value;

            completed++;

            if (completed === array.length) {
                done(result);
            }
        });

    });
}