import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { ProcessoEmpresas } from '../models/PROCESSO_EMPRESAS.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllEmpresas(): Observable<ProcessoEmpresas[]> {
    return this.http.get<ProcessoEmpresas[]>(this.URL_API + '/api/Empresa/empresas');
  }

  createEmpresas(createEmpresasRequest: ProcessoEmpresas): Observable<ProcessoEmpresas> {
    delete createEmpresasRequest.ID;
    return this.http.post<ProcessoEmpresas>(this.URL_API + '/api/Empresa/add-empresas', createEmpresasRequest);
  }

  updateEmpresas(id: String, updateEmpresasRequest: ProcessoEmpresas): Observable<ProcessoEmpresas> {
    updateEmpresasRequest.ID = id;
    return this.http.put<ProcessoEmpresas>(this.URL_API + '/api/Empresa/update-empresas/' + id, updateEmpresasRequest);
  }

  deleteEmpresas(id: String): Observable<ProcessoEmpresas> {
    return this.http.delete<ProcessoEmpresas>(this.URL_API + '/api/Empresa/delete-empresas/' + id);
  }
}
