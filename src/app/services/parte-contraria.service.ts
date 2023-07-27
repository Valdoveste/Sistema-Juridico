import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoParteContraria } from '../models/PROCESSO_PARTE_CONTRARIA.model';

@Injectable({
  providedIn: 'root'
})
export class ParteContrariaService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllParteContraria(): Observable<ProcessoParteContraria[]> {
    return this.http.get<ProcessoParteContraria[]>(this.baseApiUrl + '/api/Sistema/parte-contraria')
  }

  createParteContraria(createParteContrariaRequest: ProcessoParteContraria): Observable<ProcessoParteContraria> {
    delete createParteContrariaRequest.ID;
    return this.http.post<ProcessoParteContraria>(this.baseApiUrl + '/api/Sistema/add-parte-contraria', createParteContrariaRequest);
  }

  updateParteContraria(id: String, updateParteContrariaRequest: ProcessoParteContraria): Observable<ProcessoParteContraria> {
    updateParteContrariaRequest.ID = id;
    return this.http.put<ProcessoParteContraria>(this.baseApiUrl + '/api/Sistema/update-parte-contraria/' + id, updateParteContrariaRequest);
  }

  deleteParteContraria(id: String): Observable<ProcessoParteContraria> {
    return this.http.delete<ProcessoParteContraria>(this.baseApiUrl + '/api/Sistema/delete-parte-contraria/' + id)
  }
}
