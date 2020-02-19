import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtoolbarComponent } from './subtoolbar.component';

describe('SubtoolbarComponent', () => {
  let component: SubtoolbarComponent;
  let fixture: ComponentFixture<SubtoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
