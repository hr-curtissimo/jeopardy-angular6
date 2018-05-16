import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clue-square',
  templateUrl: './clue-square.component.html',
  styleUrls: ['./clue-square.component.css']
})
export class ClueSquareComponent implements OnInit {

  @Input() public clue;

  constructor() { }

  ngOnInit() {
  }

}
