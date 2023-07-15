import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoFase } from '../models/PROCESSO_FASE.model';

@Injectable({
  providedIn: 'root'
})
export class FaseService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllFase(): Observable<ProcessoFase[]> {
    return this.http.get<ProcessoFase[]>(this.baseApiUrl + '/api/Sistema/fase');
  }

  // createFase(createFaseRequest: ProcessoFase): Observable<ProcessoFase> {
  //   delete createFaseRequest.ID;
  //   return this.http.post<ProcessoFase>(this.baseApiUrl + '/api/Sistema/add-fase', createFaseRequest);
  // }

  // updateFase(id: string, updateFaseRequest: ProcessoFase): Observable<ProcessoFase> {
  //   updateFaseRequest.ID = id;
  //   return this.http.put<ProcessoFase>(this.baseApiUrl + '/api/Sistema/update-fase/' + id, updateFaseRequest);
  // }

  // deleteFase(id: string): Observable<ProcessoFase> {
  //   return this.http.delete<ProcessoFase>(this.baseApiUrl + '/api/Sistema/delete-fase/' + id);
  // }
}
