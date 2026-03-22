import { bookGenerator, readBooksWithTimeout } from "library-project";

const myLibrary = ["Одного разу розбите серце","Гаррі Поттер","Відьмак","Маленький принц","Завжди і до віку","Балада про недовго й нещасливо","Прокляття справжнього кохання","Безсила","Безросудна","Безсердечний мисливець"];
const promoStream = bookGenerator(myLibrary);
// Запускаємо на 10 секунд 
readBooksWithTimeout(promoStream,10);