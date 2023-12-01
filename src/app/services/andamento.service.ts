import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { ProcessoAndamento } from '../models/PROCESSO_ANDAMENTO.model';

@Injectable({
  providedIn: 'root'
})
export class AndamentoService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllAndamento(): Observable<ProcessoAndamento[]> {
    return this.http.get<ProcessoAndamento[]>(this.URL_API + '/api/Andamento/andamento');
  }

  getProcessoAndamento(id_andamento: string): Observable<ProcessoAndamento> {
    return this.http.get<ProcessoAndamento>(this.URL_API + '/api/Andamento/processo/andamento/' + id_andamento);
  }

  getAllProcessoAndamento(id_processo: string): Observable<ProcessoAndamento[]> {
    return this.http.get<ProcessoAndamento[]>(this.URL_API + '/api/Andamento/processo/all/andamento/' + id_processo);
  }

  createAndamento(createAndamentoRequest: ProcessoAndamento, id_processo: String): Observable<ProcessoAndamento> {
    delete createAndamentoRequest.ID;
    createAndamentoRequest.ID_PROCESSO = id_processo;
    createAndamentoRequest.CRIADOR_ANDAMENTO = "Usuario";
    return this.http.post<ProcessoAndamento>(this.URL_API + '/api/Andamento/add-andamento', createAndamentoRequest);
  }

  updateAndamento(id_andamento: string, updateAndamentoRequest: ProcessoAndamento): Observable<ProcessoAndamento> {
    updateAndamentoRequest.ID = id_andamento;
    return this.http.put<ProcessoAndamento>(this.URL_API + '/api/Andamento/update-andamento/' + id_andamento, updateAndamentoRequest);
  }

  getFileProcessoAndamento(idProcesso: string | String) {
    return this.http.get(this.URL_API + '/api/Upload/get-files/processo/andamento/' + idProcesso)
  }

  uploadFileProcessoAndamento(formData: FormData, idProcesso: string | String) {
    return this.http.post(this.URL_API + '/api/Upload/upload-files/processo/andamento/' + idProcesso, formData)
  }

  deleteFileProcessoAndamento(fileName: any | string, idProcesso: string | String) {
    return this.http.delete(this.URL_API + '/api/Upload/delete-file/processo/andamento/' + idProcesso + "/" + fileName)
  }
}