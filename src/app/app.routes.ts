import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { ClientelistComponent } from './components/cliente/clientelist/clientelist.component';
import { ClientedetailsComponent } from './components/cliente/clientedetails/clientedetails/clientedetails.component';
import { FuncionariolistComponent } from './components/funcionario/funcionariolist/funcionariolist.component';
import { FuncionariodetailsComponent } from './components/funcionario/funcionariodetails/funcionariodetails.component';
import { Formapagamento } from './models/formapagamento';
import { FormapagamentolistComponent } from './components/formapagamento/formapagamentolist/formapagamentolist.component';
import { HorariolistComponent } from './components/horario/horariolist/horariolist.component';
import { PagamentolistComponent } from './components/pagamento/pagamentolist/pagamentolist.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent, children:[

        {path: "cliente", component: ClientelistComponent},
        {path: "cliente/new", component: ClientedetailsComponent},
        {path: "cliente/edit/:id", component: ClientedetailsComponent},

        {path: "funcionario", component: FuncionariolistComponent},
        {path: "funcionario/new", component: FuncionariodetailsComponent},
        {path: "funcionario/edit/:id", component: FuncionariodetailsComponent},

        {path: "formapagamento", component: FormapagamentolistComponent},
        {path: "horario", component: HorariolistComponent},
        {path: "pagamento", component: PagamentolistComponent}

    ]}
];
