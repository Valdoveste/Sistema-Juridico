import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoCondicoesTentativaAcordo } from '../models/PROCESSO_CONDICOES_TENTATIVA_ACORDO.model';

@Injectable({
  providedIn: 'root'
})
export class CondicoesTentativaAcordoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllCondicoesTentativaAcordo(): Observable<ProcessoCondicoesTentativaAcordo[]> {
    return this.http.get<ProcessoCondicoesTentativaAcordo[]>(this.baseApiUrl + '/api/Sistema/ambito')
  }
}
