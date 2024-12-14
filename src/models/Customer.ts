export class Customer {
    constructor(
      public id: number,
      public name: string,
      public borrowedBooks: number[] = []
    ) {}
  
    borrowBook(bookId: number): void {
      this.borrowedBooks.push(bookId);
    }
  
    returnBook(bookId: number): void {
      this.borrowedBooks = this.borrowedBooks.filter(id => id !== bookId);
    }
  }
  