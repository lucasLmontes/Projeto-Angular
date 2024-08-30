import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrosHpComponent } from './outros-hp.component';

describe('OutrosHpComponent', () => {
  let component: OutrosHpComponent;
  let fixture: ComponentFixture<OutrosHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutrosHpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutrosHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
