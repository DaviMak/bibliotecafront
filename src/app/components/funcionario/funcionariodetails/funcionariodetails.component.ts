import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Funcionario } from '../../../models/funcionario';
import { ActivatedRoute, Router } from '@angular/router';
import { state } from '@angular/animations';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-funcionariodetails',
  standalone: true,
  imports: [FormsModule, CommonModule, MdbFormsModule],
  templateUrl: './funcionariodetails.component.html',
  styleUrl: './funcionariodetails.component.scss'
})
export class FuncionariodetailsComponent {

  constructor(){
    
  }

  @Input("funcionario") Funcionario: Funcionario = new Funcionario();
  @Output("retorno") retorno: EventEmitter<any> = new EventEmitter();

  Funcionarios: Funcionario = new Funcionario();
  router = inject(ActivatedRoute);
  router2 = inject(Router);

  modalService = inject(MdbModalService);
  @ViewChild("modalFuncionarios") modalFuncionarios!: TemplateRef<any>;
  @ViewChild("modala") modala!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  salvar(){
    if(this.Funcionario.idFuncionario > 0){
      alert("salvo com sucesso");
      this.router2.navigate(["admin/funcionarios", {state: {funcionarionovo: this.Funcionario}}])
    }
  }
}
