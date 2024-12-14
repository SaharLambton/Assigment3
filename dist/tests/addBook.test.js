"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("../models/Book");
const Bookstore_1 = require("../services/Bookstore");
describe('Bookstore - Add Book', () => {
    it('should add a book to the bookstore', () => {
        const bookstore = new Bookstore_1.Bookstore();
        const book = new Book_1.Book(1, '1984', 'George Orwell');
        bookstore.addBook(book);
        expect(bookstore.findBookById(1)).toEqual(book);
    });
});
