import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaToolbarComponent } from './categoria-toolbar.component';

describe('CategoriaToolbarComponent', () => {
  let component: CategoriaToolbarComponent;
  let fixture: ComponentFixture<CategoriaToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
