export function memoize(fn, options ={}) {
    const cache = new Map();
    
    const maxSize = options.maxSize || Infinity;

    const ttl = options.ttl || null

    return function (...args) {

        const key = JSON.stringify(args);

        const now = Date.now();

        if (cache.has(key)) {
            const entry = cache.get(key);

            if (!ttl|| now - entry.time < ttl ){

            cache.delete(key);

            cache.set(key, entry);

            return entry.value;
        }

        cache.delete(key);
    }

        const result = fn(...args);

        if (cache.size >= maxSize) {
           
            const oldestKey  = cache.keys().next().value;

            cache.delete(oldestKey);
        }



        cache.set(key, {
            value: result,
            time: now
        });

        return result;
    };
} 