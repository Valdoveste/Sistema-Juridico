import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ProcessoLogAlteracoes } from '../models/PROCESSO_LOG_ALTERACOES.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoLogAlteracoesService {

  constructor(private http: HttpClient) { }

  baseApiUrl: string = environment.baseApiUrl;

  addLogProcesso(idProcesso: string, logProcessoRequest: ProcessoLogAlteracoes): Observable<ProcessoLogAlteracoes> {
    logProcessoRequest.ID_PROCESSO = idProcesso;
    return this.http.post<ProcessoLogAlteracoes>(this.baseApiUrl + '/api/Sistema/add-log-processo/' + idProcesso, logProcessoRequest);
  }

  getLogProcesso(idProcesso: string): Observable<ProcessoLogAlteracoes[]> {
    return this.http.get<ProcessoLogAlteracoes[]>(this.baseApiUrl + '/api/Sistema/get-log-processo/' + idProcesso);
  }
}
