export class Book {
    constructor(
      public id: number,
      public title: string,
      public author: string,
      public available: boolean = true
    ) {}
  
    toggleAvailability(): void {
      this.available = !this.available;
    }
  }
  