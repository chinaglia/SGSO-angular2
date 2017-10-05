import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciSondaggioComponent } from './inserisci-sondaggio.component';

describe('InserisciSondaggioComponent', () => {
  let component: InserisciSondaggioComponent;
  let fixture: ComponentFixture<InserisciSondaggioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserisciSondaggioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserisciSondaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
