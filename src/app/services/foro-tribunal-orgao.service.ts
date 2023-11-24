import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProcessoForoTribunalOrgao } from '../models/PROCESSO_FORO_TRIBUNAL_ORGAO.model';

@Injectable({
  providedIn: 'root'
})
export class ForoTribunalOrgaoService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllForoTribunalOrgao(): Observable<ProcessoForoTribunalOrgao[]> {
    return this.http.get<ProcessoForoTribunalOrgao[]>(this.URL_API + '/api/Sistema/foro-tribunal-orgao')
  }

  createForoTribunalOrgao(createForoTribunalOrgaoRequest: ProcessoForoTribunalOrgao): Observable<ProcessoForoTribunalOrgao> {
    delete createForoTribunalOrgaoRequest.ID;
    return this.http.post<ProcessoForoTribunalOrgao>(this.URL_API + '/api/Sistema/add-foro-tribunal-orgao', createForoTribunalOrgaoRequest);
  }

  updateForoTribunalOrgao(id: string, updateForoTribunalOrgaoRequest: ProcessoForoTribunalOrgao): Observable<ProcessoForoTribunalOrgao> {
    updateForoTribunalOrgaoRequest.ID = id;
    return this.http.put<ProcessoForoTribunalOrgao>(this.URL_API + '/api/Sistema/update-foro-tribunal-orgao/' + id, updateForoTribunalOrgaoRequest);
  }

  deleteForoTribunalOrgao(id: string): Observable<ProcessoForoTribunalOrgao> {
    return this.http.delete<ProcessoForoTribunalOrgao>(this.URL_API + '/api/Sistema/delete-foro-tribunal-orgao/' + id);
  }
}
