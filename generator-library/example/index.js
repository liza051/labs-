import { bookGenerator, readBooksWithTimeout } from "../library/generators.js";

const gen = bookGenerator();

// Виводимо перші книги
console.log(gen.next().value);
console.log(gen.next().value);

readBooksWithTimeout(promoStream, 10);