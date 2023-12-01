import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { ProcessoFase } from '../models/PROCESSO_FASE.model';

@Injectable({
  providedIn: 'root'
})
export class FaseService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllFase(): Observable<ProcessoFase[]> {
    return this.http.get<ProcessoFase[]>(this.URL_API + '/api/Fase/fase');
  }

  // createFase(createFaseRequest: ProcessoFase): Observable<ProcessoFase> {
  //   delete createFaseRequest.ID;
  //   return this.http.post<ProcessoFase>(this.URL_API + '/api/Fase/add-fase', createFaseRequest);
  // }

  // updateFase(id: string, updateFaseRequest: ProcessoFase): Observable<ProcessoFase> {
  //   updateFaseRequest.ID = id;
  //   return this.http.put<ProcessoFase>(this.URL_API + '/api/Fase/update-fase/' + id, updateFaseRequest);
  // }

  // deleteFase(id: string): Observable<ProcessoFase> {
  //   return this.http.delete<ProcessoFase>(this.URL_API + '/api/Fase/delete-fase/' + id);
  // }
}
