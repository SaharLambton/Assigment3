import { Book } from '../models/Book';
import { Customer } from '../models/Customer';

export class Bookstore {
  private books: Book[] = [];
  private customers: Customer[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  findBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  findCustomerById(id: number): Customer | undefined {
    return this.customers.find(customer => customer.id === id);
  }

  borrowBook(customerId: number, bookId: number): string {
    const customer = this.findCustomerById(customerId);
    const book = this.findBookById(bookId);

    if (customer && book && book.available) {
      customer.borrowBook(bookId);
      book.toggleAvailability();
      return `${customer.name} successfully borrowed "${book.title}".`;
    }
    return `Borrowing failed.`;
  }

  returnBook(customerId: number, bookId: number): string {
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
