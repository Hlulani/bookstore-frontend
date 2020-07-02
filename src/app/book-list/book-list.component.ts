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

  book: Observable<Book[]>;

  constructor(private bookService: BookService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.book = this.bookService.getAllBooks();
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookDetails(id: number){
    this.router.navigate(['details', id]);
  }
 

}
