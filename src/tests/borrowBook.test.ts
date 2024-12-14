import { Book } from '../models/Book';
import { Customer } from '../models/Customer';
import { Bookstore } from '../services/Bookstore';

describe('Bookstore - Borrow Book', () => {
  it('should allow borrowing a book', () => {
    const bookstore = new Bookstore();
    const book = new Book(1, '1984', 'George Orwell');
    const customer = new Customer(1, 'Alice');
    bookstore.addBook(book);
    bookstore.addCustomer(customer);

    const result = bookstore.borrowBook(1, 1);

    expect(result).toBe('Alice successfully borrowed "1984".');
    expect(book.available).toBe(false);
    expect(customer.borrowedBooks).toContain(1);
  });
});
