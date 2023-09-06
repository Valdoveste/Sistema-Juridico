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
    return this.http.get<Processo>(this.baseApiUrl + '/api/Sistema/processo/' + id)
  }

  createProcess(createProcessResquest: Processo): Observable<Processo> {
    return this.http.post<Processo>(this.baseApiUrl + '/api/Sistema/add-processo', createProcessResquest)
  }

  updateProcess(id_process: String, updateProcessRequest: Processo): Observable<Processo> {
    return this.http.put<Processo>(this.baseApiUrl + '/api/Sistema/update-processo/' + id_process, updateProcessRequest)
  }
}
