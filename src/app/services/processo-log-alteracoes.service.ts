import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProcessoLogAlteracoes } from '../models/PROCESSO_LOG_ALTERACOES.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoLogAlteracoesService {

  constructor(private http: HttpClient) { }

  URL_API: string = environment.URL_API;

  addLogProcesso(idProcesso: string, logProcessoRequest: ProcessoLogAlteracoes): Observable<ProcessoLogAlteracoes> {
    logProcessoRequest.ID_PROCESSO = idProcesso;
    return this.http.post<ProcessoLogAlteracoes>(this.URL_API + '/api/Sistema/add-log-processo/' + idProcesso, logProcessoRequest);
  }

  getLogProcesso(idProcesso: string): Observable<ProcessoLogAlteracoes[]> {
    return this.http.get<ProcessoLogAlteracoes[]>(this.URL_API + '/api/Sistema/get-log-processo/' + idProcesso);
  }
}
