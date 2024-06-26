import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  http = inject(HttpClient);
  api = "http://localhost:8080/api/funcionario";

  constructor() { }

  findAll(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.api+"/listAll");
  }

  salvar(obj: Funcionario):Observable<String>{
    return this.http.put<string>(this.api+"/save", obj, {responseType: "text" as "json"});
  }

  update(obj: Funcionario): Observable<string> {
    return this.http.put<string>(this.api+"/update/"+obj.idFuncionario, obj, {responseType: 'text' as 'json'} );
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(this.api+"/delete/"+id, {responseType: 'text' as 'json'} );
  }

  findById(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(this.api+"/findById/"+id);
  }
}
