import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagamentodetailsComponent } from './formapagamentodetails.component';

describe('FormapagamentodetailsComponent', () => {
  let component: FormapagamentodetailsComponent;
  let fixture: ComponentFixture<FormapagamentodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormapagamentodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormapagamentodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
