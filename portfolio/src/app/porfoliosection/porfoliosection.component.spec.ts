import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfoliosectionComponent } from './porfoliosection.component';

describe('PorfoliosectionComponent', () => {
  let component: PorfoliosectionComponent;
  let fixture: ComponentFixture<PorfoliosectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorfoliosectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfoliosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
