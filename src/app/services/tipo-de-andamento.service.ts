import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { ProcessoTipoDeAndamento } from '../models/PROCESSO_TIPO_DE_ANDAMENTO.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDeAndamentoService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllTipoDeAndamento(): Observable<ProcessoTipoDeAndamento[]> {
    return this.http.get<ProcessoTipoDeAndamento[]>(this.URL_API + '/api/Sistema/tipo-de-andamento')
  }

  createTipoDeAndamento(createTipoDeAndamentoRequest: ProcessoTipoDeAndamento): Observable<ProcessoTipoDeAndamento> {
    delete createTipoDeAndamentoRequest.ID;
    return this.http.post<ProcessoTipoDeAndamento>(this.URL_API + '/api/Sistema/add-tipo-de-andamento', createTipoDeAndamentoRequest);
  }

  updateTipoDeAndamento(id: String, updateTipoDeAndamentoRequest: ProcessoTipoDeAndamento): Observable<ProcessoTipoDeAndamento> {
    updateTipoDeAndamentoRequest.ID = id;
    return this.http.put<ProcessoTipoDeAndamento>(this.URL_API + '/api/Sistema/update-tipo-de-andamento/' + id, updateTipoDeAndamentoRequest)

  }

  deleteTipoDeAndamento(id: String): Observable<ProcessoTipoDeAndamento> {
    return this.http.delete<ProcessoTipoDeAndamento>(this.URL_API + '/api/Sistema/delete-tipo-de-andamento/' + id)
  }
}
