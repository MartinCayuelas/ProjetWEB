import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistUserComponent } from './playlist-user.component';

describe('PlaylistUserComponent', () => {
  let component: PlaylistUserComponent;
  let fixture: ComponentFixture<PlaylistUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
