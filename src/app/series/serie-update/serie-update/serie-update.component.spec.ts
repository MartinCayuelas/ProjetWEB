import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieUpdateComponent } from './serie-update.component';

describe('SerieUpdateComponent', () => {
  let component: SerieUpdateComponent;
  let fixture: ComponentFixture<SerieUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
