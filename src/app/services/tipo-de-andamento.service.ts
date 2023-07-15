import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoTipoDeAndamento } from '../models/PROCESSO_TIPO_DE_ANDAMENTO.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDeAndamentoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllTipoDeAndamento(): Observable<ProcessoTipoDeAndamento[]> {
    return this.http.get<ProcessoTipoDeAndamento[]>(this.baseApiUrl + '/api/Sistema/tipo-de-andamento')
  }

  createTipoDeAndamento(createTipoDeAndamentoRequest: ProcessoTipoDeAndamento): Observable<ProcessoTipoDeAndamento> {
    delete createTipoDeAndamentoRequest.ID;
    return this.http.post<ProcessoTipoDeAndamento>(this.baseApiUrl + '/api/Sistema/add-tipo-de-andamento', createTipoDeAndamentoRequest);
  }

  updateTipoDeAndamento(id: String, updateTipoDeAndamentoRequest: ProcessoTipoDeAndamento): Observable<ProcessoTipoDeAndamento> {
    updateTipoDeAndamentoRequest.ID = id;
    return this.http.put<ProcessoTipoDeAndamento>(this.baseApiUrl + '/api/Sistema/update-tipo-de-andamento/' + id, updateTipoDeAndamentoRequest)

  }

  deleteTipoDeAndamento(id: String): Observable<ProcessoTipoDeAndamento> {
    return this.http.delete<ProcessoTipoDeAndamento>(this.baseApiUrl + '/api/Sistema/delete-tipo-de-andamento/' + id)
  }
}
