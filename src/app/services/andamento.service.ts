import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoAndamento } from '../models/PROCESSO_ANDAMENTO.model';

@Injectable({
  providedIn: 'root'
})
export class AndamentoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllAndamento(): Observable<ProcessoAndamento[]> {
    return this.http.get<ProcessoAndamento[]>(this.baseApiUrl + '/api/Sistema/andamento');
  }

  getProcessoAndamento(id_andamento: string): Observable<ProcessoAndamento> {
    return this.http.get<ProcessoAndamento>(this.baseApiUrl + '/api/Sistema/processo/andamento/' + id_andamento);
  }

  getAllProcessoAndamento(id_processo: string): Observable<ProcessoAndamento[]> {
    return this.http.get<ProcessoAndamento[]>(this.baseApiUrl + '/api/Sistema/processo/all/andamento/' + id_processo);
  }

  createAndamento(createAndamentoRequest: ProcessoAndamento, id_processo: String): Observable<ProcessoAndamento> {
    delete createAndamentoRequest.ID;
    createAndamentoRequest.ID_PROCESSO = id_processo;
    createAndamentoRequest.CRIADOR_ANDAMENTO = "Usuario";
    return this.http.post<ProcessoAndamento>(this.baseApiUrl + '/api/Sistema/add-andamento', createAndamentoRequest);
  }

  updateAndamento(id_andamento: string, updateAndamentoRequest: ProcessoAndamento): Observable<ProcessoAndamento> {
    updateAndamentoRequest.ID = id_andamento;
    return this.http.put<ProcessoAndamento>(this.baseApiUrl + '/api/Sistema/update-andamento/' + id_andamento, updateAndamentoRequest);
  }

  getFileProcessoAndamento(idProcesso: string | String) {
    return this.http.get(this.baseApiUrl + '/api/Upload/get-files/processo/andamento/' + idProcesso)
  }

  uploadFileProcessoAndamento(formData: FormData, idProcesso: string | String) {
    return this.http.post(this.baseApiUrl + '/api/Upload/upload-files/processo/andamento/' + idProcesso, formData)
  }

  deleteFileProcessoAndamento(fileName: any | string, idProcesso: string | String) {
    return this.http.delete(this.baseApiUrl + '/api/Upload/delete-file/processo/andamento/' + idProcesso + "/" + fileName)
  }
}