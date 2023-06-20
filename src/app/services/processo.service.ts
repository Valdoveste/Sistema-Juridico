import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Processo } from '../models/PROCESSO.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ProcessoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllProcess(): Observable<Processo[]> {
    return this.http.get<Processo[]>(this.baseApiUrl + '/api/Sistema/processo')
  }

  getProcess(id: String): Observable<Processo> {
    return this.http.get<Processo>(this.baseApiUrl + '/api/Sistema/processo' + id)
  }

  createProcess(createProcessResquest: Processo): Observable<Processo> {
    createProcessResquest.ID_PROCESSO = '00000000-0000-0000-0000-000000000000';
    createProcessResquest.DATA_CADASTRO_PROCESSO = new Date();
    createProcessResquest.PARTE_CONTRARIA_DATA_ADMISSAO = new Date();
    createProcessResquest.DATA_ULTIMO_ANDAMENTO = new Date();
    createProcessResquest.PARTE_CONTRARIA_DATA_DEMISSAO = new Date();
    return this.http.post<Processo>(this.baseApiUrl + '/api/Sistema/add-processo', createProcessResquest)
  }
}
