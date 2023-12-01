import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { ProcessoAmbito } from '../models/PROCESSO_AMBITO.model';

@Injectable({
  providedIn: 'root'
})
export class AmbitoService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllAmbito(): Observable<ProcessoAmbito[]> {
    return this.http.get<ProcessoAmbito[]>(this.URL_API + '/api/Ambito/ambito')
  }

  createAmbito(createAmbitoRequest: ProcessoAmbito): Observable<ProcessoAmbito> {
    delete createAmbitoRequest.ID;
    return this.http.post<ProcessoAmbito>(this.URL_API + '/api/Ambito/add-ambito', createAmbitoRequest);
  }

  updateAmbito(id: String, updateAmbitoRequest: ProcessoAmbito): Observable<ProcessoAmbito> {
    updateAmbitoRequest.ID = id;
    return this.http.put<ProcessoAmbito>(this.URL_API + '/api/Ambito/update-ambito/' + id, updateAmbitoRequest)

  }

  deleteAmbito(id: String): Observable<ProcessoAmbito> {
    return this.http.delete<ProcessoAmbito>(this.URL_API + '/api/Ambito/delete-ambito/' + id)
  }
}
