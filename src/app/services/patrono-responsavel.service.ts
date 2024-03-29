import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { ProcessoPatronoResponsavel } from '../models/PROCESSO_PATRONO_RESPONSAVEL.model';

@Injectable({
  providedIn: 'root'
})
export class PatronoResponsavelService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllPatronoResponsavel(): Observable<ProcessoPatronoResponsavel[]> {
    return this.http.get<ProcessoPatronoResponsavel[]>(this.URL_API + '/api/PatronoResponsavel/patrono-responsavel');
  }

  getPatronoResponsavel(id_patrono_responsavel: string): Observable<ProcessoPatronoResponsavel> {
    return this.http.get<ProcessoPatronoResponsavel>(this.URL_API + '/api/PatronoResponsavel/patrono-responsavel/' + id_patrono_responsavel);
  }

  createPatronoResponsavel(createPatronoResponsavelRequest: ProcessoPatronoResponsavel): Observable<ProcessoPatronoResponsavel> {
    delete createPatronoResponsavelRequest.ID;
    return this.http.post<ProcessoPatronoResponsavel>(this.URL_API + '/api/PatronoResponsavel/add-patrono-responsavel', createPatronoResponsavelRequest);
  }

  updatePatronoResponsavel(id_patrono_responsavel: string, updatePatronoResponsavelRequest: ProcessoPatronoResponsavel): Observable<ProcessoPatronoResponsavel> {
    updatePatronoResponsavelRequest.ID = id_patrono_responsavel;
    return this.http.put<ProcessoPatronoResponsavel>(this.URL_API + '/api/PatronoResponsavel/update-patrono-responsavel/' + id_patrono_responsavel, updatePatronoResponsavelRequest);
  }

  deletePatronoResponsavel(id_patrono_responsavel: string): Observable<ProcessoPatronoResponsavel> {
    return this.http.delete<ProcessoPatronoResponsavel>(this.URL_API + '/api/PatronoResponsavel/delete-patrono-responsavel/' + id_patrono_responsavel);
  }
}
