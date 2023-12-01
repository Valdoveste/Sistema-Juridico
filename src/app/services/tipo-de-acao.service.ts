import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { ProcessoTipoDeAcao } from '../models/PROCESSO_TIPO_DE_ACAO.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDeAcaoService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllTipoDeAcao(): Observable<ProcessoTipoDeAcao[]> {
    return this.http.get<ProcessoTipoDeAcao[]>(this.URL_API + '/api/TipoDeAcao/tipo-de-acao');
  }

  createTipoDeAcao(createTipoDeAcaoRequest: ProcessoTipoDeAcao): Observable<ProcessoTipoDeAcao> {
    delete createTipoDeAcaoRequest.ID;
    return this.http.post<ProcessoTipoDeAcao>(this.URL_API + '/api/TipoDeAcao/add-tipo-de-acao', createTipoDeAcaoRequest);
  }

  updateTipoDeAcao(id: string, updateTipoDeAcaoRequest: ProcessoTipoDeAcao): Observable<ProcessoTipoDeAcao> {
    updateTipoDeAcaoRequest.ID = id;
    return this.http.put<ProcessoTipoDeAcao>(this.URL_API + '/api/TipoDeAcao/update-tipo-de-acao/' + id, updateTipoDeAcaoRequest);
  }

  deleteTipoDeAcao(id: string): Observable<ProcessoTipoDeAcao> {
    return this.http.delete<ProcessoTipoDeAcao>(this.URL_API + '/api/TipoDeAcao/delete-tipo-de-acao/' + id);
  }
}
