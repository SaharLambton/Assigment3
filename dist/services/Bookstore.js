"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookstore = void 0;
class Bookstore {
    constructor() {
        this.books = [];
        this.customers = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    findBookById(id) {
        return this.books.find(book => book.id === id);
    }
    findCustomerById(id) {
        return this.customers.find(customer => customer.id === id);
    }
    borrowBook(customerId, bookId) {
        const customer = this.findCustomerById(customerId);
        const book = this.findBookById(bookId);
        if (customer && book && book.available) {
            customer.borrowBook(bookId);
            book.toggleAvailability();
            return `${customer.name} successfully borrowed "${book.title}".`;
        }
        return `Borrowing failed.`;
    }
    returnBook(customerId, bookId) {
        const customer = this.findCustomerById(customerId);
        const book = this.findBookById(bookId);
        if (customer && book && customer.borrowedBooks.includes(bookId)) {
            customer.returnBook(bookId);
            book.toggleAvailability();
            return `${customer.name} successfully returned "${book.title}".`;
        }
        return `Returning failed.`;
    }
}
exports.Bookstore = Bookstore;
