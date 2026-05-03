export async function* dataStream(limit) {

    for (let i = 1; i <= limit; i++) {

        await new Promise(resolve =>
            setTimeout(resolve,100)
        );

        yield i;
    }
}