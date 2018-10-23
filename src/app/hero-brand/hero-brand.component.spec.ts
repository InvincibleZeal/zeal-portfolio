import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBrandComponent } from './hero-brand.component';

describe('HeroBrandComponent', () => {
  let component: HeroBrandComponent;
  let fixture: ComponentFixture<HeroBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
