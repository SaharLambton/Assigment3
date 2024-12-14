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

  // Expectativa modificada para que falle
  expect(result).toBe('Alice failed to return "1984".'); // Resultado incorrecto intencionalmente
  expect(book.available).toBe(false); // Esta línea también hará que falle la prueba
  expect(customer.borrowedBooks).toContain(1); // Otra línea modificada para fallar
});
});