// ГЕНЕРАТОР: нескінченно видає книги зі списку
export function* bookGenerator(books) {
    let i = 0;
    while (true) {
        yield books[i % books.length]; // Віддає одну книгу і чекає
        i++;
    }
}

// ІТЕРАТОР З ТАЙМАУТОМ: "читає" книги певний час
export async function readBooksWithTimeout(iterator, seconds) {
    const endTime = Date.now() + seconds * 1000;
    
    console.log(`--- Починаємо перегляд книг (${seconds} сек.) ---`);

    while (Date.now() < endTime) {
        const book = iterator.next().value;
        console.log(`📖 Зараз читаємо: ${book}`);
        
        // Робимо паузу 1 секунду між книгами
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log("--- Час вийшов, повертаємося до навчання! ---");
}