import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreAutoraComponent } from './sobre-autora.component';

describe('SobreAutoraComponent', () => {
  let component: SobreAutoraComponent;
  let fixture: ComponentFixture<SobreAutoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobreAutoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreAutoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
