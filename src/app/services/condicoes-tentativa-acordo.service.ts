import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/.environments/.environment';
import { Observable } from 'rxjs';
import { ProcessoCondicoesTentativaAcordo } from '../models/PROCESSO_CONDICOES_TENTATIVA_ACORDO.model';

@Injectable({
  providedIn: 'root'
})
export class CondicoesTentativaAcordoService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllCondicoesTentativaAcordo(): Observable<ProcessoCondicoesTentativaAcordo[]> {
    return this.http.get<ProcessoCondicoesTentativaAcordo[]>(this.URL_API + '/api/Sistema/ambito')
  }
}
