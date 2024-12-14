"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("../models/Book");
const Customer_1 = require("../models/Customer");
const Bookstore_1 = require("../services/Bookstore");
describe('Bookstore - Return Book', () => {
    it('should allow returning a borrowed book', () => {
        const bookstore = new Bookstore_1.Bookstore();
        const book = new Book_1.Book(1, '1984', 'George Orwell');
        const customer = new Customer_1.Customer(1, 'Alice');
        bookstore.addBook(book);
        bookstore.addCustomer(customer);
        bookstore.borrowBook(1, 1);
        const result = bookstore.returnBook(1, 1);
        expect(result).toBe('Alice successfully returned "1984".');
        expect(book.available).toBe(true);
        expect(customer.borrowedBooks).not.toContain(1);
    });
});
