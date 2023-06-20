import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoPatronoResponsavel } from '../models/PROCESSO_PATRONO_RESPONSAVEL.model';

@Injectable({
  providedIn: 'root'
})
export class PatronoResponsavelService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllPatronoResponsavel(): Observable<ProcessoPatronoResponsavel[]> {
    return this.http.get<ProcessoPatronoResponsavel[]>(this.baseApiUrl + '/api/Sistema/patrono-responsavel')
  }
}
