import { Book } from '../models/Book';
import { Customer } from '../models/Customer';
import { Bookstore } from '../services/Bookstore';

describe('Bookstore - Return Book', () => {
  it('should allow returning a borrowed book', () => {
    const bookstore = new Bookstore();
    const book = new Book(1, '1984', 'George Orwell');
    const customer = new Customer(1, 'Alice');
    bookstore.addBook(book);
    bookstore.addCustomer(customer);
    bookstore.borrowBook(1, 1);

    const result = bookstore.returnBook(1, 1);

    expect(result).toBe('Alice successfully returned "1984".');
    expect(book.available).toBe(true);
    expect(customer.borrowedBooks).not.toContain(1);
  });
});
