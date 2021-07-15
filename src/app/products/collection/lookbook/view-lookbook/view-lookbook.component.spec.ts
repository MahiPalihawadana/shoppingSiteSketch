import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLookbookComponent } from './view-lookbook.component';

describe('ViewLookbookComponent', () => {
  let component: ViewLookbookComponent;
  let fixture: ComponentFixture<ViewLookbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLookbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
