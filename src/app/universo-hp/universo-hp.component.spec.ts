import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversoHpComponent } from './universo-hp.component';

describe('UniversoHpComponent', () => {
  let component: UniversoHpComponent;
  let fixture: ComponentFixture<UniversoHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversoHpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversoHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
