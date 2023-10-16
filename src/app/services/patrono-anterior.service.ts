import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ProcessoPatronosAnteriors } from '../models/PROCESSO_PATRONOS_ANTERIORES.model';

@Injectable({
  providedIn: 'root'
})
export class PatronoAnteriorService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  addPatronoAnterior(createPatronoAnteriorRequest: ProcessoPatronosAnteriors): Observable<ProcessoPatronosAnteriors> {
    // delete createPatronoAnteriorRequest.ID;
    return this.http.post<ProcessoPatronosAnteriors>(this.baseApiUrl + '/api/Sistema/add-patrono-anterior', createPatronoAnteriorRequest);
  }

  getProcessoPatronoAnterior(idProcesso: string): Observable<ProcessoPatronosAnteriors[]> {
    return this.http.get<ProcessoPatronosAnteriors[]>(this.baseApiUrl + '/api/Sistema/processo/all/patrono-anterior/' + idProcesso);
  }
}
