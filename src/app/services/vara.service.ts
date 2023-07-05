import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoVara } from '../models/PROCESSO_VARA.model';

@Injectable({
  providedIn: 'root'
})
export class VaraService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllVara(): Observable<ProcessoVara[]> {
    return this.http.get<ProcessoVara[]>(this.baseApiUrl + '/api/Sistema/vara')
  }

  createVara(createVaraRequest: ProcessoVara): Observable<ProcessoVara> {
    delete createVaraRequest.ID;
    return this.http.post<ProcessoVara>(this.baseApiUrl + '/api/Sistema/add-vara', createVaraRequest);
  }

  updateVara(id: String, updateVaraRequest: ProcessoVara): Observable<ProcessoVara> {
    updateVaraRequest.ID = id;
    return this.http.put<ProcessoVara>(this.baseApiUrl + '/api/Sistema/update-vara/' + id, updateVaraRequest)

  }

  deleteVara(id: String): Observable<ProcessoVara> {
    return this.http.delete<ProcessoVara>(this.baseApiUrl + '/api/Sistema/delete-vara/' + id)
  }
}