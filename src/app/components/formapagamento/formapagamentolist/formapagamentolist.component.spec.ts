import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagamentolistComponent } from './formapagamentolist.component';

describe('FormapagamentolistComponent', () => {
  let component: FormapagamentolistComponent;
  let fixture: ComponentFixture<FormapagamentolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormapagamentolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormapagamentolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
