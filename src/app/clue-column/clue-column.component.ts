import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clue-column',
  templateUrl: './clue-column.component.html',
  styleUrls: ['./clue-column.component.css']
})
export class ClueColumnComponent implements OnInit {

  @Input() public category;

  constructor() { }

  ngOnInit() {
  }

}
