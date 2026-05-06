export async function* dataStream(limit) {

    for (let i = 1; i <= limit; i++) {

        await new Promise(resolve =>
            setTimeout(resolve,100)
        );

        if (i === 7) {

            throw new Error("Stream processing error");
        }

        yield i;
    }
}

export async function processStream(stream) {

    try {

        for await (const item of stream) {

            console.log("Processing:", item);
        }

    } catch (error) {

        throw error;
    }
}