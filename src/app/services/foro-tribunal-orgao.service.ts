import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoForoTribunalOrgao } from '../models/PROCESSO_FORO_TRIBUNAL_ORGAO.model';

@Injectable({
  providedIn: 'root'
})
export class ForoTribunalOrgaoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllForoTribunalOrgao(): Observable<ProcessoForoTribunalOrgao[]> {
    return this.http.get<ProcessoForoTribunalOrgao[]>(this.baseApiUrl + '/api/Sistema/foro-tribunal-orgao')
  }

  createForoTribunalOrgao(createForoTribunalOrgaoRequest: ProcessoForoTribunalOrgao): Observable<ProcessoForoTribunalOrgao> {
    delete createForoTribunalOrgaoRequest.ID;
    return this.http.post<ProcessoForoTribunalOrgao>(this.baseApiUrl + '/api/Sistema/add-foro-tribunal-orgao', createForoTribunalOrgaoRequest);
  }

  updateForoTribunalOrgao(id: string, updateForoTribunalOrgaoRequest: ProcessoForoTribunalOrgao): Observable<ProcessoForoTribunalOrgao> {
    updateForoTribunalOrgaoRequest.ID = id;
    return this.http.put<ProcessoForoTribunalOrgao>(this.baseApiUrl + '/api/Sistema/update-foro-tribunal-orgao/' + id, updateForoTribunalOrgaoRequest);
  }

  deleteForoTribunalOrgao(id: string): Observable<ProcessoForoTribunalOrgao> {
    return this.http.delete<ProcessoForoTribunalOrgao>(this.baseApiUrl + '/api/Sistema/delete-foro-tribunal-orgao/' + id);
  }
}
