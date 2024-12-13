import { Book } from '../models/Book';
import { Bookstore } from '../services/Bookstore';

describe('Bookstore - Add Book', () => {
  it('should add a book to the bookstore', () => {
    const bookstore = new Bookstore();
    const book = new Book(1, '1984', 'George Orwell');
    bookstore.addBook(book);

    expect(bookstore.findBookById(1)).toEqual(book);
  });
});
