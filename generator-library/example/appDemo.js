import { Framework } from "../library/framework.js";
import { log } from "../library/loggerDecorator.js";

const app = new Framework();

// listener
app.on("booksLoaded", (books) => {

    console.log("Books loaded:", books.length);
});

// async function
const loadBooks = log("INFO")(async () => {

    return [
        "Harry Potter",
        "The Witcher",
        "The Little Prince"
    ];
});

// memoized version
const cachedLoadBooks = app.memoize(loadBooks);

// запуск
cachedLoadBooks()
    .then((books) => {

        app.emit("booksLoaded", books);

        console.log("Books:", books);

    })
    .catch(console.error);