import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private http: HttpClient;
  clue = {};
  category = {};
  answer = 'You do not know';

  constructor(private http: HttpClient) {
    // this.http = http;
  }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    this.http
      .get<Array<any>>('http://jservice.io/api/clues?category=21')
      .subscribe(clues => {
        clues = clues.filter(c => c.value)
                  .slice(0, 5);

        this.category = {
          title: clues[0].category.title,
          // clues: clues
          clues
        };
      });
  }

  loadClue() {
    this.http
      .get('http://jservice.io/api/random?count=1')
      .subscribe(clues => this.clue = clues[0]);
  }
}
