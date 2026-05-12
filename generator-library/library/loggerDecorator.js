export function log(level = "INFO") {

    return function (fn) {

        return async function (...args) {

            const time = new Date().toISOString();

            try {

                const result = await fn(...args);

              if (level !== "ERROR") {
                    console.log(`[${level}] ${time}`, {
                    args,
                    result
                });
            }

                return result;

            } catch (err) {

                console.error(`[ERROR] ${time}`, {
                    args,
                    error: err.message
                });

                throw err;
            }
        };
    };
    
}