import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SondaggiComponent } from './sondaggi.component';

describe('SondaggiComponent', () => {
  let component: SondaggiComponent;
  let fixture: ComponentFixture<SondaggiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SondaggiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
