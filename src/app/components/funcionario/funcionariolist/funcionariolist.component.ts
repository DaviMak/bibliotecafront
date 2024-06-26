import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FuncionariodetailsComponent } from '../funcionariodetails/funcionariodetails.component';
import { Funcionario } from '../../../models/funcionario';
import{ MdbModalModule, MdbModalRef, MdbModalService,} from "mdb-angular-ui-kit/modal";
import { FuncionarioService } from '../../../services/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionariolist',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, FuncionariodetailsComponent, MdbModalModule],
  templateUrl: './funcionariolist.component.html',
  styleUrl: './funcionariolist.component.scss'
})
export class FuncionariolistComponent {

  modalservice = inject(MdbModalService);
  @ViewChild("modalDetalhe") modalFuncionarioDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  lista:Funcionario[] = []
  funcionarioEdit!: Funcionario;

  FuncionarioService = inject(FuncionarioService);

  constructor(){

    this.findAll();

  }

  findAll(){

    this.FuncionarioService.findAll().subscribe({
      next: lista => {
        this.lista = lista;

      },error: erro => {
        
        alert("ocorreu um erro");
      }
    })
  }

  novo(){
    this.funcionarioEdit = new Funcionario(0,"nome", "12345678900", "funcionario@gmail.com", "senha123");
    this.modalRef = this.modalservice.open(this.modalFuncionarioDetalhe);
  }
  editar(obj: Funcionario){

    this.funcionarioEdit = Object.assign({}, obj);
    this.modalRef = this.modalservice.open(this.modalFuncionarioDetalhe);
  }
  deletar(){

  }
}
