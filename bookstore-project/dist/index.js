"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./models/Book");
const Customer_1 = require("./models/Customer");
const Bookstore_1 = require("./services/Bookstore");
const bookstore = new Bookstore_1.Bookstore();
const book1 = new Book_1.Book(1, '1984', 'George Orwell');
const book2 = new Book_1.Book(2, 'The Great Gatsby', 'F. Scott Fitzgerald');
const customer = new Customer_1.Customer(1, 'Alice');
bookstore.addBook(book1);
bookstore.addBook(book2);
bookstore.addCustomer(customer);
console.log(bookstore.borrowBook(1, 1)); // Alice borrows 1984
console.log(bookstore.returnBook(1, 1)); // Alice returns 1984
