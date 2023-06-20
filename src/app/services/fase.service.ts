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
    return this.http.get<ProcessoFase[]>(this.baseApiUrl + '/api/Sistema/ambito')
  }
}
