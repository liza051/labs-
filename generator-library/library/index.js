import { bookGenerator, readBooksWithTimeout } from './generators.js';

const myLibrary = ["Одного разу розбите серце","Гаррі Поттер","Відьмак","Маленький принц","Завжди і до віку","Балада про недовго й нещасливо","Прокляття справжнього кохання","Безсила","Безросудна","Безсердечний мисливець"];
const promoSteam = bookGenerator(myLibrary);
// Запускаємо на 10 секунд 
readBooksWithTimeout(promoSteam,10);