import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSocialComponent } from './hero-social.component';

describe('HeroSocialComponent', () => {
  let component: HeroSocialComponent;
  let fixture: ComponentFixture<HeroSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
