import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoTipoDeAcao } from '../models/PROCESSO_TIPO_DE_ACAO.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDeAcaoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllTipoDeAcao(): Observable<ProcessoTipoDeAcao[]> {
    return this.http.get<ProcessoTipoDeAcao[]>(this.baseApiUrl + '/api/Sistema/tipo-de-acao');
  }

  createTipoDeAcao(createTipoDeAcaoRequest: ProcessoTipoDeAcao): Observable<ProcessoTipoDeAcao> {
    delete createTipoDeAcaoRequest.ID;
    return this.http.post<ProcessoTipoDeAcao>(this.baseApiUrl + '/api/Sistema/add-tipo-de-acao', createTipoDeAcaoRequest);
  }

  updateTipoDeAcao(id: string, updateTipoDeAcaoRequest: ProcessoTipoDeAcao): Observable<ProcessoTipoDeAcao> {
    updateTipoDeAcaoRequest.ID = id;
    return this.http.put<ProcessoTipoDeAcao>(this.baseApiUrl + '/api/Sistema/update-tipo-de-acao/' + id, updateTipoDeAcaoRequest);
  }

  deleteTipoDeAcao(id: string): Observable<ProcessoTipoDeAcao> {
    return this.http.delete<ProcessoTipoDeAcao>(this.baseApiUrl + '/api/Sistema/delete-tipo-de-acao/' + id);
  }
}
