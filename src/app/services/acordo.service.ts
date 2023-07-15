import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoAcordo } from '../models/PROCESSO_ACORDO.model';

@Injectable({
  providedIn: 'root'
})
export class AcordoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllAcordo(): Observable<ProcessoAcordo[]> {
    return this.http.get<ProcessoAcordo[]>(this.baseApiUrl + '/api/Sistema/acordo');
  }

  getProcessoAcordo(id_acordo: string): Observable<ProcessoAcordo> {
    return this.http.get<ProcessoAcordo>(this.baseApiUrl + '/api/Sistema/processo/acordo/' + id_acordo)
  }

  getAllProcessoAcordo(id_processo: string): Observable<ProcessoAcordo[]> {
    return this.http.get<ProcessoAcordo[]>(this.baseApiUrl + '/api/Sistema/processo/all/acordo/' + id_processo);
  }

  createAcordo(createAcordoRequest: ProcessoAcordo, id_processo: String): Observable<ProcessoAcordo> {
    delete createAcordoRequest.ID;
    createAcordoRequest.ID_PROCESSO = id_processo;
    createAcordoRequest.CRIADOR_ACORDO = "Usuario"
    return this.http.post<ProcessoAcordo>(this.baseApiUrl + '/api/Sistema/add-acordo', createAcordoRequest);
  }

  updateAcordo(id_acordo: string, updateAcordoRequest: ProcessoAcordo): Observable<ProcessoAcordo> {
    updateAcordoRequest.ID = id_acordo;
    return this.http.put<ProcessoAcordo>(this.baseApiUrl + '/api/Sistema/update-acordo/' + id_acordo, updateAcordoRequest);
  }

  // deleteAcordo(id: string): Observable<ProcessoAcordo> {
  //   return this.http.delete<ProcessoAcordo>(this.baseApiUrl + '/api/Sistema/delete-acordo/' + id);
  // }
}
