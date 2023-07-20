import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoEmpresas } from '../models/PROCESSO_EMPRESAS.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmpresas(): Observable<ProcessoEmpresas[]> {
    return this.http.get<ProcessoEmpresas[]>(this.baseApiUrl + '/api/Sistema/empresas');
  }

  createEmpresas(createEmpresasRequest: ProcessoEmpresas): Observable<ProcessoEmpresas> {
    delete createEmpresasRequest.ID;
    return this.http.post<ProcessoEmpresas>(this.baseApiUrl + '/api/Sistema/add-empresas', createEmpresasRequest);
  }

  updateEmpresas(id: String, updateEmpresasRequest: ProcessoEmpresas): Observable<ProcessoEmpresas> {
    updateEmpresasRequest.ID = id;
    return this.http.put<ProcessoEmpresas>(this.baseApiUrl + '/api/Sistema/update-empresas/' + id, updateEmpresasRequest);
  }

  deleteEmpresas(id: String): Observable<ProcessoEmpresas> {
    return this.http.delete<ProcessoEmpresas>(this.baseApiUrl + '/api/Sistema/delete-empresas/' + id);
  }
}
