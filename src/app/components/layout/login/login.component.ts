import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientelistComponent } from '../../cliente/clientelist/clientelist.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login!: string;
  senha!: string;


  router = inject(Router);

    Entrar(){

      if(this.login == "davi" && this.senha == "123"){

        this.router.navigate(["admin/cliente"]);
      }else{

        alert("dados incorretos");

      }
      
      
    }
}
