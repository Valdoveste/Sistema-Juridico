import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { ProcessoParteContraria } from '../models/PROCESSO_PARTE_CONTRARIA.model';

@Injectable({
  providedIn: 'root'
})
export class ParteContrariaService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllParteContraria(): Observable<ProcessoParteContraria[]> {
    return this.http.get<ProcessoParteContraria[]>(this.URL_API + '/api/Sistema/parte-contraria')
  }

  linkParteContraria(linkParteContrariaRequest: ProcessoParteContraria, NUMERO_PROCESSO: String): Observable<ProcessoParteContraria> {
    return this.http.put<ProcessoParteContraria>(this.URL_API + '/api/Sistema/link-parte-contraria/' + NUMERO_PROCESSO, linkParteContrariaRequest)
  }

  getProcessoParteContraria(id_parte_contraria: string | String): Observable<ProcessoParteContraria> {
    return this.http.get<ProcessoParteContraria>(this.URL_API + '/api/Sistema/processo/parte-contraria/' + id_parte_contraria)
  }

  createParteContraria(createParteContrariaRequest: ProcessoParteContraria): Observable<ProcessoParteContraria> {
    return this.http.post<ProcessoParteContraria>(this.URL_API + '/api/Sistema/add-parte-contraria/', createParteContrariaRequest);
  }

  updateParteContraria(id: String, updateParteContrariaRequest: ProcessoParteContraria): Observable<ProcessoParteContraria> {
    updateParteContrariaRequest.ID = id;
    return this.http.put<ProcessoParteContraria>(this.URL_API + '/api/Sistema/update-parte-contraria/' + id, updateParteContrariaRequest);
  }

  deleteParteContraria(id: String): Observable<ProcessoParteContraria> {
    return this.http.delete<ProcessoParteContraria>(this.URL_API + '/api/Sistema/delete-parte-contraria/' + id)
  }
}
