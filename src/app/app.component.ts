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

  constructor(private http: HttpClient) {
    // this.http = http;
  }

  ngOnInit() {
    this.loadClue();
  }

  loadClue() {
    this.http
      .get('http://jservice.io/api/random?count=1')
      .subscribe(clues => this.clue = clues[0]);
  }
}
