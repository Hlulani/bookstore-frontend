import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  
  id: number;
  book: Book;

  constructor(private route: ActivatedRoute,private router: Router,
    private bookService: BookService) { }

  ngOnInit() {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];
    
    this.bookService.getBookById(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['book']);
  }
}
