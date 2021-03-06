import { Component, OnInit } from '@angular/core';

import 'rxjs/Rx';
import { BookService } from '../service/api/book.service';
import {Book} from "../service";

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

    private nbBooks: number;
    private books: Book[];

    constructor(private bookService: BookService) {
    }

    ngOnInit() {
        this.bookService.countBooks().subscribe(nbBooks => this.nbBooks = nbBooks);
        this.bookService.getBooks().subscribe(books => this.books = books);
    }
}
