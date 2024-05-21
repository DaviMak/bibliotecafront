import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FuncionariodetailsComponent } from '../funcionariodetails/funcionariodetails.component';
import { Funcionario } from '../../../models/funcionario';
import{ MdbModalModule, MdbModalRef, MdbModalService,} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-funcionariolist',
  standalone: true,
  imports: [FormsModule, MdbFormsModule, CommonModule, RouterLink, FuncionariodetailsComponent],
  templateUrl: './funcionariolist.component.html',
  styleUrl: './funcionariolist.component.scss'
})
export class FuncionariolistComponent {

  //modalservice = inject(MdbModalService);
 // @ViewChild("modaldetalhe") modalfuncionariodetalhe!: TemplateRef<any>;
  modalref!: MdbModalRef<any>;

  lista:Funcionario[] = []
  funcionarioEdit!: Funcionario;

  constructor(){

    this.findAll();
  }

  findAll(){

    let funcionario1 = new Funcionario();
    funcionario1.idFuncionario = 1;
    funcionario1.nmFuncionario = 'JOAOZINHO';

    let funcionario2 = new Funcionario();
    funcionario2.idFuncionario = 2;
    funcionario2.nmFuncionario = 'ZINHO';


    this.lista.push(funcionario1);
    this.lista.push(funcionario2);
  }
}
