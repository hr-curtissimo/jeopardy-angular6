import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClueColumnComponent } from './clue-column.component';

describe('ClueColumnComponent', () => {
  let component: ClueColumnComponent;
  let fixture: ComponentFixture<ClueColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClueColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClueColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
