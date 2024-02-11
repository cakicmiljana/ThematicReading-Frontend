import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private bookApi = "http://localhost:5122" + '/Book';

  constructor(private httpClient: HttpClient) {

  }

  createBook(book: Book) {
    return this.httpClient.post<Book>(this.bookApi + '/CreateBook', book);
  }
  
  getBookById(id: string) {
    return this.httpClient.get<Book>(this.bookApi + `/GetBookById/${id}`);
  }
  
  getBookByTitle(title: string) {
    return this.httpClient.get<Book>(this.bookApi + `/GetBookByTitle/${title}`);
  }
  
  updateBookPagesLanguage(id: string, pages: number, language: string) {
    return this.httpClient.put<Book>(this.bookApi + `/UpdateBookPagesLanguage/${id}/${pages}/${language}`, { });
  }

  getAllBooksByGenre() {
    return this.httpClient.get<Book[]>(this.bookApi + '/GetAllBooksByGenre');
  }

  getAllBooks() {
    return this.httpClient.get<Book[]>(this.bookApi + '/GetAllBooks');
  }

  deleteBook(id: string) {
    return this.httpClient.delete(this.bookApi + `/DeleteBook/${id}`);
  }
}
