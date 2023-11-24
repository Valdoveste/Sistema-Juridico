import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'env';
import { ProcessoPatronosAnteriors } from '../models/PROCESSO_PATRONOS_ANTERIORES';

@Injectable({
  providedIn: 'root'
})
export class PatronoAnteriorService {
  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  addPatronoAnterior(createPatronoAnteriorRequest: ProcessoPatronosAnteriors): Observable<ProcessoPatronosAnteriors> {
    return this.http.post<ProcessoPatronosAnteriors>(this.URL_API + '/api/Sistema/add-patrono-anterior', createPatronoAnteriorRequest);
  }

  getProcessoPatronoAnterior(idProcesso: string): Observable<ProcessoPatronosAnteriors[]> {
    return this.http.get<ProcessoPatronosAnteriors[]>(this.URL_API + '/api/Sistema/processo/all/patrono-anterior/' + idProcesso);
  }
}
