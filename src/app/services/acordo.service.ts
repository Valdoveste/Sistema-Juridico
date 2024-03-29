import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { ProcessoAcordo } from '../models/PROCESSO_ACORDO.model';

@Injectable({
  providedIn: 'root'
})
  export class AcordoService {

    URL_API: string | undefined = environment.URL_API;

    constructor(private http: HttpClient) { }

    getAllAcordo(): Observable<ProcessoAcordo[]> {
      return this.http.get<ProcessoAcordo[]>(this.URL_API + '/api/Acordo/acordo');
    }

    getProcessoAcordo(id_acordo: string): Observable<ProcessoAcordo> {
      return this.http.get<ProcessoAcordo>(this.URL_API + '/api/Acordo/processo/acordo/' + id_acordo)
    }

    getAllProcessoAcordo(id_processo: string): Observable<ProcessoAcordo[]> {
      return this.http.get<ProcessoAcordo[]>(this.URL_API + '/api/Acordo/processo/all/acordo/' + id_processo);
    }

    createAcordo(createAcordoRequest: ProcessoAcordo, id_processo: String): Observable<ProcessoAcordo> {
      delete createAcordoRequest.ID;
      createAcordoRequest.ID_PROCESSO = id_processo;
      createAcordoRequest.CRIADOR_ACORDO = "Usuario"
      return this.http.post<ProcessoAcordo>(this.URL_API + '/api/Acordo/add-acordo', createAcordoRequest);
    }

    updateAcordo(id_acordo: string, updateAcordoRequest: ProcessoAcordo): Observable<ProcessoAcordo> {
      updateAcordoRequest.ID = id_acordo;
      return this.http.put<ProcessoAcordo>(this.URL_API + '/api/Acordo/update-acordo/' + id_acordo, updateAcordoRequest);
    }

    deleteAcordo(id_acordo: string): Observable<ProcessoAcordo> {
      return this.http.delete<ProcessoAcordo>(this.URL_API + '/api/Acordo/delete-acordo/' + id_acordo);
    }
  }
