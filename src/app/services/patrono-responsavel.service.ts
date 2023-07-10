import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoPatronoResponsavel } from '../models/PROCESSO_PATRONORESPONSAVEL.model';

@Injectable({
  providedIn: 'root'
})
export class PatronoResponsavelService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllPatronoResponsavel(): Observable<ProcessoPatronoResponsavel[]> {
    return this.http.get<ProcessoPatronoResponsavel[]>(this.baseApiUrl + '/api/Sistema/patrono-responsavel');
  }

  createPatronoResponsavel(createPatronoResponsavelRequest: ProcessoPatronoResponsavel): Observable<ProcessoPatronoResponsavel> {
    delete createPatronoResponsavelRequest.ID;
    return this.http.post<ProcessoPatronoResponsavel>(this.baseApiUrl + '/api/Sistema/add-patrono-responsavel', createPatronoResponsavelRequest);
  }

  updatePatronoResponsavel(id: string, updatePatronoResponsavelRequest: ProcessoPatronoResponsavel): Observable<ProcessoPatronoResponsavel> {
    updatePatronoResponsavelRequest.ID = id;
    return this.http.put<ProcessoPatronoResponsavel>(this.baseApiUrl + '/api/Sistema/update-patrono-responsavel/' + id, updatePatronoResponsavelRequest);
  }

  deletePatronoResponsavel(id: string): Observable<ProcessoPatronoResponsavel> {
    return this.http.delete<ProcessoPatronoResponsavel>(this.baseApiUrl + '/api/Sistema/delete-patrono-responsavel/' + id);
  }
}
