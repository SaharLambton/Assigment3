import { Book } from './models/Book';
import { Customer } from './models/Customer';
import { Bookstore } from './services/Bookstore';

const bookstore = new Bookstore();

const book1 = new Book(1, '1984', 'George Orwell');
const book2 = new Book(2, 'The Great Gatsby', 'F. Scott Fitzgerald');
const customer = new Customer(1, 'Alice');

bookstore.addBook(book1);
bookstore.addBook(book2);
bookstore.addCustomer(customer);

console.log(bookstore.borrowBook(1, 1)); // Alice borrows 1984
console.log(bookstore.returnBook(1, 1)); // Alice returns 1984
