import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';


import { Observable } from "rxjs";
import { Book } from "../book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private bookService: BookService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.books = this.bookService.getAllBooks();
  }

  bookDetails(id: number){
    this.router.navigate(['/details', id]);
  }

  deleteBooks(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateBooks(id: number){
    this.router.navigate(['/update', id]);
  }
}
