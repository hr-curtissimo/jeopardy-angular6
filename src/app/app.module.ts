import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClueSquareComponent } from './clue-square/clue-square.component';
import { ClueColumnComponent } from './clue-column/clue-column.component';

@NgModule({
  declarations: [
    AppComponent,
    ClueSquareComponent,
    ClueColumnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
