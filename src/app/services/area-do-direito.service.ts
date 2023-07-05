import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoAreaDoDireito } from '../models/PROCESSO_AREA_DO_DIREITO.model';

@Injectable({
  providedIn: 'root'
})
export class AreaDoDireitoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllAreaDoDireito(): Observable<ProcessoAreaDoDireito[]> {
    return this.http.get<ProcessoAreaDoDireito[]>(this.baseApiUrl + '/api/Sistema/area-do-direito');
  }

  createAreaDoDireito(createAreaDoDireitoRequest: ProcessoAreaDoDireito): Observable<ProcessoAreaDoDireito> {
    delete createAreaDoDireitoRequest.ID;
    return this.http.post<ProcessoAreaDoDireito>(this.baseApiUrl + '/api/Sistema/add-area-do-direito', createAreaDoDireitoRequest);
  }

  updateAreaDoDireito(id: string, updateAreaDoDireitoRequest: ProcessoAreaDoDireito): Observable<ProcessoAreaDoDireito> {
    updateAreaDoDireitoRequest.ID = id;
    return this.http.put<ProcessoAreaDoDireito>(this.baseApiUrl + '/api/Sistema/update-area-do-direito/' + id, updateAreaDoDireitoRequest);
  }

  deleteAreaDoDireito(id: string): Observable<ProcessoAreaDoDireito> {
    return this.http.delete<ProcessoAreaDoDireito>(this.baseApiUrl + '/api/Sistema/delete-area-do-direito/' + id);
  }
}
