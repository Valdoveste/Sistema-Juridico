import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoVara } from '../models/PROCESSO_VARA.model';

@Injectable({
  providedIn: 'root'
})
export class VaraService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllVara(): Observable<ProcessoVara[]> {
    return this.http.get<ProcessoVara[]>(this.baseApiUrl + '/api/Sistema/ambito')
  }
}
