import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbProgressBarComponent } from './ngb-progress-bar.component';

describe('NgbProgressBarComponent', () => {
  let component: NgbProgressBarComponent;
  let fixture: ComponentFixture<NgbProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
